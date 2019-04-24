import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";
import Games from "./Games";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Games />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
