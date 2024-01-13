import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/viteedeedee/",
	plugins: [react()],
	test: {
		environment: "jsdom",
		exclude: [...configDefaults.exclude, "**/e2e/**"],
		globals: true,
		setupFiles: ["@testing-library/jest-dom"],
	},
});
