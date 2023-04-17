/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    css: {
        preprocessorOptions: {
            less: {
                math: "parens-division",
            },
        },
    },
    plugins: [react()],
    test: {
        globals: true,
        setupFiles: "./testSetup.ts",
        environment: "jsdom",
    },
});
