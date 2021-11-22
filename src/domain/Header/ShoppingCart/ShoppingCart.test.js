import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingCart from ".";
import { mockSelector } from "../../../../setupTest";

const count = 2;
mockSelector({ cart: { count } });

test("Renders shopping text with number of articles in shopping cart", () => {
  render(<ShoppingCart />);
  expect(screen.getByText(`Shopping items: ${count}`)).toBeInTheDocument();
});
