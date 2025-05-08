// vite.config.ts
import { defineConfig } from "file:///home/Kawaii/MMU/crypt-web/node_modules/.deno/vite@6.3.2/node_modules/vite/dist/node/index.js";
import deno from "file:///home/Kawaii/MMU/crypt-web/node_modules/.deno/@deno+vite-plugin@1.0.4/node_modules/@deno/vite-plugin/dist/index.js";
import react from "file:///home/Kawaii/MMU/crypt-web/node_modules/.deno/@vitejs+plugin-react-swc@3.9.0/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "jsr:@std/path";
import tailwindcss from "file:///home/Kawaii/MMU/crypt-web/node_modules/.deno/@tailwindcss+vite@4.1.4/node_modules/@tailwindcss/vite/dist/index.mjs";
import { TanStackRouterVite } from "file:///home/Kawaii/MMU/crypt-web/node_modules/.deno/@tanstack+router-plugin@1.116.1/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "/home/Kawaii/MMU/crypt-web";
var vite_config_default = defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    deno(),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlUm9vdCI6ICIvaG9tZS9LYXdhaWkvTU1VL2NyeXB0LXdlYi8iLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL0thd2FpaS9NTVUvY3J5cHQtd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9LYXdhaWkvTU1VL2NyeXB0LXdlYi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9LYXdhaWkvTU1VL2NyeXB0LXdlYi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZGVubyBmcm9tICdAZGVuby92aXRlLXBsdWdpbidcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJqc3I6QHN0ZC9wYXRoXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCJcbmltcG9ydCB7IFRhblN0YWNrUm91dGVyVml0ZSB9IGZyb20gJ0B0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFRhblN0YWNrUm91dGVyVml0ZSh7IHRhcmdldDogJ3JlYWN0JywgYXV0b0NvZGVTcGxpdHRpbmc6IHRydWUgfSksXG4gICAgZGVubygpLFxuICAgIHJlYWN0KCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLFNBQVMsb0JBQW9CO0FBQzdSLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsMEJBQTBCO0FBTG5DLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLG1CQUFtQixFQUFFLFFBQVEsU0FBUyxtQkFBbUIsS0FBSyxDQUFDO0FBQUEsSUFDL0QsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxrQ0FBVyxJQUFJO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
