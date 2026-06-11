import { build } from 'vite'
import { readFileSync, writeFileSync, rmSync } from 'fs'
import { resolve } from 'path'

const __dirname = new URL('.', import.meta.url).pathname

// 1. SSR build — compile entry-server.tsx to a Node-runnable module
await build({
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    rollupOptions: { output: { format: 'esm' } },
  },
})

// 2. Render the app to HTML
const { render } = await import(resolve(__dirname, 'dist-ssr/entry-server.js'))
const appHtml = render()

// 3. Inject into the client build output
const template = readFileSync('dist/index.html', 'utf8')
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
)
writeFileSync('dist/index.html', html)

// 4. Clean up SSR artefacts
rmSync('dist-ssr', { recursive: true, force: true })

console.log('✓ Prerendered dist/index.html')
