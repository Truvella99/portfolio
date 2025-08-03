import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Add a rule to handle .jsonc files
    config.module.rules.push({
      test: /\.jsonc$/, // Match .jsonc files
      use: 'jsonc-loader', // Use jsonc-loader to parse them
      include: path.resolve(__dirname, 'src/locales'), // Adjust path if needed to match your project structure
    });
    return config;
  },
};

export default nextConfig;