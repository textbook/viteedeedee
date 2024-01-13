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
			files: [".eslintrc.cjs", "*.config.js"],
			env: { browser: false, node: true },
		},
		{
			files: ["*.test.js", "*.test.jsx"],
			env: { "vitest/env": true },
			extends: [
				"plugin:testing-library/react",
				"plugin:vitest/all",
			],
			rules: {
				"vitest/prefer-expect-assertions": "off",
			},
		},
		{
			files: ["e2e/**/*.spec.js"],
			env: { node: true },
			extends: ["plugin:playwright/recommended"],
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
