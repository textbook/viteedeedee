import { http, HttpResponse } from "msw";

import { server } from "../setupTests.js";

import { getRandomUser } from "./userService.js";

describe("user service", () => {
	it("exposes the user on success", async () => {
		const user = { name: { first: "Siloslav" } };
		server.use(http.get("https://randomuser.me/api", () => {
			return HttpResponse.json({ results: [user] });
		}));

		await expect(getRandomUser()).resolves.toStrictEqual(user);
	});

	it("rejects on failure", async () => {
		server.use(http.get("https://randomuser.me/api", () => {
			return HttpResponse.error();
		}));

		await expect(getRandomUser()).rejects.toThrow("Failed to fetch");
	});
});
