import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { execSync } from "child_process";

process.env.VITE_APP_GITSHA = execSync("git rev-parse --short HEAD", {
  encoding: "utf8",
}).trim();
process.env.VITE_APP_UPDATETIME = new Date().toISOString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
