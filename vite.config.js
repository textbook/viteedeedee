import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/viteedeedee/",
	plugins: [react()],
	test: {
		coverage: {
			include: ["src/**"],
			provider: "v8",
		},
		environment: "jsdom",
		exclude: [...configDefaults.exclude, "**/e2e/**"],
		globals: true,
		setupFiles: ["./src/setupTests.js"],
	},
});
