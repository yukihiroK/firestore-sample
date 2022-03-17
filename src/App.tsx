import "./App.css";
import { Listener } from "./Listener";
import { AddButton } from "./AddButton";
import { Description } from "./Description";

function App() {
	return (
		<div className="App">
			<body>
				<Listener />
				<AddButton />
				<Description />
			</body>
		</div>
	);
}

export default App;
