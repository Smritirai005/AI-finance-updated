// lib/prisma.js
import { PrismaClient } from "@prisma/client";

// Don't initialize Prisma during build time
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';

// Initialize the global variable
const globalForPrisma = global;

// Create a factory to get the Prisma client instance
function createPrismaClient() {
  // Only create a real client if not in build phase
  if (isBuildPhase) {
    // Return a mock during build phase
    return {};
  }

  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set in environment variables");
    throw new Error("DATABASE_URL environment variable is required");
  }

  try {
    // For Prisma 7, connection is configured via environment variables
    // The adapter is automatically detected from the datasource provider
    return new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });
  } catch (error) {
    console.error("Failed to create Prisma client:", error);
    throw error;
  }
}

// Create or use the existing instance
const db = globalForPrisma.prisma || createPrismaClient();

// Save the instance for reuse in development
if (process.env.NODE_ENV !== "production" && !isBuildPhase) {
  globalForPrisma.prisma = db;
}

export { db };


