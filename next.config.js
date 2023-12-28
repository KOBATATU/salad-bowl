/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: {
      properties: ['^data-testid$']
    }
  },
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
