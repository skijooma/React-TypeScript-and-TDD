import React from "react";
import { render } from "@testing-library/react";
import {Counter} from "./Counter";

test("Should render a label and a counter", () => {
	const { getByTitle } = render(<Counter />);
	const label = getByTitle("Count Label");
	expect(label).toBeInTheDocument();
	const count = getByTitle("Current Count");
	expect(count).toBeInTheDocument();
});

test("should render with a custom label", () => {
	const { getByTitle } = render(<Counter label = {`Current`} />);
	const label = getByTitle("Current Count");
	expect(label).toBeInTheDocument();
});
