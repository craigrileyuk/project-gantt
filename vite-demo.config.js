const path = require("path");
const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
	plugins: [createVuePlugin()],
	root: process.cwd() + "/demo",
};
