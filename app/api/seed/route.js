import { seedTransactions } from "@/actions/seed";

// Mark the route as dynamic to prevent static optimization
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Skip actual execution during build time
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      return Response.json({ status: 'Build time - skipped execution' });
    }
    
    const result = await seedTransactions();
    return Response.json(result);
  } catch (error) {
    console.error("Seed error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}