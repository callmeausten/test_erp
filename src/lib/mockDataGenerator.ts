// Programmatic Mock Data Generator
// Generates comprehensive transactional data for all companies

import {
    mockCompanies,
    mockCustomersFull,
    mockVendorsFull,
    mockProductsFull,
    mockWarehouses
} from './mockData';

// Helper to generate sales orders with various statuses
export function generateSalesOrders() {
    const statuses = ['draft', 'confirmed', 'picking', 'packed', 'delivered'] as const;
    const orders: any[] = [];
    let orderId = 1;

    // Major companies: 5 SOs each
    const majorCompanies = ['comp-002', 'comp-003', 'comp-004', 'comp-011', 'comp-012', 'comp-013'];

    majorCompanies.forEach((companyId, companyIndex) => {
        const companyCustomers = mockCustomersFull.filter(c => c.companyId === companyId);
        const companyProducts = mockProductsFull.filter(p => p.companyId === companyId);

        if (companyCustomers.length === 0 || companyProducts.length === 0) return;

        for (let i = 0; i < 5; i++) {
            const status = statuses[i % statuses.length];
            const customer = companyCustomers[i % companyCustomers.length];
            const product = companyProducts[i % companyProducts.length];

            const quantity = 10 + (i * 5);
            const unitPrice = product.sellingPrice || 50;
            const subtotal = quantity * unitPrice;
            const taxAmount = subtotal * 0.1;
            const total = subtotal + taxAmount;

            orders.push({
                id: `so-gen-${String(orderId).padStart(3, '0')}`,
                companyId,
                orderNumber: `SO-2024-${String(orderId + 100).padStart(4, '0')}`,
                customerId: customer.id,
                customerName: customer.name,
                orderDate: `2024-${String(6 + (i % 6)).padStart(2, '0')}-${String(1 + (i * 3)).padStart(2, '0')}`,
                expectedDeliveryDate: `2024-${String(7 + (i % 5)).padStart(2, '0')}-${String(1 + (i * 3)).padStart(2, '0')}`,
                status,
                subtotal,
                taxAmount,
                total,
                notes: `Generated ${status} order for ${customer.name}`,
                createdBy: 'user-002',
                createdAt: new Date(`2024-${String(6 + (i % 6)).padStart(2, '0')}-01`),
            });
            orderId++;
        }
    });

    // Branches: 3 SOs each
    const branchCompanies = ['comp-005', 'comp-006', 'comp-007', 'comp-008', 'comp-009', 'comp-014', 'comp-015'];

    branchCompanies.forEach((companyId) => {
        const companyCustomers = mockCustomersFull.filter(c => c.companyId === companyId);
        const companyProducts = mockProductsFull.filter(p => p.companyId === companyId);

        if (companyCustomers.length === 0 || companyProducts.length === 0) return;

        for (let i = 0; i < 3; i++) {
            const status = statuses[i % statuses.length];
            const customer = companyCustomers[0]; // Use first customer
            const product = companyProducts[0]; // Use first product

            const quantity = 5 + (i * 3);
            const unitPrice = product.sellingPrice || 50;
            const subtotal = quantity * unitPrice;
            const taxAmount = subtotal * 0.1;
            const total = subtotal + taxAmount;

            orders.push({
                id: `so-gen-${String(orderId).padStart(3, '0')}`,
                companyId,
                orderNumber: `SO-2024-${String(orderId + 100).padStart(4, '0')}`,
                customerId: customer.id,
                customerName: customer.name,
                orderDate: `2024-${String(7 + i).padStart(2, '0')}-15`,
                expectedDeliveryDate: `2024-${String(8 + i).padStart(2, '0')}-15`,
                status,
                subtotal,
                taxAmount,
                total,
                notes: `Generated ${status} order`,
                createdBy: 'user-002',
                createdAt: new Date(`2024-${String(7 + i).padStart(2, '0')}-15`),
            });
            orderId++;
        }
    });

    return orders;
}

// Helper to generate purchase orders
export function generatePurchaseOrders() {
    const statuses = ['draft', 'confirmed', 'receiving', 'received'] as const;
    const orders: any[] = [];
    let orderId = 1;

    const majorCompanies = ['comp-002', 'comp-003', 'comp-004', 'comp-011', 'comp-012', 'comp-013'];

    majorCompanies.forEach((companyId) => {
        const companyVendors = mockVendorsFull.filter(v => v.companyId === companyId);
        const companyProducts = mockProductsFull.filter(p => p.companyId === companyId);

        if (companyVendors.length === 0 || companyProducts.length === 0) return;

        for (let i = 0; i < 5; i++) {
            const status = statuses[i % statuses.length];
            const vendor = companyVendors[i % companyVendors.length];
            const product = companyProducts[i % companyProducts.length];

            const quantity = 20 + (i * 10);
            const unitPrice = product.purchasePrice || product.costPrice || 30;
            const subtotal = quantity * unitPrice;
            const taxAmount = subtotal * 0.1;
            const total = subtotal + taxAmount;

            orders.push({
                id: `po-gen-${String(orderId).padStart(3, '0')}`,
                companyId,
                orderNumber: `PO-2024-${String(orderId + 100).padStart(4, '0')}`,
                vendorId: vendor.id,
                vendorName: vendor.name,
                orderDate: `2024-${String(5 + (i % 6)).padStart(2, '0')}-${String(1 + (i * 2)).padStart(2, '0')}`,
                expectedDeliveryDate: `2024-${String(6 + (i % 6)).padStart(2, '0')}-${String(1 + (i * 2)).padStart(2, '0')}`,
                status,
                subtotal,
                taxAmount,
                total,
                notes: `Generated ${status} PO from ${vendor.name}`,
                createdBy: 'user-002',
                createdAt: new Date(`2024-${String(5 + (i % 6)).padStart(2, '0')}-01`),
            });
            orderId++;
        }
    });

    const branchCompanies = ['comp-005', 'comp-006', 'comp-007', 'comp-008', 'comp-009', 'comp-014', 'comp-015'];

    branchCompanies.forEach((companyId) => {
        const companyVendors = mockVendorsFull.filter(v => v.companyId === companyId);
        const companyProducts = mockProductsFull.filter(p => p.companyId === companyId);

        if (companyVendors.length === 0 || companyProducts.length === 0) return;

        for (let i = 0; i < 3; i++) {
            const status = statuses[i % statuses.length];
            const vendor = companyVendors[0];
            const product = companyProducts[0];

            const quantity = 15 + (i * 5);
            const unitPrice = product.purchasePrice || product.costPrice || 30;
            const subtotal = quantity * unitPrice;
            const taxAmount = subtotal * 0.1;
            const total = subtotal + taxAmount;

            orders.push({
                id: `po-gen-${String(orderId).padStart(3, '0')}`,
                companyId,
                orderNumber: `PO-2024-${String(orderId + 100).padStart(4, '0')}`,
                vendorId: vendor.id,
                vendorName: vendor.name,
                orderDate: `2024-06-${String(10 + i).padStart(2, '0')}`,
                expectedDeliveryDate: `2024-07-${String(10 + i).padStart(2, '0')}`,
                status,
                subtotal,
                taxAmount,
                total,
                notes: `Generated ${status} PO`,
                createdBy: 'user-002',
                createdAt: new Date(`2024-06-${String(10 + i).padStart(2, '0')}`),
            });
            orderId++;
        }
    });

    return orders;
}

// Helper to generate invoices
export function generateInvoices() {
    const statuses = ['unpaid', 'partial', 'paid', 'overdue'] as const;
    const invoices: any[] = [];
    let invoiceId = 1;

    const majorCompanies = ['comp-002', 'comp-003', 'comp-004', 'comp-011', 'comp-012', 'comp-013'];

    majorCompanies.forEach((companyId) => {
        const companyCustomers = mockCustomersFull.filter(c => c.companyId === companyId);

        if (companyCustomers.length === 0) return;

        for (let i = 0; i < 5; i++) {
            const status = statuses[i % statuses.length];
            const customer = companyCustomers[i % companyCustomers.length];

            const subtotal = 1000 + (i * 500);
            const taxAmount = subtotal * 0.1;
            const total = subtotal + taxAmount;
            const amountPaid = status === 'paid' ? total : status === 'partial' ? total * 0.5 : 0;
            const amountDue = total - amountPaid;

            invoices.push({
                id: `inv-gen-${String(invoiceId).padStart(3, '0')}`,
                companyId,
                invoiceNumber: `INV-2024-${String(invoiceId + 100).padStart(4, '0')}`,
                invoiceType: 'customer',
                customerId: customer.id,
                customerName: customer.name,
                invoiceDate: `2024-${String(6 + (i % 6)).padStart(2, '0')}-${String(5 + (i * 3)).padStart(2, '0')}`,
                dueDate: `2024-${String(7 + (i % 5)).padStart(2, '0')}-${String(5 + (i * 3)).padStart(2, '0')}`,
                status,
                subtotal,
                taxAmount,
                total,
                amountPaid,
                amountDue,
                createdAt: new Date(`2024-${String(6 + (i % 6)).padStart(2, '0')}-01`),
            });
            invoiceId++;
        }
    });

    const branchCompanies = ['comp-005', 'comp-006', 'comp-007', 'comp-008', 'comp-009', 'comp-014', 'comp-015'];

    branchCompanies.forEach((companyId) => {
        const companyCustomers = mockCustomersFull.filter(c => c.companyId === companyId);

        if (companyCustomers.length === 0) return;

        for (let i = 0; i < 3; i++) {
            const status = statuses[i % statuses.length];
            const customer = companyCustomers[0];

            const subtotal = 800 + (i * 300);
            const taxAmount = subtotal * 0.1;
            const total = subtotal + taxAmount;
            const amountPaid = status === 'paid' ? total : status === 'partial' ? total * 0.5 : 0;
            const amountDue = total - amountPaid;

            invoices.push({
                id: `inv-gen-${String(invoiceId).padStart(3, '0')}`,
                companyId,
                invoiceNumber: `INV-2024-${String(invoiceId + 100).padStart(4, '0')}`,
                invoiceType: 'customer',
                customerId: customer.id,
                customerName: customer.name,
                invoiceDate: `2024-07-${String(10 + (i * 5)).padStart(2, '0')}`,
                dueDate: `2024-08-${String(10 + (i * 5)).padStart(2, '0')}`,
                status,
                subtotal,
                taxAmount,
                total,
                amountPaid,
                amountDue,
                createdAt: new Date(`2024-07-${String(10 + (i * 5)).padStart(2, '0')}`),
            });
            invoiceId++;
        }
    });

    return invoices;
}

// Generate and log summary
export function generateAllTransactionalData() {
    const salesOrders = generateSalesOrders();
    const purchaseOrders = generatePurchaseOrders();
    const invoices = generateInvoices();

    console.log('[DataGen] Generated transactional data:');
    console.log(`- ${salesOrders.length} sales orders`);
    console.log(`- ${purchaseOrders.length} purchase orders`);
    console.log(`- ${invoices.length} invoices`);

    return {
        salesOrders,
        purchaseOrders,
        invoices,
    };
}
