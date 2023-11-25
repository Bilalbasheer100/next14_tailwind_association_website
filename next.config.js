/** @type {import('next').NextConfig} */
const nextConfig = {
  
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
       
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  