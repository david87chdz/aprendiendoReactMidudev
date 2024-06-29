// Definir la configuración
import { defineConfig } from 'vite'
// Importar el plugin de react 
import react from '@vitejs/plugin-react'

// Exportar la configuración
export default defineConfig({
  plugins: [react()]
})
