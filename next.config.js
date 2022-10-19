/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const name = 'react-nextjs-typescript'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
  env: {
    BACKEND_URL: '/react-nextjs-typescript',
  },
}
