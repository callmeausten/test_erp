// COMPREHENSIVE MOCK DATA ADDITIONS
// This file contains the remaining mock data to be added to mockData.ts

// ========================================
// INVOICES (14 new invoices to add)
// ========================================

export const additionalInvoices = [
    // comp-002: Add 2 more invoices (currently has 3, need 5 total)
    { id: "inv-015", companyId: "comp-002", invoiceNumber: "INV-2024-004", invoiceType: "customer", customerId: "cust-001", customerName: "PT. Maju Sejahtera", invoiceDate: "2024-12-05", dueDate: "2025-01-05", status: "unpaid" as const, subtotal: 3200.00, taxAmount: 320.00, total: 3520.00, amountPaid: 0, amountDue: 3520.00, createdAt: new Date("2024-12-05") },
    { id: "inv-016", companyId: "comp-002", invoiceNumber: "INV-2024-005", invoiceType: "customer", customerId: "cust-001", customerName: "PT. Maju Sejahtera", invoiceDate: "2024-11-20", dueDate: "2024-12-20", status: "partial" as const, subtotal: 4100.00, taxAmount: 410.00, total: 4510.00, amountPaid: 2255.00, amountDue: 2255.00, createdAt: new Date("2024-11-20") },

    // comp-003: Add 1 more invoice (currently has 4, need 5 total)
    { id: "inv-017", companyId: "comp-003", invoiceNumber: "EU-INV-2024-005", invoiceType: "customer", customerId: "cust-005", customerName: "French Industrial SARL", invoiceDate: "2024-11-25", dueDate: "2024-12-25", status: "paid" as const, subtotal: 5670.00, taxAmount: 567.00, total: 6237.00, amountPaid: 6237.00, amountDue: 0, createdAt: new Date("2024-11-25") },

    // comp-004: Add 2 more invoices (currently has 3, need 5 total)
    { id: "inv-018", companyId: "comp-004", invoiceNumber: "APAC-INV-2024-004", invoiceType: "customer", customerId: "cust-007", customerName: "Singapore Manufacturing Pte Ltd", invoiceDate: "2024-11-20", dueDate: "2024-12-20", status: "overdue" as const, subtotal: 3800.00, taxAmount: 380.00, total: 4180.00, amountPaid: 0, amountDue: 4180.00, createdAt: new Date("2024-10-20") },
    { id: "inv-019", companyId: "comp-004", invoiceNumber: "APAC-INV-2024-005", invoiceType: "customer", customerId: "cust-007", customerName: "Singapore Manufacturing Pte Ltd", invoiceDate: "2024-11-25", dueDate: "2024-12-25", status: "unpaid" as const, subtotal: 2950.00, taxAmount: 295.00, total: 3245.00, amountPaid: 0, amountDue: 3245.00, createdAt: new Date("2024-11-25") },

    // comp-011: Add 1 more invoice (currently has 4, need 5 total)
    { id: "inv-020", companyId: "comp-011", invoiceNumber: "UK-INV-2024-005", invoiceType: "customer", customerId: "cust-006", customerName: "British Tech Industries Ltd", invoiceDate: "2024-11-15", dueDate: "2024-12-15", status: "paid" as const, subtotal: 4500.00, taxAmount: 450.00, total: 4950.00, amountPaid: 4950.00, amountDue: 0, createdAt: new Date("2024-11-15") },

    // comp-012: Add 5 invoices
    { id: "inv-021", companyId: "comp-012", invoiceNumber: "FR-INV-2024-001", invoiceType: "customer", customerId: "cust-010", customerName: "Société Parisienne SARL", invoiceDate: "2024-11-01", dueDate: "2024-12-01", status: "unpaid" as const, subtotal: 2480.00, taxAmount: 248.00, total: 2728.00, amountPaid: 0, amountDue: 2728.00, createdAt: new Date("2024-11-01") },
    { id: "inv-022", companyId: "comp-012", invoiceNumber: "FR-INV-2024-002", invoiceType: "customer", customerId: "cust-010", customerName: "Société Parisienne SARL", invoiceDate: "2024-11-10", dueDate: "2024-12-10", status: "paid" as const, subtotal: 3100.00, taxAmount: 310.00, total: 3410.00, amountPaid: 3410.00, amountDue: 0, createdAt: new Date("2024-11-10") },
    { id: "inv-023", companyId: "comp-012", invoiceNumber: "FR-INV-2024-003", invoiceType: "customer", customerId: "cust-010", customerName: "Société Parisienne SARL", invoiceDate: "2024-11-15", dueDate: "2024-12-15", status: "partial" as const, subtotal: 4200.00, taxAmount: 420.00, total: 4620.00, amountPaid: 2310.00, amountDue: 2310.00, createdAt: new Date("2024-11-15") },
    { id: "inv-024", companyId: "comp-012", invoiceNumber: "FR-INV-2024-004", invoiceType: "customer", customerId: "cust-010", customerName: "Société Parisienne SARL", invoiceDate: "2024-10-15", dueDate: "2024-11-15", status: "overdue" as const, subtotal: 1950.00, taxAmount: 195.00, total: 2145.00, amountPaid: 0, amountDue: 2145.00, createdAt: new Date("2024-10-15") },
    { id: "inv-025", companyId: "comp-012", invoiceNumber: "FR-INV-2024-005", invoiceType: "customer", customerId: "cust-010", customerName: "Société Parisienne SARL", invoiceDate: "2024-11-20", dueDate: "2024-12-20", status: "unpaid" as const, subtotal: 3750.00, taxAmount: 375.00, total: 4125.00, amountPaid: 0, amountDue: 4125.00, createdAt: new Date("2024-11-20") },

    // comp-013: Add 5 invoices  
    { id: "inv-026", companyId: "comp-013", invoiceNumber: "JP-INV-2024-001", invoiceType: "customer", customerId: "cust-011", customerName: "Tokyo Industries KK", invoiceDate: "2024-11-01", dueDate: "2024-12-01", status: "paid" as const, subtotal: 3400.00, taxAmount: 340.00, total: 3740.00, amountPaid: 3740.00, amountDue: 0, createdAt: new Date("2024-11-01") },
    { id: "inv-027", companyId: "comp-013", invoiceNumber: "JP-INV-2024-002", invoiceType: "customer", customerId: "cust-011", customerName: "Tokyo Industries KK", invoiceDate: "2024-11-10", dueDate: "2024-12-10", status: "unpaid" as const, subtotal: 2800.00, taxAmount: 280.00, total: 3080.00, amountPaid: 0, amountDue: 3080.00, createdAt: new Date("2024-11-10") },
    { id: "inv-028", companyId: "comp-013", invoiceNumber: "JP-INV-2024-003", invoiceType: "customer", customerId: "cust-011", customerName: "Tokyo Industries KK", invoiceDate: "2024-11-15", dueDate: "2024-12-15", status: "partial" as const, subtotal: 4500.00, taxAmount: 450.00, total: 4950.00, amountPaid: 2475.00, amountDue: 2475.00, createdAt: new Date("2024-11-15") },
    { id: "inv-029", companyId: "comp-013", invoiceNumber: "JP-INV-2024-004", invoiceType: "customer", customerId: "cust-011", customerName: "Tokyo Industries KK", invoiceDate: "2024-10-01", dueDate: "2024-11-01", status: "overdue" as const, subtotal: 2100.00, taxAmount: 210.00, total: 2310.00, amountPaid: 0, amountDue: 2310.00, createdAt: new Date("2024-10-01") },
    { id: "inv-030", companyId: "comp-013", invoiceNumber: "JP-INV-2024-005", invoiceType: "customer", customerId: "cust-011", customerName: "Tokyo Industries KK", invoiceDate: "2024-11-20", dueDate: "2024-12-20", status: "paid" as const, subtotal: 5200.00, taxAmount: 520.00, total: 5720.00, amountPaid: 5720.00, amountDue: 0, createdAt: new Date("2024-11-20") },
];

// Copy these records and add them to the mockInvoicesFull array in mockData.ts before the closing bracket ]
