import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.json',
    }),
    cssInjectedByJsPlugin(),
  ],
  css: {
    postcss: './postcss.config.js', // Inclua esta configuração se necessário
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "feedget",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true
  }
});