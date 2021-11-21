import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductAction from ".";
import { addProductToCart } from "../../../infrastructure/apiCalls";
import * as reactRedux from "react-redux";

const dispatch = jest.fn();
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
useDispatchMock.mockReturnValue(dispatch);

jest.mock("../../../infrastructure/apiCalls", () => ({
  addProductToCart: jest.fn(),
}));

const dummyProps = {
  colors: [
    { code: 1, name: "white" },
    { code: 2, name: "black" },
  ],
  storages: [{ code: 1, name: "16Gb" }],
  productId: "1",
};

const component = <ProductAction {...dummyProps} />;

describe("ProductAction component test suit", () => {
  test("Renders the expected components", () => {
    render(component);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("Change selected option color", () => {
    render(component);
    fireEvent.change(screen.getAllByRole("combobox")[0], {
      target: { value: 2 },
    });

    const options = screen.getAllByRole("option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
  });

  test("Add product to shopping cart", async () => {
    render(component);
    const promise = Promise.resolve({ count: 1 });
    addProductToCart.mockImplementation(() => promise);

    fireEvent.change(screen.getAllByRole("combobox")[0], {
      target: { value: 2 },
    });

    fireEvent.click(screen.getByRole("button"));
    await act(() => promise);
    expect(addProductToCart).toHaveBeenCalledWith({
      colorCode: 2,
      id: "1",
      storageCode: 1,
    });
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
