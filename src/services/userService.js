export async function getRandomUser() {
	const res = await fetch("https://randomuser.me/api");
	if (!res.ok) {
		throw new Error(res.statusText);
	}
	const { results: [user] } = await res.json();
	return user;
}
