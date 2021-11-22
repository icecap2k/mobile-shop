import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb from ".";
import { MemoryRouter } from "react-router-dom";
import { mockSelector } from "../../../../setupTest";
import { mockAppState } from "../../../redux/store.fixture";

describe("Breadcrumb component navigation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Renders product list text in first breadcrumb level", () => {
    mockSelector({
      ...mockAppState,
      product: { ...mockAppState.product, current: {} },
    });
    render(<Breadcrumb />, { wrapper: MemoryRouter });
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Product list")).toBeInTheDocument();
  });

  test("Renders link to product list and show current item text", () => {
    const brand = "brand test";
    const model = "model test";

    mockSelector({
      ...mockAppState,
      product: { ...mockAppState.product, current: { brand, model } },
    });
    render(<Breadcrumb />, { wrapper: MemoryRouter });
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByTestId("current-product")).toHaveTextContent(
      `${brand} - ${model}`
    );
  });
});
