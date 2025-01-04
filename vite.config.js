import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html') // Remove client/ prefix
        }
    },
    publicDir: 'client/public',
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './client/src')
        }
    }
})