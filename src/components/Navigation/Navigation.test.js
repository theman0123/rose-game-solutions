import React from "react";
import renderer from "react-test-renderer";
import { Route, MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Route to='/' component={Navigation} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("should not render link of current route", () => {
  const tree = renderer
    .create(
      <MemoryRouter
        initialEntries={["/games", "/about", "/", "/services"]}
        initialIndex={0}
      >
        <Route to='/' component={Navigation} />
      </MemoryRouter>,
    )
    .toJSON();
  // route total is 4, should be 3 after filtering for current location
  // help: tree === first <div>
  expect(tree.children[0].children.length).toEqual(3);
});
