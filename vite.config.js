import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import AutoImport from 'unplugin-auto-import/vite';
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    // define: {
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
      })
    ],
    server: {
      host: 'localhost',
      port: env.VITE_PORT,
      strictPort: true, // 端口被占用直接退出
      https: false,
      open: true,// 在开发服务器启动时自动在浏览器中打开应用程序
      // proxy: {
      //   // 字符串简写写法
      //   '^/api': {
      //     target: env.VITE_BASE_API,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // },
      hmr: {
        overlay: false // 屏蔽服务器报错
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})