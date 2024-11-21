/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
            source: '/:path*',
            headers: [
                {
                    key: 'Cache-Contrl',
                    value: 'no-store',
                }
            ]
        }
    ],
    distDir: ".next",
}

module.exports = nextConfig
