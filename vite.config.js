const path = require("path");
const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
	plugins: [createVuePlugin()],
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
};
