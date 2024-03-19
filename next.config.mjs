/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [['@swc-jotai/react-refresh', {}]],
    },
    auth: {
        // flip this to "true"
        enableMultiFactorAuth: true,
    }
};


import {
    createVanillaExtractPlugin
} from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
