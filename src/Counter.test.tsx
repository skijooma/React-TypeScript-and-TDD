import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {Counter} from "./Counter";
import userEvent from "@testing-library/user-event";
import exp from "constants";

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

test("Should increment the count by one", () => {
	const { getByTitle } = render(<Counter/>);
	const counter = getByTitle("Current Count");
	expect(counter).toHaveTextContent("0")
	fireEvent.click(counter);
	expect(counter).toHaveTextContent("1");
});

test("Should increment the counter by ten", () => {
	const { getByTitle } = render(<Counter />);
	const counter = getByTitle("Current Count");
	expect(counter).toHaveTextContent("0");
	userEvent.click(counter, { shiftKey: true });
	expect(counter).toHaveTextContent("10");
});
