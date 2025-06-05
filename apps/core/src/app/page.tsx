import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to My Monorepo</CardTitle>
          <CardDescription>
            A TypeScript monorepo with turborepo, NextJS, Hono, Prisma, tRPC,
            and shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </CardContent>
      </Card>
    </main>
  );
}
