/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'qhaaptobpyvibymtemus.supabase.co',
    },
  ],
  }
}

module.exports = nextConfig
