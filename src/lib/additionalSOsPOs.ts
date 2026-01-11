// COMPLETE ADDITIONAL MOCK DATA
// Add this data to mockData.ts to complete the curated approach

// ==================================================
// 1. ADDITIONAL SALES ORDERS (to ensure 5+ per major company)
// ==================================================

// comp-002: Currently has 4, add 1 more
{ id: "so-017", companyId: "comp-002", orderNumber: "SO-2024-005", customerId: "cust-001", customerName: "PT. Maju Sejahtera", orderDate: "2024-12-05", expectedDeliveryDate: "2024-12-12", status: "picking" as const, subtotal: 2890.00, taxAmount: 289.00, total: 3179.00, notes: "Picking in progress", createdBy: "user-002", createdAt: new Date("2024-12-05") },

// comp-004: Currently has 3, add 2 more
{ id: "so-018", companyId: "comp-004", orderNumber: "APAC-SO-2024-004", customerId: "cust-007", customerName: "Singapore Manufacturing Pte Ltd", orderDate: "2024-11-20", expectedDeliveryDate: "2024-12-05", status: "packed" as const, subtotal: 3850.00, taxAmount: 385.00, total: 4235.00, notes: "Ready for delivery", createdBy: "user-004", createdAt: new Date("2024-11-20") },
{ id: "so-019", companyId: "comp-004", orderNumber: "APAC-SO-2024-005", customerId: "cust-007", customerName: "Singapore Manufacturing Pte Ltd", orderDate: "2024-11-25", expectedDeliveryDate: "2024-12-10", status: "picking" as const, subtotal: 2750.00, taxAmount: 275.00, total: 3025.00, notes: "Being picked", createdBy: "user-004", createdAt: new Date("2024-11-25") },

// comp-011: Currently has 4, add 1 more
{ id: "so-020", companyId: "comp-011", orderNumber: "UK-SO-2024-005", customerId: "cust-006", customerName: "British Tech Industries Ltd", orderDate: "2024-11-25", expectedDeliveryDate: "2024-12-10", status: "packed" as const, subtotal: 4680.00, taxAmount: 468.00, total: 5148.00, notes: "Packed and ready", createdBy: "user-011", createdAt: new Date("2024-11-25") },

// comp-012: Add 5 SOs
{ id: "so-021", companyId: "comp-012", orderNumber: "FR-SO-2024-001", customerId: "cust-010", customerName: "Société Parisienne SARL", orderDate: "2024-11-01", expectedDeliveryDate: "2024-11-15", status: "draft" as const, subtotal: 2400.00, taxAmount: 240.00, total: 2640.00, notes: "Draft", createdBy: "user-012", createdAt: new Date("2024-11-01") },
{ id: "so-022", companyId: "comp-012", orderNumber: "FR-SO-2024-002", customerId: "cust-010", customerName: "Société Parisienne SARL", orderDate: "2024-11-05", expectedDeliveryDate: "2024-11-20", status: "confirmed" as const, subtotal: 3100.00, taxAmount: 310.00, total: 3410.00, notes: "Confirmed", createdBy: "user-012", createdAt: new Date("2024-11-05") },
{ id: "so-023", companyId: "comp-012", orderNumber: "FR-SO-2024-003", customerId: "cust-010", customerName: "Société Parisienne SARL", orderDate: "2024-11-10", expectedDeliveryDate: "2024-11-25", status: "picking" as const, subtotal: 4200.00, taxAmount: 420.00, total: 4620.00, notes: "Picking", createdBy: "user-012", createdAt: new Date("2024-11-10") },
{ id: "so-024", companyId: "comp-012", orderNumber: "FR-SO-2024-004", customerId: "cust-010", customerName: "Société Parisienne SARL", orderDate: "2024-11-15", expectedDeliveryDate: "2024-11-30", status: "packed" as const, subtotal: 1950.00, taxAmount: 195.00, total: 2145.00, notes: "Packed", createdBy: "user-012", createdAt: new Date("2024-11-15") },
{ id: "so-025", companyId: "comp-012", orderNumber: "FR-SO-2024-005", customerId: "cust-010", customerName: "Société Parisienne SARL", orderDate: "2024-11-20", expectedDeliveryDate: "2024-12-05", status: "delivered" as const, subtotal: 3750.00, taxAmount: 375.00, total: 4125.00, notes: "Delivered", createdBy: "user-012", createdAt: new Date("2024-11-20") },

// comp-013: Add 5 SOs
{ id: "so-026", companyId: "comp-013", orderNumber: "JP-SO-2024-001", customerId: "cust-011", customerName: "Tokyo Industries KK", orderDate: "2024-11-01", expectedDeliveryDate: "2024-11-15", status: "draft" as const, subtotal: 3400.00, taxAmount: 340.00, total: 3740.00, notes: "Draft", createdBy: "user-013", createdAt: new Date("2024-11-01") },
{ id: "so-027", companyId: "comp-013", orderNumber: "JP-SO-2024-002", customerId: "cust-011", customerName: "Tokyo Industries KK", orderDate: "2024-11-05", expectedDeliveryDate: "2024-11-20", status: "confirmed" as const, subtotal: 2800.00, taxAmount: 280.00, total: 3080.00, notes: "Confirmed", createdBy: "user-013", createdAt: new Date("2024-11-05") },
{ id: "so-028", companyId: "comp-013", orderNumber: "JP-SO-2024-003", customerId: "cust-011", customerName: "Tokyo Industries KK", orderDate: "2024-11-10", expectedDeliveryDate: "2024-11-25", status: "picking" as const, subtotal: 4500.00, taxAmount: 450.00, total: 4950.00, notes: "Picking", createdBy: "user-013", createdAt: new Date("2024-11-10") },
{ id: "so-029", companyId: "comp-013", orderNumber: "JP-SO-2024-004", customerId: "cust-011", customerName: "Tokyo Industries KK", orderDate: "2024-11-15", expectedDeliveryDate: "2024-11-30", status: "packed" as const, subtotal: 2100.00, taxAmount: 210.00, total: 2310.00, notes: "Packed", createdBy: "user-013", createdAt: new Date("2024-11-15") },
{ id: "so-030", companyId: "comp-013", orderNumber: "JP-SO-2024-005", customerId: "cust-011", customerName: "Tokyo Industries KK", orderDate: "2024-11-20", expectedDeliveryDate: "2024-12-05", status: "delivered" as const, subtotal: 5200.00, taxAmount: 520.00, total: 5720.00, notes: "Delivered", createdBy: "user-013", createdAt: new Date("2024-11-20") },

// TOTAL ADDITIONAL SOs: 14 (bringing total from 16 to 30)

// ==================================================
// 2. ADDITIONAL PURCHASE ORDERS
// ==================================================

// comp-002: Currently has 3, add 2 more
{ id: "po-012", companyId: "comp-002", orderNumber: "PO-2024-004", vendorId: "vend-001", vendorName: "Prime Suppliers Co.", orderDate: "2024-12-04", expectedDeliveryDate: "2024-12-20", status: "receiving" as const, subtotal: 4200.00, taxAmount: 420.00, total: 4620.00, notes: "Receiving", createdBy: "user-002", createdAt: new Date("2024-12-04") },
{ id: "po-013", companyId: "comp-002", orderNumber: "PO-2024-005", vendorId: "vend-001", vendorName: "Prime Suppliers Co.", orderDate: "2024-12-05", expectedDeliveryDate: "2024-12-21", status: "draft" as const, subtotal: 3100.00, taxAmount: 310.00, total: 3410.00, notes: "Draft", createdBy: "user-002", createdAt: new Date("2024-12-05") },

// comp-003: Currently has 3, add 2 more
{ id: "po-014", companyId: "comp-003", orderNumber: "EU-PO-2024-004", vendorId: "vend-004", vendorName: "German Parts Supplier", orderDate: "2024-11-05", expectedDeliveryDate: "2024-11-20", status: "receiving" as const, subtotal: 3800.00, taxAmount: 380.00, total: 4180.00, notes: "Receiving", createdBy: "user-003", createdAt: new Date("2024-11-05") },
{ id: "po-015", companyId: "comp-003", orderNumber: "EU-PO-2024-005", vendorId: "vend-002", vendorName: "Quality Materials Inc.", orderDate: "2024-11-10", expectedDeliveryDate: "2024-11-25", status: "confirmed" as const, subtotal: 2950.00, taxAmount: 295.00, total: 3245.00, notes: "Confirmed", createdBy: "user-003", createdAt: new Date("2024-11-10") },

// comp-004: Currently has 2, add 3 more
{ id: "po-016", companyId: "comp-004", orderNumber: "APAC-PO-2024-003", vendorId: "vend-006", vendorName: "Asia Pacific Supplies", orderDate: "2024-11-20", expectedDeliveryDate: "2024-12-05", status: "receiving" as const, subtotal: 4100.00, taxAmount: 410.00, total: 4510.00, notes: "Receiving", createdBy: "user-004", createdAt: new Date("2024-11-20") },
{ id: "po-017", companyId: "comp-004", orderNumber: "APAC-PO-2024-004", vendorId: "vend-006", vendorName: "Asia Pacific Supplies", orderDate: "2024-11-25", expectedDeliveryDate: "2024-12-10", status: "received" as const, subtotal: 3600.00, taxAmount: 360.00, total: 3960.00, notes: "Received", createdBy: "user-004", createdAt: new Date("2024-11-25") },
{ id: "po-018", companyId: "comp-004", orderNumber: "APAC-PO-2024-005", vendorId: "vend-006", vendorName: "Asia Pacific Supplies", orderDate: "2024-11-28", expectedDeliveryDate: "2024-12-13", status: "draft" as const, subtotal: 2750.00, taxAmount: 275.00, total: 3025.00, notes: "Draft", createdBy: "user-004", createdAt: new Date("2024-11-28") },

// comp-011: Currently has 3, add 2 more
{ id: "po-019", companyId: "comp-011", orderNumber: "UK-PO-2024-004", vendorId: "vend-005", vendorName: "UK Supplies Limited", orderDate: "2024-11-01", expectedDeliveryDate: "2024-11-15", status: "receiving" as const, subtotal: 4200.00, taxAmount: 420.00, total: 4620.00, notes: "Receiving", createdBy: "user-011", createdAt: new Date("2024-11-01") },
{ id: "po-020", companyId: "comp-011", orderNumber: "UK-PO-2024-005", vendorId: "vend-003", vendorName: "FastShip Logistics", orderDate: "2024-11-15", expectedDeliveryDate: "2024-11-30", status: "draft" as const, subtotal: 2850.00, taxAmount: 285.00, total: 3135.00, notes: "Draft", createdBy: "user-011", createdAt: new Date("2024-11-15") },

// comp-012: Add 5 POs
{ id: "po-021", companyId: "comp-012", orderNumber: "FR-PO-2024-001", vendorId: "vend-008", vendorName: "France Manufacturing Supply", orderDate: "2024-10-01", expectedDeliveryDate: "2024-10-15", status: "draft" as const, subtotal: 2500.00, taxAmount: 250.00, total: 2750.00, notes: "Draft", createdBy: "user-012", createdAt: new Date("2024-10-01") },
{ id: "po-022", companyId: "comp-012", orderNumber: "FR-PO-2024-002", vendorId: "vend-008", vendorName: "France Manufacturing Supply", orderDate: "2024-10-10", expectedDeliveryDate: "2024-10-25", status: "confirmed" as const, subtotal: 3200.00, taxAmount: 320.00, total: 3520.00, notes: "Confirmed", createdBy: "user-012", createdAt: new Date("2024-10-10") },
{ id: "po-023", companyId: "comp-012", orderNumber: "FR-PO-2024-003", vendorId: "vend-008", vendorName: "France Manufacturing Supply", orderDate: "2024-10-20", expectedDeliveryDate: "2024-11-05", status: "receiving" as const, subtotal: 4300.00, taxAmount: 430.00, total: 4730.00, notes: "Receiving", createdBy: "user-012", createdAt: new Date("2024-10-20") },
{ id: "po-024", companyId: "comp-012", orderNumber: "FR-PO-2024-004", vendorId: "vend-008", vendorName: "France Manufacturing Supply", orderDate: "2024-11-01", expectedDeliveryDate: "2024-11-15", status: "received" as const, subtotal: 2100.00, taxAmount: 210.00, total: 2310.00, notes: "Received", createdBy: "user-012", createdAt: new Date("2024-11-01") },
{ id: "po-025", companyId: "comp-012", orderNumber: "FR-PO-2024-005", vendorId: "vend-008", vendorName: "France Manufacturing Supply", orderDate: "2024-11-15", expectedDeliveryDate: "2024-11-30", status: "confirmed" as const, subtotal: 3850.00, taxAmount: 385.00, total: 4235.00, notes: "Confirmed", createdBy: "user-012", createdAt: new Date("2024-11-15") },

// comp-013: Add 5 POs
{ id: "po-026", companyId: "comp-013", orderNumber: "JP-PO-2024-001", vendorId: "vend-009", vendorName: "Japan Industrial Suppliers", orderDate: "2024-10-05", expectedDeliveryDate: "2024-10-20", status: "draft" as const, subtotal: 3500.00, taxAmount: 350.00, total: 3850.00, notes: "Draft", createdBy: "user-013", createdAt: new Date("2024-10-05") },
{ id: "po-027", companyId: "comp-013", orderNumber: "JP-PO-2024-002", vendorId: "vend-009", vendorName: "Japan Industrial Suppliers", orderDate: "2024-10-15", expectedDeliveryDate: "2024-10-30", status: "confirmed" as const, subtotal: 2900.00, taxAmount: 290.00, total: 3190.00, notes: "Confirmed", createdBy: "user-013", createdAt: new Date("2024-10-15") },
{ id: "po-028", companyId: "comp-013", orderNumber: "JP-PO-2024-003", vendorId: "vend-009", vendorName: "Japan Industrial Suppliers", orderDate: "2024-10-25", expectedDeliveryDate: "2024-11-10", status: "receiving" as const, subtotal: 4600.00, taxAmount: 460.00, total: 5060.00, notes: "Receiving", createdBy: "user-013", createdAt: new Date("2024-10-25") },
{ id: "po-029", companyId: "comp-013", orderNumber: "JP-PO-2024-004", vendorId: "vend-009", vendorName: "Japan Industrial Suppliers", orderDate: "2024-11-05", expectedDeliveryDate: "2024-11-20", status: "received" as const, subtotal: 2200.00, taxAmount: 220.00, total: 2420.00, notes: "Received", createdBy: "user-013", createdAt: new Date("2024-11-05") },
{ id: "po-030", companyId: "comp-013", orderNumber: "JP-PO-2024-005", vendorId: "vend-009", vendorName: "Japan Industrial Suppliers", orderDate: "2024-11-20", expectedDeliveryDate: "2024-12-05", status: "confirmed" as const, subtotal: 5300.00, taxAmount: 530.00, total: 5830.00, notes: "Confirmed", createdBy: "user-013", createdAt: new Date("2024-11-20") },

// TOTAL ADDITIONAL POs: 19 (bringing total from 11 to 30)

// NOTE: Copy these records carefully into mockData.ts in their respective arrays
// Add SOs to mockSalesOrdersFull before closing bracket ]
// Add POs to mock PurchaseOrdersFull before closing bracket ]
// Invoices are in the separate additionalMockData.ts file
