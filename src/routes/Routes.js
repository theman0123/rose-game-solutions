import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Services from "../views/Services/Services";
import Games from "../views/Games/Games";

export default () => (
  <div>
    <Route path='/' component={Navigation} />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Games' exact component={Games} />
      <Route path='/about' exact component={About} />
      <Route path='/services' exact component={Services} />
    </Switch>
  </div>
);
