import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";

import App from "./App";
import { server } from "./setupTests.js";

describe("App component", () => {
	beforeEach(() => {
		server.use(
			http.get("https://randomuser.me/api", () => {
				return HttpResponse.json({ results: [{ name: { first: "" } }] });
			}),
		);
	});

	it("shows documentation links", () => {
		render(<App />);

		expect(screen.getByRole("link", { name: "Vite logo" })).toHaveAttribute("href", "https://vitejs.dev");
		expect(screen.getByRole("link", { name: "React logo" })).toHaveAttribute("href", "https://react.dev");
	});

	it("shows a click counter", async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.click(screen.getByRole("button", { name: /count is 0/ }));

		expect(screen.getByRole("button", { name: /count is 1/ })).toBeInTheDocument();
	});
});
