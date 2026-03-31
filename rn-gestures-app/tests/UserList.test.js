import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import UserList from "../components/UserList";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Maisha" }),
  })
);

test("displays user after API call", async () => {
  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText("Maisha")).toBeTruthy();
  });
});