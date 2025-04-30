// lib/prisma.js
import { PrismaClient } from "@prisma/client";

// Don't initialize Prisma during build time
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';

// Create a factory to get the Prisma client instance
function createPrismaClient() {
  try {
    // Only create a real client if not in build phase
    if (!isBuildPhase) {
      return new PrismaClient();
    }
    // Return a mock during build phase
    return {};
  } catch (error) {
    console.error("Failed to create Prisma client:", error);
    // Return an empty object instead of throwing
    return {};
  }
}

// Initialize the global variable
const globalForPrisma = global;

// Create or use the existing instance
const db = globalForPrisma.prisma || createPrismaClient();

// Save the instance for reuse in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

export { db };


