import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme: {
    extend: {
      screen: {
        sm: '360px',
      },
      fontFamily: {
        carl: ['']
      }
    }
  },
  plugins: [react(), tailwindcss(),],
  optimizeDeps: {
    include: [
      "@tiptap/react",
      "@tiptap/starter-kit",
      "prosemirror-model",
      "prosemirror-state",
      "prosemirror-view",
    ],
  },
})
