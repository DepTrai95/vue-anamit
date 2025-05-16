import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

const apiKeys = ['SENDGRID_API_KEY', 'POSTMARK_API_KEY'];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  apiKeys.forEach(key => processEnv[key] = env[key]);

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: { 
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/style/global.scss";`,
          api: 'legacy',
        },
      },
    },
    define: {
      'process.env': processEnv,
    },
  }
})
