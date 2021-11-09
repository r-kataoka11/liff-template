import react from '@vitejs/plugin-react'
import devcert from 'devcert'
import { defineConfig, UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor('localhost')

  return defineConfig({
    plugins: [react()],
    server: {
      open: true,
      https: {
        key,
        cert,
      },
    },
  })
}
