import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.fortunefoods.com" },
      { protocol: "https", hostname: "5.imimg.com" },
      { protocol: "https", hostname: "www.patanjaliayurved.net" },
      { protocol: "https", hostname: "www.bigbasket.com" }
    ]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react", "react-dom"],
    typedRoutes: true
  },
  modularizeImports: {
    "react-icons/?(((\w*)?))/(((\w*)?))": {
      transform: "react-icons/{{ matches.[1] }}/{{ matches.[3] }}",
      preventFullImport: true
    }
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|png|jpg|jpeg|gif|ico|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  }
};
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

export default withBundleAnalyzer(nextConfig);
