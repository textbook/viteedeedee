/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"@codeyourfuture/standard",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["coverage", "dist", "playwright-report"],
	overrides: [
		{
			files: [".eslintrc.cjs", "*.config.js"],
			env: { browser: false, node: true },
		},
		{
			files: ["src/setupTests.js", "src/**/*.test.js?(x)"],
			env: { "vitest/env": true },
			extends: [
				"plugin:testing-library/react",
				"plugin:vitest/recommended",
				"plugin:vitest/all",
			],
			rules: {
				"vitest/no-hooks": "off",
				"vitest/prefer-expect-assertions": "off",
				"vitest/prefer-lowercase-title": "off",
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
