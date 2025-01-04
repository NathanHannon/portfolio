
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs-extra'

// Custom plugin to copy public folder
const copyPublicFolder = () => ({
    name: 'copy-public-folder',
    closeBundle: async () => {
        await fs.copy(
            path.resolve(__dirname, 'client/public'),
            path.resolve(__dirname, 'build/public'),
            { recursive: true }
        )
    }
})

export default defineConfig({
    plugins: [
        react(),
        copyPublicFolder()
    ],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html')
        }
    },
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './client/src')
        }
    }
})

// export default defineConfig(() => {
//     return {
//         build: {
//             outDir: 'build',
//             rollupOptions: {
//                 input: 'index.html', // Ensure Rollup uses the correct entry point
//             },
//         },
//         plugins: [react()],
//     };
// });