import { useEffect, useState } from "react";
import { getRandomUser } from "../services/userService.js";

export default function UserGuess() {
	const [user, setUser] = useState();

	useEffect(() => {
		getRandomUser().then(setUser).catch((err) => console.error(err));
	}, []);

	return user ? <h2>I guess you&apos;re {user?.name?.first}</h2> : null;
}
