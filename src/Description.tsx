import { useEffect, useState } from "react";

const COUNT = "COUNT";
export const Description = () => {
	const [state, setState] = useState(0);

	useEffect(() => {
		const count = parseInt(localStorage.getItem(COUNT) ?? "0");
		setState(count);

		localStorage.setItem(COUNT, `${count + 1}`);
	}, []);

	return (
		<>
			<br />
			<p>{"When you access this page, you make a single GET request."}</p>
			<p>
				{`Then by pressing the "Add KV" button, one UPDATE request ${
					state === 0 ? "is" : `and ${state} GET request(s) are`
				} added.`}
			</p>
			<p>{"Then reload this page."}</p>
		</>
	);
};
