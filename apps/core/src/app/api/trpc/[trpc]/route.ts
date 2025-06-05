// Simple tRPC placeholder route
async function handler(request: Request) {
  return new Response(
    JSON.stringify({ message: "tRPC endpoint - placeholder" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

export { handler as GET, handler as POST };
