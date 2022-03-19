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

test("Should start at zero", () => {
	const { getByTitle } = render(<Counter/>);
	const counter = getByTitle("Current Count");
	expect(counter).toHaveTextContent("0");
});

test("Should start at another value", () => {
	const { getByTitle } = render(<Counter start={10}/>);
	const counter = getByTitle("Current Count");
	expect(counter).toHaveTextContent("10");
});
