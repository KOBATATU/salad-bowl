/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/pokemon/:match*',
        destination: `${process.env.API_POKEMON}/:match*`
      }
    ]
  }
}

module.exports = nextConfig
