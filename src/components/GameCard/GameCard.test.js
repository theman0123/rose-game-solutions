import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";
import GameCard from "./GameCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <GameCard />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
