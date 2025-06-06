import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@repo/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Monorepo App",
  description:
    "A TypeScript monorepo with turborepo, NextJS, Hono, Prisma, tRPC, and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
