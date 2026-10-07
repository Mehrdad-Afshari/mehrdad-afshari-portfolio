import type { NextConfig } from "next";
const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
    async headers() {
        return [{ source: "/(.*)", headers: securityHeaders }];
    },
    async redirects() {
        return ["www.mehrdad-afshari.de", "mehrdadafshari.de", "www.mehrdadafshari.de"].map((host) => ({
            source: "/:path*",
            has: [{ type: "host" as const, value: host.replaceAll(".", "\\.") }],
            destination: "https://mehrdad-afshari.de/:path*",
            permanent: true,
        }));
    },
};
export default nextConfig;
