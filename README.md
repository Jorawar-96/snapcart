# 🛒 Snapcart

> A modern, high-performance E-Commerce web application built with [Next.js](https://nextjs.org/).

Snapcart is a full-featured e-commerce platform designed to provide a seamless shopping experience. It leverages the power of the Next.js App Router, React Server Components, and modern web development practices to deliver fast page loads and dynamic rendering.

## ✨ Features

- **🛍️ Product Browsing:** View diverse product catalogs with dynamic routing and filtering.
- **🛒 Shopping Cart:** Add, update, or remove items from the cart seamlessly.
- **🔐 Authentication:** Secure user sign-up and login capabilities.
- **💳 Checkout Process:** Streamlined user checkout flow.
- **⚡ Optimized Performance:** Image optimization, static pre-rendering, and server-side rendering using Next.js.
- **📱 Responsive Design:** Fully responsive UI, built to work smoothly across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

-**Frontend:** Next.js (App Router), Tailwind CSS
- **Backend:** Next.js API Routes (Node.js)
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** Next-Auth 
- **Animations:** Framer Motion, GSAP 
- **Testing:** Cypress (E2E & Component Testing)
- **Tooling:** ESLint, Prettier

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.17 or higher is recommended for Next.js).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd snapcart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your specific environment variables:
   ```bash
   # Example environment variables
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   DATABASE_URL=your_database_url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```

5. **Open the application:**
   Open http://localhost:3000 with your browser to see the result.

## 📁 Project Structure

```text
snapcart/
├── app/                # Next.js App Router (pages, layouts, and API routes)
├── components/         # Reusable React components (UI, layout, etc.)
├── lib/                # Utility functions, helpers, and configurations
├── public/             # Static assets (images, fonts, icons)
├── styles/             # Global styles and tailwind config
├── .env.local          # Environment variables (Ignored by Git)
├── next.config.js      # Next.js configuration
└── package.json        # Project metadata and dependencies
```

## 🧪 Testing

This project is configured with Cypress for End-to-End (E2E) and Component Testing.
To open the Cypress test runner, use:
```bash
npm run cypress:open
```