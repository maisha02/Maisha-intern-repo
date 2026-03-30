import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Message from "../components/Message";

test("renders initial message", () => {
  render(<Message />);
  expect(screen.getByText("Hello")).toBeTruthy();
});

test("changes text when button is clicked", () => {
  render(<Message />);
  fireEvent.press(screen.getByText("Click Me"));
  expect(screen.getByText("Button Clicked")).toBeTruthy();
});