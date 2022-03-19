import React from "react";
import { Counter } from "./Counter";
import { Heading } from "./Heading";

function App() {
	return (
		<div>
			<Heading />
			<Counter label={'Current'}/>
		</div>
	);
}

export default App;
