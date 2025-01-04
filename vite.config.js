import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    build: {
        outDir: 'build',
        emptyOutDir: true,
        rollupOptions: {
            input: 'index.html'
        },
        // Ensure assets are copied
        assetsDir: 'assets',
        copyPublicDir: true
    },
    // Configure public directory
    publicDir: path.resolve(__dirname, 'client/public'),
    // Set base URL for DigitalOcean
    base: '/',
    plugins: [
        react(),
        {
            name: 'copy-well-known',
            closeBundle() {
                // Additional handling for .well-known if needed
            }
        }
    ]
});