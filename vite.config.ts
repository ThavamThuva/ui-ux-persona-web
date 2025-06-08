import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react()],
  base: "/ui-ux-persona-web/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   base: `/${repoName}/`,
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));
