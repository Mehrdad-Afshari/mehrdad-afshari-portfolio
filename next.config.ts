import type { NextConfig } from "next";
const nextConfig: NextConfig = {
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
