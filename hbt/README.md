# HBT Inc. - Transportation Company Website

A modern, responsive website for HBT Inc. transportation company featuring an interactive driver application system with automated PDF generation.

## 🚛 Overview

HBT Inc. provides reliable freight transportation services with fast delivery across the region. This website serves as both a company showcase and a digital platform for driver recruitment, featuring a comprehensive multi-step application process that automatically generates completed PDF applications.

## ✨ Features

### 🏠 Company Website

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive 3D Elements**: Truck visualization using React Three Fiber
- **Modern UI/UX**: Smooth animations with Framer Motion
- **Company Information**: About, Contact, Resources, and Partner showcase

### 📋 Driver Application System

- **Multi-Step Form**: 5-part application process with form validation
- **Real-time Validation**: React Hook Form integration with TypeScript
- **PDF Generation**: Automated PDF creation using pdf-lib
- **Form Persistence**: State management across navigation steps
- **Digital Signatures**: Electronic signature capture and date stamping

### 🔧 Technical Features

- **Server-Side PDF Processing**: Next.js API routes for PDF generation
- **Form Field Mapping**: Comprehensive PDF field population system
- **Error Handling**: Robust error handling with fallback field names
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling and validation
- **React Three Fiber** - 3D graphics library
- **Radix UI** - Accessible component primitives

### Backend

- **Next.js API Routes** - Server-side functionality
- **pdf-lib** - PDF manipulation and form filling
- **pdfkit** - Additional PDF processing capabilities

### Development

- **ESLint** - Code linting
- **Turbopack** - Fast bundling and development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hbt
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hbt/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── generate-pdf/   # PDF generation API
│   │   ├── application/        # Driver application page
│   │   ├── apply/             # Application form
│   │   ├── contact/           # Contact page
│   │   └── resources/         # Resources page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── ApplicationPart*.tsx # Multi-step form components
│   │   ├── DriverApplication.tsx # Main application component
│   │   └── ...               # Other page components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
│   ├── application_revised.pdf # PDF template
│   ├── models/              # 3D models and images
│   └── partners/            # Partner logos
└── package.json
```

## 📋 Driver Application Process

The driver application consists of 5 parts:

1. **Personal Information** - Basic details, address, and contact information
2. **Licenses & Experience** - Driving licenses, work experience, and accident history
3. **Violations & Denials** - Traffic violations and license denials
4. **Employment History** - Previous employment records
5. **Signature & Submission** - Digital signature and final submission

### PDF Generation

The application automatically generates a completed PDF using:

- **Template**: `public/application_revised.pdf`
- **Output**: `appFilled.pdf`
- **Field Mapping**: Comprehensive mapping system with fallback field names

## 🔧 API Endpoints

### POST `/api/generate-pdf`

Generates a filled PDF from form data.

**Request Body**: Driver application form data
**Response**: JSON confirmation message

## 🎨 Customization

### Styling

- Modify `src/app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Custom animations in Framer Motion components

### PDF Template

- Replace `public/application_revised.pdf` with your template
- Update field mappings in `src/app/api/generate-pdf/route.ts`

### Form Fields

- Add new fields in the respective `ApplicationPart*.tsx` components
- Update TypeScript interfaces for type safety
- Map new fields in the PDF generation API

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Environment Variables

No environment variables are currently required, but you may want to add:

- Email service API keys (for future PDF email functionality)
- Database connection strings (for future data persistence)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for HBT Inc.

## 📞 Support

For support or questions about this application, contact the development team or HBT Inc. directly.

---

**Built with ❤️ for HBT Inc. Transportation**
