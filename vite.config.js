import { defineConfig } from 'vite'

// GitHub Pages serves a project site from https://USER.github.io/REPO/.
// The base is therefore configurable at build time and defaults to the repo
// name used by the bundled GitHub Actions workflow. Local dev always uses '/'.
//   BASE_PATH=/my-repo/ npm run build
const base = process.env.BASE_PATH ?? '/the-resources-by-anik/'

export default defineConfig(({ command, isPreview }) => ({
  // The dev server runs at the root; `vite preview` must mirror the
  // real base so it exercises the same URLs GitHub Pages will.
  base: command === 'serve' && !isPreview ? '/' : base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020',
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Views and static data are grouped, because navigating hits
        // several of them. The seventeen tool definitions are left
        // alone so each one stays its own lazy chunk — nobody should
        // download the negotiation planner to read a playbook.
        manualChunks (id) {
          if (id.includes('/src/views/')) return 'views'
          if (id.includes('/src/data/')) return 'data'
        }
      }
    }
  },
  server: { host: '0.0.0.0', port: 3000 },
  preview: { host: '0.0.0.0', port: 4173 }
}))
