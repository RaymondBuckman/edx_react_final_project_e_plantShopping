import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/edx_react_final_project_e_plantShopping",
  plugins: [react()],
})
