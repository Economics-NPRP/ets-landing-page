import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// we add build.sourcemap=false if we want slightly smaller assets.
export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: false,
    },
})