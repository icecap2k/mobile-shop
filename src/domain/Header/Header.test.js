import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from ".";
import { MemoryRouter } from "react-router-dom";
import { mockSelector } from "../../../setupTest";
import { mockAppState } from "../../redux/store.fixture";

mockSelector({ ...mockAppState, cart: { count: 2 } });

test("Renders header link to home", () => {
  render(<Header />, { wrapper: MemoryRouter });
  expect(screen.getByRole("link")).toBeInTheDocument();
});

test("Renders header shopping cart", () => {
  render(<Header />, { wrapper: MemoryRouter });
  expect(screen.getByText("Shopping items: 2")).toBeInTheDocument();
});
