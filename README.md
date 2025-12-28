# AI Finance Platform

This is a [Next.js](https://nextjs.org) finance management application with AI-powered features, built with Clerk authentication, Prisma, and PostgreSQL.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **PostgreSQL** database (local or cloud-hosted)

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"
DIRECT_URL="postgresql://user:password@localhost:5432/database_name?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Google Generative AI (Gemini)
GEMINI_API_KEY="your_gemini_api_key"

# Resend (for email)
RESEND_API_KEY="re_..."

# Arcjet (for rate limiting)
ARCJET_KEY="ajkey_..."

# Inngest (for background jobs)
INNGEST_SIGNING_KEY="signkey-..."
INNGEST_EVENT_KEY="eventkey-..."
```

#### How to Get API Keys:

1. **PostgreSQL Database**: 
   - Local: Install PostgreSQL and create a database
   - Cloud: Use services like [Supabase](https://supabase.com), [Neon](https://neon.tech), or [Railway](https://railway.app)

2. **Clerk Authentication**: 
   - Sign up at [clerk.com](https://clerk.com)
   - Create a new application
   - Copy the publishable key and secret key from the dashboard

3. **Google Gemini API**: 
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create an API key

4. **Resend**: 
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard

5. **Arcjet**: 
   - Sign up at [arcjet.com](https://arcjet.com)
   - Get your API key from the dashboard

6. **Inngest**: 
   - Sign up at [inngest.com](https://inngest.com)
   - Get your signing key and event key from the dashboard

### 3. Set Up the Database

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
```

This will:
- Generate the Prisma Client
- Apply all migrations to your database
- Create the necessary tables (User, Account, Transaction, Budget)

### 4. Generate Prisma Client

If you need to regenerate the Prisma Client:

```bash
npx prisma generate
```

### 5. Run the Development Server



```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

### 6. (Optional) Seed the Database

If you want to populate the database with sample data:

```bash
# Visit http://localhost:3000/api/seed in your browser
# or use curl:
curl http://localhost:3000/api/seed
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server (after building)
- `npm run lint` - Run ESLint to check for code issues
- `npm run email` - Start the email development server

## Project Structure

- `/app` - Next.js app directory with routes and pages
- `/actions` - Server actions for data operations
- `/components` - React components
- `/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations
- `/public` - Static assets

## Features

- 🔐 **Authentication** - Clerk-based user authentication
- 💰 **Account Management** - Multiple account types (Current, Savings)
- 📊 **Transaction Tracking** - Income and expense tracking
- 🎯 **Budget Management** - Set and track budgets
- 🤖 **AI Features** - AI-powered transaction categorization
- 📧 **Email Notifications** - Budget alerts via Resend
- ⚡ **Background Jobs** - Recurring transactions via Inngest

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Inngest Documentation](https://www.inngest.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Make sure to add all environment variables in your Vercel project settings.
