// Company-aware data distribution helper
// This module helps distribute mock data across different companies

import { mockCompanies } from "./mockData";

// Define which companies should have operational data (subsidiaries and branches)
export const OPERATIONAL_COMPANIES = [
    "comp-002", // Unanza USA
    "comp-003", // Unanza Europe
    "comp-004", // Unanza Asia Pacific
    "comp-005", // Unanza NYC
    "comp-006", // Unanza LA
    "comp-011", // TechGlobal UK
    "comp-012", // TechGlobal France
    "comp-013", // TechGlobal Japan
];

// Map original mock data company IDs to distributed companies
export function distributeAcrossCompanies<T extends { companyId: string; id: string }>(
    items: T[],
    includeHoldings: boolean = false
): T[] {
    const companies = includeHoldings
        ? mockCompanies.map(c => c.id)
        : OPERATIONAL_COMPANIES;

    return items.flatMap((item, index) => {
        // Distribute items round-robin across operational companies
        const targetCompanyIndex = index % companies.length;
        const targetCompanyId = companies[targetCompanyIndex];

        return {
            ...item,
            companyId: targetCompanyId,
            // Update ID to include company prefix for uniqueness
            id: `${targetCompanyId}-${item.id}`,
        };
    });
}

// Filter data by active company (used in MockDataContext)
export function filterByCompany<T extends { companyId: string }>(
    items: T[],
    activeCompanyId: string | null
): T[] {
    if (!activeCompanyId) return items;
    return items.filter(item => item.companyId === activeCompanyId);
}

// Helper to assign new items to active company
export function assignToCompany<T extends Partial<{ companyId: string }>>(
    item: T,
    activeCompanyId: string
): T & { companyId: string } {
    return {
        ...item,
        companyId: activeCompanyId,
    };
}
