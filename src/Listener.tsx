import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { docRef } from "./initFirebase";

export const Listener = () => {
	const [state, setState] = useState({});

	useEffect(() => {
		const unsubscribe = onSnapshot(docRef, (doc) => {
			if (doc.exists()) {
				const data = doc.data();
				console.log(data);
				setState(data);
			}
		});
		return unsubscribe;
	}, []);

	return (
		<ul>
			{Object.entries(state).map(([k, v]) => (
				<li key={k}>{`${k}:${v}`}</li>
			))}
		</ul>
	);
};
