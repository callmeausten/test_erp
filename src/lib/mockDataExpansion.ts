// Mock Data Expansion for Multi-Company Setup
// This module creates additional mock data for comp-003 and comp-011

import type { Customer, Vendor, Product, SalesOrder, PurchaseOrder, Invoice } from "./MockDataContext";

// Generate additional mock data for comp-003 (Unanza Europe)
export function generateComp003MockData() {
    const comp003Customers: Omit<Customer, "id">[] = [
        {
            companyId: "comp-003",
            code: "EU-CUST-001",
            name: "Euro Manufacturing GmbH",
            email: "sales@euromanufacturing.de",
            phone: "+49 30 1234567",
            address: "Alexanderplatz 1",
            city: "Berlin",
            state: "Berlin",
            country: "Germany",
            postalCode: "10178",
            creditLimit: 150000,
            paymentTerms: 30,
            isActive: true,
        },
        {
            companyId: "comp-003",
            code: "EU-CUST-002",
            name: "French Industrial SARL",
            email: "contact@frenchindustrial.fr",
            phone: "+33 1 4567890",
            address: "Rue de Rivoli 25",
            city: "Paris",
            state: "Île-de-France",
            country: "France",
            postalCode: "75001",
            creditLimit: 100000,
            paymentTerms: 45,
            isActive: true,
        },
    ];

    const comp003Vendors: Omit<Vendor, "id">[] = [
        {
            companyId: "comp-003",
            code: "EU-VEND-001",
            name: "German Parts Supplier",
            legalName: "Deutsche Teile GmbH",
            email: "info@deutscheteile.de",
            phone: "+49 89 9876543",
            taxId: "DE-123456789",
            address: "Marienplatz 8",
            city: "Munich",
            state: "Bayern",
            country: "Germany",
            postalCode: "80331",
            paymentTerms: 30,
            vendorType: "regular",
            isActive: true,
        },
    ];

    const comp003Products: Omit<Product, "id">[] = [
        {
            companyId: "comp-003",
            sku: "EU-WDG-001",
            name: "Euro Widget Premium",
            description: "High-quality European widget",
            category: "Widgets",
            uom: "EA",
            costPrice: 40.0,
            sellingPrice: 65.0,
            stockQuantity: 150,
            reorderPoint: 30,
            isActive: true,
        },
        {
            companyId: "comp-003",
            sku: "EU-CPT-001",
            name: "Euro Component A",
            description: "Premium European component",
            category: "Components",
            uom: "BOX",
            costPrice: 25.0,
            sellingPrice: 42.0,
            stockQuantity: 200,
            reorderPoint: 50,
            isActive: true,
        },
    ];

    return { customers: comp003Customers, vendors: comp003Vendors, products: comp003Products };
}

// Generate additional mock data for comp-011 (TechGlobal UK)
export function generateComp011MockData() {
    const comp011Customers: Omit<Customer, "id">[] = [
        {
            companyId: "comp-011",
            code: "UK-CUST-001",
            name: "British Tech Industries Ltd",
            email: "procurement@britishtech.co.uk",
            phone: "+44 20 7946 0958",
            address: "10 Downing Street",
            city: "London",
            state: "Greater London",
            country: "United Kingdom",
            postalCode: "SW1A 2AA",
            creditLimit: 200000,
            paymentTerms: 30,
            isActive: true,
        },
        {
            companyId: "comp-011",
            code: "UK-CUST-002",
            name: "Scottish Manufacturing Co",
            email: "orders@scottishmfg.co.uk",
            phone: "+44 131 496 0000",
            address: "Royal Mile 50",
            city: "Edinburgh",
            state: "Scotland",
            country: "United Kingdom",
            postalCode: "EH1 1QS",
            creditLimit: 120000,
            paymentTerms: 14,
            isActive: true,
        },
    ];

    const comp011Vendors: Omit<Vendor, "id">[] = [
        {
            companyId: "comp-011",
            code: "UK-VEND-001",
            name: "UK Supplies Limited",
            legalName: "United Kingdom Supplies Ltd",
            email: "sales@uksupplies.co.uk",
            phone: "+44 161 946 0000",
            taxId: "GB-987654321",
            address: "Market Street 100",
            city: "Manchester",
            state: "Greater Manchester",
            country: "United Kingdom",
            postalCode: "M1 1AD",
            paymentTerms: 30,
            vendorType: "regular",
            isActive: true,
        },
    ];

    const comp011Products: Omit<Product, "id">[] = [
        {
            companyId: "comp-011",
            sku: "UK-WDG-001",
            name: "British Widget Classic",
            description: "Traditional UK-made widget",
            category: "Widgets",
            uom: "EA",
            costPrice: 35.0,
            sellingPrice: 55.0,
            stockQuantity: 180,
            reorderPoint: 25,
            isActive: true,
        },
        {
            companyId: "comp-011",
            sku: "UK-MAT-001",
            name: "UK Raw Material",
            description: "Locally sourced material",
            category: "Materials",
            uom: "KG",
            costPrice: 10.0,
            sellingPrice: 18.0,
            stockQuantity: 500,
            reorderPoint: 100,
            isActive: true,
        },
    ];

    return { customers: comp011Customers, vendors: comp011Vendors, products: comp011Products };
}

// Function to initialize additional data in MockDataContext
export function initializeAdditionalCompanyData(
    addCustomer: (customer: Omit<Customer, "id">) => Customer,
    addVendor: (vendor: Omit<Vendor, "id">) => Vendor,
    addProduct: (product: Omit<Product, "id">) => Product
) {
    // Add comp-003 data
    const comp003Data = generateComp003MockData();
    comp003Data.customers.forEach(addCustomer);
    comp003Data.vendors.forEach(addVendor);
    comp003Data.products.forEach(addProduct);

    // Add comp-011 data
    const comp011Data = generateComp011MockData();
    comp011Data.customers.forEach(addCustomer);
    comp011Data.vendors.forEach(addVendor);
    comp011Data.products.forEach(addProduct);

    console.log("[MockData] Additional company data initialized for comp-003 and comp-011");
}
