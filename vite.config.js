import path from "path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		vue({
			refTransform: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.js"),
			name: "ProjectGantt",
			formats: ["es", "umd", "cjs", "iife"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
