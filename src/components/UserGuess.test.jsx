import { render, screen } from "@testing-library/react";

import { getRandomUser } from "../services/userService.js";

import UserGuess from "./UserGuess.jsx";

vi.mock("../services/userService.js");

describe("UserGuess component", () => {
	it("shows a guess from random user API", async () => {
		getRandomUser.mockResolvedValue({ name: { first: "Siloslav" } });

		render(<UserGuess />);

		await expect(screen.findByText(/I guess you're Siloslav/i)).resolves.toBeInTheDocument();
	});
});
