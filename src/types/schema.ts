// Shared schema types for the application
// This file contains all the type definitions that would typically be shared between frontend and backend

// Company Types
export const COMPANY_TYPES = {
  HOLDING: "holding",
  SUBSIDIARY: "subsidiary",
  BRANCH: "branch",
} as const;

export const COMPANY_LEVELS = {
  HOLDING: 1,
  SUBSIDIARY: 2,
  BRANCH: 3,
} as const;

export type CompanyType = typeof COMPANY_TYPES[keyof typeof COMPANY_TYPES];
export type CompanyLevel = typeof COMPANY_LEVELS[keyof typeof COMPANY_LEVELS];

export interface Company {
  id: string;
  name: string;
  code: string;
  companyType: CompanyType;
  parentId: string | null;
  rootId: string;
  level: CompanyLevel;
  currency: string;
  taxId?: string;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  email?: string;
  website?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyHierarchyNode {
  company: Company;
  children: CompanyHierarchyNode[];
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserCompanyRole {
  id: string;
  userId: string;
  companyId: string;
  roleId: string;
  user?: User;
  company?: Company;
  role?: Role;
  createdAt: string;
  updatedAt: string;
}

// Role Types
export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: string[];
  isSystem: boolean;
  createdAt: string;
  updatedAt: string;
}

// Company Context
export interface CompanyContext {
  userId: string;
  activeCompany: Company;
  userCompanies: Company[];
  permissions: string[];
  companyLevel: CompanyLevel;
  accessibleCompanyIds: string[];
  canConsolidate: boolean;
  parentCompany: Company | null;
  childCompanies: Company[];
}

// Session Types
export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: string;
  createdAt: string;
}

// Employee Types
export interface Employee {
  id: string;
  companyId: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  hireDate: string;
  department?: string;
  position?: string;
  salary?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Customer Types
export interface Customer {
  id: string;
  companyId: string;
  customerCode: string;
  name: string;
  taxId?: string;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  email?: string;
  contactPerson?: string;
  creditLimit?: number;
  paymentTerms?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Product Types
export interface Product {
  id: string;
  companyId: string;
  productCode: string;
  name: string;
  description?: string;
  category?: string;
  unit: string;
  price: number;
  cost?: number;
  stockQuantity: number;
  reorderLevel?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Sales Order Types
export interface SalesOrder {
  id: string;
  companyId: string;
  orderNumber: string;
  customerId: string;
  orderDate: string;
  deliveryDate?: string;
  status: string;
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  notes?: string;
  customer?: Customer;
  items?: SalesOrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface SalesOrderItem {
  id: string;
  salesOrderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  taxRate: number;
  lineTotal: number;
  product?: Product;
}

// Inventory Transaction Types
export interface InventoryTransaction {
  id: string;
  companyId: string;
  productId: string;
  transactionType: string;
  quantity: number;
  referenceType?: string;
  referenceId?: string;
  notes?: string;
  product?: Product;
  createdAt: string;
}

// Inter-company Transaction Types
export interface InterCompanyTransaction {
  id: string;
  sourceCompanyId: string;
  targetCompanyId: string;
  transactionType: string;
  amount: number;
  currency: string;
  transferRate?: number;
  referenceNumber: string;
  description?: string;
  status: string;
  sourceCompany?: Company;
  targetCompany?: Company;
  createdAt: string;
  updatedAt: string;
}

// Attendance Types
export interface Attendance {
  id: string;
  companyId: string;
  employeeId: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  status: string;
  notes?: string;
  employee?: Employee;
  createdAt: string;
  updatedAt: string;
}

// Leave Request Types
export interface LeaveRequest {
  id: string;
  companyId: string;
  employeeId: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  status: string;
  reason?: string;
  approvedBy?: string;
  employee?: Employee;
  createdAt: string;
  updatedAt: string;
}

// Journal Entry Types
export interface JournalEntry {
  id: string;
  companyId: string;
  entryNumber: string;
  entryDate: string;
  description?: string;
  status: string;
  totalDebit: number;
  totalCredit: number;
  items?: JournalEntryItem[];
  createdAt: string;
  updatedAt: string;
}

export interface JournalEntryItem {
  id: string;
  journalEntryId: string;
  accountId: string;
  debitAmount: number;
  creditAmount: number;
  description?: string;
}

// Account Types
export interface Account {
  id: string;
  companyId: string;
  accountCode: string;
  accountName: string;
  accountType: string;
  parentAccountId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
