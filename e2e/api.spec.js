import { test, expect } from "@playwright/test";

test("guesses the user's name", async ({ page }) => {
	await page.route("https://randomuser.me/api", async (route) => {
		await route.fulfill({ json: exampleResponse });
	});

	await page.goto("/");

	await expect(page.getByText(/I guess you're Gabriel/i)).toBeVisible();
});

const exampleResponse = {
	results: [
		{
			gender: "male",
			name: { title: "Mr", first: "Gabriel", last: "Lavoie" },
			location: {
				street: { number: 4056, name: "St. Catherine St" },
				city: "Dorchester",
				state: "Alberta",
				country: "Canada",
				postcode: "J1O 6G4",
				coordinates: { latitude: "-70.5230", longitude: "-127.4680" },
				timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
			},
			email: "gabriel.lavoie@example.com",
			login: {
				uuid: "68e6d405-ba23-48ac-8451-f25d1b44c8fb",
				username: "greenbutterfly963",
				password: "direct",
				salt: "TOjnHNWq",
				md5: "2811b7b46534be7c6923033757f6fceb",
				sha1: "7d34260af263544abd1bf810c3f7c1634214a2f3",
				sha256: "e1fdf5c475cccaf61f12ea359cecf281168883743e0ddf7d0da321a0c40c4f63",
			},
			dob: { date: "1951-12-07T16:05:10.171Z", age: 72 },
			registered: { date: "2009-07-24T17:41:38.920Z", age: 14 },
			phone: "C62 G85-9789",
			cell: "M06 Z58-8114",
			id: { name: "SIN", value: "110963501" },
			picture: {
				large: "https://randomuser.me/api/portraits/men/86.jpg",
				medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
				thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
			},
			nat: "CA",
		},
	],
	info: { seed: "51817a25386915a7", results: 1, page: 1, version: "1.4" },
};
