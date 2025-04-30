// Check if we're in the build phase
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';

// Create placeholder handlers for build time
const buildTimeHandler = () => {
  return new Response('Build time execution skipped', { status: 200 });
};

// Only import and set up Inngest at runtime, not during build
let handlers = {
  GET: buildTimeHandler,
  POST: buildTimeHandler,
  PUT: buildTimeHandler
};

// Dynamically import and set up Inngest outside of build time
if (!isBuildPhase) {
  try {
    const { serve } = require("inngest/next");
    const { inngest } = require("@/lib/inngest/client");
    const {
      checkBudgetAlerts,
      generateMonthlyReports,
      processRecurringTransaction,
      triggerRecurringTransactions,
    } = require("@/lib/inngest/function");

    const inngestHandlers = serve({
      client: inngest,
      functions: [
        processRecurringTransaction,
        triggerRecurringTransactions,
        generateMonthlyReports,
        checkBudgetAlerts,
      ],
    });

    handlers = inngestHandlers;
  } catch (error) {
    console.error("Error setting up Inngest:", error);
  }
}

// Export the handlers
export const { GET, POST, PUT } = handlers;

// Mark the route as dynamic to prevent static optimization
export const dynamic = 'force-dynamic';
