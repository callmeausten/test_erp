# Frontend-Only Application

This is a standalone frontend application with mock data - no backend server required!

## Features

- **100% Frontend** - Runs entirely in the browser
- **Mock Authentication** - Pre-configured with demo credentials
- **Mock Data** - Full ERP system with realistic sample data
- **No Backend Required** - Perfect for demos, prototypes, or offline development

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   The app will open automatically at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```
   Static files will be generated in the `dist/` folder

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Login Credentials

Since this uses mock authentication, you can login with:
- **Username**: `admin`
- **Password**: `admin` (or any password)

## What's Inside

- ✅ Full ERP dashboard with multiple modules
- ✅ Sales, Warehouse, Financial, and HR management
- ✅ Company hierarchy and multi-company support
- ✅ Mock data for companies, products, orders, invoices, employees, etc.
- ✅ Responsive UI with dark/light themes
- ✅ Complete CRUD operations (stored in browser memory)

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Radix UI** - Accessible components
- **React Query** - State management (with mock data)
- **Wouter** - Routing

## Deployment

The built application is a static site that can be deployed to:
- **Netlify** - Drag and drop the `dist/` folder
- **Vercel** - Connect your git repository
- **GitHub Pages** - Host directly from GitHub
- **Any static hosting** - Just serve the `dist/` folder

## Notes

- All data is stored in browser memory and will reset on page refresh
- MOCK_MODE is permanently enabled in this build
- No backend API calls are made - everything runs client-side
- Perfect for demonstrations, prototyping, and development

## Original Project

This frontend was extracted from a full-stack application. The original project includes a Node.js/Express backend with PostgreSQL database.
