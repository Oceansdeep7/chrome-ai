/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withPWA = require('next-pwa')({
    dest: 'public'
})

module.exports = withPWA(nextConfig);
