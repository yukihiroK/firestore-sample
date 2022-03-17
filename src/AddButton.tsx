import { updateDoc } from "firebase/firestore";
import { useCallback, useRef } from "react";
import { docRef } from "./initFirebase";

export const AddButton = () => {
	const count = useRef(0);
	const handleClick = useCallback(async () => {
		await updateDoc(docRef, `key${count.current}`, Date.now());
		count.current++;
	}, [count]);

	return (
		<button type="button" onClick={handleClick}>
			{"Add KV"}
		</button>
	);
};
