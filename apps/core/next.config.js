/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/trpc", "@repo/prisma"],
};

module.exports = nextConfig; 