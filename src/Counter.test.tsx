import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("Should render a label and a counter", () => {
	const handler = jest.fn();
	const { getByTitle } = render(
		<Counter count={0} onCounterIncrease={handler} />
	);
	const label = getByTitle("Count Label");
	expect(label).toBeInTheDocument();
	const count = getByTitle("Current Count");
	expect(count).toBeInTheDocument();
});

test("should render with a custom label", () => {
	const handler = jest.fn();
	const { getByTitle } = render(
		<Counter label={`Current`} count={0} onCounterIncrease={handler} />
	);
	const label = getByTitle("Current Count");
	expect(label).toBeInTheDocument();
});

test("Should call the incrementer function", () => {
	const handler = jest.fn();
	const { getByTitle } = render(
		<Counter count={0} onCounterIncrease={handler} />
	);
	const counter = getByTitle("Current Count");
	fireEvent.click(counter);
	expect(handler).toBeCalledWith(false);
});
