/*eslint no-undef: "off"*/

// to mock unit tests
global.fetch = require("jest-fetch-mock");

/**
 * Here we have all generic configuration.
 */
import { useSelector } from "react-redux";

/**
 * Setup node environment to development in order to cover almost every functionality
 */
//process.env.NODE_ENV = "development";

/**
 * Mock react-redux utils
 * Cannot be moved nowhere due it has to be next to mockSelector in order to be able to mock app state correctly
 */
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

/**
 * Mock useSelector
 */
export const mockSelector = (mockState) => {
  function mockUseSelectorData(data) {
    useSelector.mockImplementation((callback) => callback(data));
  }

  mockUseSelectorData(mockState);
};
