import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counter = screen.getByText(/counter/i);
  expect(counter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId("count");
  const increment = screen.getByText("+");

  fireEvent.click(increment);

  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId("count");
  const decrement = screen.getByText("-");

  fireEvent.click(decrement);

  expect(count).toHaveTextContent("-1");
});