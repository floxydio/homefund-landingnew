/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "127.0.0.1", "https://357d-2400-9800-371-f80b-c13a-75be-74ab-36db.ngrok-free.app"],
        minimumCacheTTL: 60,
    }
}

module.exports = nextConfig
