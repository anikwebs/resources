import { defineConfig } from 'vite'

// GitHub Pages serves a project site from https://USER.github.io/REPO/.
// The base is therefore configurable at build time and defaults to the repo
// name used by the bundled GitHub Actions workflow. Local dev always uses '/'.
//   BASE_PATH=/my-repo/ npm run build
const base = process.env.BASE_PATH ?? '/the-resources-by-anik/'

// Extra hostnames permitted to reach the dev/preview server. See the note
// on `server.allowedHosts` below. Defaults to none, so nothing is exposed
// unless you opt in.
const allowedHosts = (process.env.PREVIEW_ALLOWED_HOSTS ?? '')
  .split(',')
  .map(h => h.trim())
  .filter(Boolean)

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
  // Vite 7 rejects requests whose Host header it does not recognise, which
  // is a DNS-rebinding guard. Local previews (localhost, 127.0.0.1, LAN IPs)
  // are allowed by default and need nothing. Previewing through a remote
  // hostname — an SSH tunnel, ngrok, a cloud sandbox — needs that host named:
  //   PREVIEW_ALLOWED_HOSTS=my-tunnel.example.com npm run preview
  // A comma-separated list works, and a leading dot allows all subdomains.
  // This affects the local servers only; it has no bearing on the static
  // build that GitHub Pages serves.
  server: { host: '0.0.0.0', port: 3000, allowedHosts: allowedHosts },
  preview: { host: '0.0.0.0', port: 4173, allowedHosts: allowedHosts }
}))
