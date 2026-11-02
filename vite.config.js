import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: User-Site levelup-beep.github.io mit eigener Domain levelupladies.de -> base /.
// Fuer ein Projekt-Repo (https://<user>.github.io/<repo>/): BASE_PATH=/<repo>/ setzen.
const root = dirname(fileURLToPath(import.meta.url))
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Mehrere Seiten aus einem Projekt:
      //   /             -> Startseite fuer alle drei Bereiche (index.html + start/)
      //   /schule/      -> Zielgruppe Bildungsbereich (schule/index.html + src/)
      //   /frauen/      -> Zielgruppe Job, Business und Alltag (frauen/index.html)
      //   /quiz/        -> Leadmagnet "Der Level-Check" (quiz/index.html)
      //   /warteliste/  -> Brevo-Warteliste (warteliste/index.html)
      input: {
        main: resolve(root, 'index.html'),
        schule: resolve(root, 'schule/index.html'),
        warteliste: resolve(root, 'warteliste/index.html'),
        frauen: resolve(root, 'frauen/index.html'),
        quiz: resolve(root, 'quiz/index.html'),
        impressum: resolve(root, 'impressum/index.html'),
        datenschutz: resolve(root, 'datenschutz/index.html'),
        kiTransparenz: resolve(root, 'ki-transparenz/index.html'),
      },
    },
  },
  server: {
    // Port kommt vom Harness (PORT), sonst Vite-Standard 5173
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
