import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
            rollupOptions: {
                input: 'index.html', // Ensure Rollup uses the correct entry point
            },
        },
        plugins: [react()],
    };
});