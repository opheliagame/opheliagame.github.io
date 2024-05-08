const isProd = process.env.NODE_ENV === 'production'

/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: undefined,
  rewrites: async () => [
    {
      source: "/new-home",
      destination: "/new-index.html",
    },
  ],
};

export default nextConfig;