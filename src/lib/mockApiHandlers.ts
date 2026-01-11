import { mockCompanies, mockUsers, mockRoles, mockUserCompanyRoles } from "./mockData";
import type { Company, CompanyHierarchyNode } from "@shared/schema";
import { COMPANY_TYPES, COMPANY_LEVELS } from "@shared/schema";

// In-memory store for companies (initialized from mockCompanies)
let companies: Company[] = mockCompanies.map(c => ({
    id: c.id,
    name: c.name,
    code: c.code,
    companyType: c.companyType,
    parentId: c.parentId,
    rootId: c.rootId,
    level: c.level as 1 | 2 | 3,
    currency: c.currency,
    taxId: c.taxId,
    address: c.address,
    city: c.city,
    country: c.country,
    phone: c.phone,
    email: c.email,
    website: c.website,
    isActive: c.isActive,
    createdAt: typeof c.createdAt === 'string' ? c.createdAt : c.createdAt.toISOString(),
    updatedAt: typeof c.updatedAt === 'string' ? c.updatedAt : c.updatedAt.toISOString(),
}));

// Helper: Build company hierarchy tree
function buildHierarchy(): CompanyHierarchyNode[] {
    const roots = companies.filter(c => c.parentId === null);

    function buildNode(company: Company): CompanyHierarchyNode {
        const children = companies
            .filter(c => c.parentId === company.id)
            .map(buildNode);

        return {
            company,
            children: children.sort((a, b) => a.company.name.localeCompare(b.company.name)),
        };
    }

    return roots.map(buildNode).sort((a, b) => a.company.name.localeCompare(b.company.name));
}

// Helper: Calculate rootId and level based on parent
function calculateCompanyMetadata(parentId: string | null): { rootId: string; level: 1 | 2 | 3 } {
    if (!parentId) {
        // This is a holding company
        return { rootId: "", level: 1 }; // rootId will be set after ID generation
    }

    const parent = companies.find(c => c.id === parentId);
    if (!parent) {
        throw new Error("Parent company not found");
    }

    const level = (parent.level + 1) as 1 | 2 | 3;
    if (level > 3) {
        throw new Error("Cannot create companies deeper than level 3");
    }

    return {
        rootId: parent.rootId,
        level,
    };
}

// Helper: Validate company type matches hierarchy rules
function validateCompanyHierarchy(companyType: string, parentId: string | null): void {
    if (companyType === COMPANY_TYPES.HOLDING && parentId) {
        throw new Error("Holding companies cannot have a parent");
    }

    if (companyType !== COMPANY_TYPES.HOLDING && !parentId) {
        throw new Error("Subsidiary and Branch companies must have a parent");
    }

    if (parentId) {
        const parent = companies.find(c => c.id === parentId);
        if (!parent) {
            throw new Error("Parent company not found");
        }

        // Validate parent-child type relationship
        if (companyType === COMPANY_TYPES.SUBSIDIARY && parent.companyType !== COMPANY_TYPES.HOLDING) {
            throw new Error("Subsidiaries must have a Holding company as parent");
        }

        if (companyType === COMPANY_TYPES.BRANCH && parent.companyType !== COMPANY_TYPES.SUBSIDIARY) {
            throw new Error("Branches must have a Subsidiary company as parent");
        }
    }
}

// Mock API Handlers
export async function handleMockApiRequest(url: string, options: RequestInit): Promise<Response> {
    const method = options.method || "GET";
    const pathname = new URL(url, window.location.origin).pathname;

    console.log(`[MockAPI] ${method} ${pathname}`);

    try {
        // GET /api/companies - List all companies
        if (method === "GET" && pathname === "/api/companies") {
            return new Response(JSON.stringify(companies), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // GET /api/companies/hierarchy - Get company hierarchy
        if (method === "GET" && pathname === "/api/companies/hierarchy") {
            const hierarchy = buildHierarchy();
            return new Response(JSON.stringify(hierarchy), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // POST /api/companies - Create new company
        if (method === "POST" && pathname === "/api/companies") {
            const body = JSON.parse(options.body as string);

            // Validate required fields
            if (!body.name || !body.code || !body.companyType || !body.currency) {
                return new Response(JSON.stringify({ error: "Missing required fields" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Validate hierarchy rules
            validateCompanyHierarchy(body.companyType, body.parentId);

            // Check for duplicate code
            if (companies.some(c => c.code === body.code)) {
                return new Response(JSON.stringify({ error: "Company code already exists" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Calculate metadata
            const metadata = calculateCompanyMetadata(body.parentId);

            // Generate new company
            const newCompany: Company = {
                id: `comp-${Date.now()}`,
                name: body.name,
                code: body.code,
                companyType: body.companyType,
                parentId: body.parentId || null,
                rootId: metadata.rootId || `comp-${Date.now()}`, // Will use own ID if holding
                level: metadata.level,
                currency: body.currency,
                taxId: body.taxId || undefined,
                address: body.address || undefined,
                city: body.city || undefined,
                country: body.country || undefined,
                phone: body.phone || undefined,
                email: body.email || undefined,
                website: body.website || undefined,
                isActive: true,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            // For holding companies, set rootId to own ID
            if (!newCompany.parentId) {
                newCompany.rootId = newCompany.id;
            }

            companies.push(newCompany);
            console.log(`[MockAPI] Created company:`, newCompany);

            return new Response(JSON.stringify(newCompany), {
                status: 201,
                headers: { "Content-Type": "application/json" },
            });
        }

        // PATCH /api/companies/:id - Update company
        if (method === "PATCH" && pathname.startsWith("/api/companies/")) {
            const id = pathname.split("/").pop();
            const companyIndex = companies.findIndex(c => c.id === id);

            if (companyIndex === -1) {
                return new Response(JSON.stringify({ error: "Company not found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                });
            }

            const body = JSON.parse(options.body as string);
            const existingCompany = companies[companyIndex];

            // Validate code uniqueness if changing
            if (body.code && body.code !== existingCompany.code) {
                if (companies.some(c => c.code === body.code && c.id !== id)) {
                    return new Response(JSON.stringify({ error: "Company code already exists" }), {
                        status: 400,
                        headers: { "Content-Type": "application/json" },
                    });
                }
            }

            // Update company (don't allow changing type, parent, or level)
            const updatedCompany: Company = {
                ...existingCompany,
                name: body.name ?? existingCompany.name,
                code: body.code ?? existingCompany.code,
                currency: body.currency ?? existingCompany.currency,
                taxId: body.taxId ?? existingCompany.taxId,
                address: body.address ?? existingCompany.address,
                city: body.city ?? existingCompany.city,
                country: body.country ?? existingCompany.country,
                phone: body.phone ?? existingCompany.phone,
                email: body.email ?? existingCompany.email,
                website: body.website ?? existingCompany.website,
                updatedAt: new Date().toISOString(),
            };

            companies[companyIndex] = updatedCompany;
            console.log(`[MockAPI] Updated company:`, updatedCompany);

            return new Response(JSON.stringify(updatedCompany), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // DELETE /api/companies/:id - Delete company
        if (method === "DELETE" && pathname.startsWith("/api/companies/")) {
            const id = pathname.split("/").pop();
            const company = companies.find(c => c.id === id);

            if (!company) {
                return new Response(JSON.stringify({ error: "Company not found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Check if company has children
            const hasChildren = companies.some(c => c.parentId === id);
            if (hasChildren) {
                return new Response(JSON.stringify({ error: "Cannot delete company with children" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
            }

            companies = companies.filter(c => c.id !== id);
            console.log(`[MockAPI] Deleted company:`, id);

            return new Response(null, { status: 204 });
        }

        // GET /api/users/:userId/companies - Get user's accessible companies
        if (method === "GET" && pathname.match(/^\/api\/users\/[^\/]+\/companies$/)) {
            // In mock mode, all users can access all companies
            return new Response(JSON.stringify(companies), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // GET /api/session/context - Get current session context
        if (method === "GET" && pathname === "/api/session/context") {
            const companyId = new URL(url, window.location.origin).searchParams.get("companyId") ||
                (options.headers as Record<string, string>)?.["x-company-id"];

            const activeCompany = companies.find(c => c.id === companyId) || companies[0];

            if (!activeCompany) {
                return new Response(JSON.stringify({ error: "No companies available" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Build company context
            const context = {
                userId: "user-001",
                activeCompany,
                userCompanies: companies, // In mock mode, user can access all companies
                permissions: ["*"], // Super admin permissions
                companyLevel: activeCompany.level,
                accessibleCompanyIds: companies.map(c => c.id),
                canConsolidate: activeCompany.level === 1,
                parentCompany: activeCompany.parentId
                    ? companies.find(c => c.id === activeCompany.parentId) || null
                    : null,
                childCompanies: companies.filter(c => c.parentId === activeCompany.id),
            };

            return new Response(JSON.stringify(context), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // POST /api/session/switch-company - Switch active company
        if (method === "POST" && pathname === "/api/session/switch-company") {
            const body = JSON.parse(options.body as string);
            const companyId = body.companyId;

            const activeCompany = companies.find(c => c.id === companyId);

            if (!activeCompany) {
                return new Response(JSON.stringify({ error: "Company not found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Build company context
            const context = {
                userId: body.userId || "user-001",
                activeCompany,
                userCompanies: companies,
                permissions: ["*"],
                companyLevel: activeCompany.level,
                accessibleCompanyIds: companies.map(c => c.id),
                canConsolidate: activeCompany.level === 1,
                parentCompany: activeCompany.parentId
                    ? companies.find(c => c.id === activeCompany.parentId) || null
                    : null,
                childCompanies: companies.filter(c => c.parentId === activeCompany.id),
            };

            console.log(`[MockAPI] Switched to company:`, activeCompany.name);

            return new Response(JSON.stringify(context), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // If no handler matched, return 404
        return new Response(JSON.stringify({ error: "Not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("[MockAPI] Error:", error);
        return new Response(JSON.stringify({ error: (error as Error).message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// Export function to check if a URL should be mocked
export function shouldMockUrl(url: string): boolean {
    return url.includes("/api/companies") ||
        url.includes("/api/session") ||
        url.includes("/api/users");
}
