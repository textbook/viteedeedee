/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"@codeyourfuture/standard",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist"],
	overrides: [
		{
			files: [".eslintrc.cjs", "vite.config.js"],
			env: { browser: false, node: true },
		},
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	settings: { react: { version: "18.2" } },
};
