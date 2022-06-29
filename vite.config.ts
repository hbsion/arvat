import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import { cyan } from 'tailwindcss/colors'
import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	base: command === "serve" ? "" : "/",
	publicDir: "fake_dir_so_nothing_gets_copied",
  // publicDir:"public/dist",
	build: {
		manifest: true,
		outDir: "public/dist",
		rollupOptions: {
			input:[
        'src/main.tsx',
        'src/zad.tsx',
        // 样式库
        'src/assets/base.less'
      ],
		}
	},
	plugins: [
    react(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/es/${name}/style`,
    //     }
    //   ],
    // }),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/zad/pages', baseRoute: 'zad' },
      ],
      extensions: ['tsx', 'md'],
    })
  ],
	server: {
		fs: {
			allow: [".."], // Allow serving files from one level up to the project root
		},
	},
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': cyan['600'], //设置antd主题色
        },
      },
    }
  }
}));
