import { PrismaClient } from "@prisma/client";

// Check if we already have a PrismaClient instance
if (!global.prisma) {
  global.prisma = new PrismaClient();
}

// Export the prisma instance
export const db = global.prisma;