import routes from "./routes";

test("Routes are exported correctly", () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});
