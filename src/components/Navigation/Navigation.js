import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { routes } from "../../routes/routes.config";

// don't show current route in navigation
const filteredRoutes = (iterate, currentLocation) =>
  iterate.filter(route => route.to !== currentLocation);

export default props => {
  return (
    <div className='Nav-container'>
      <div className='Container-horizontal'>
        {filteredRoutes(routes, props.history.location.pathname).map(route => (
          <Link className='Link' to={route.to} key={route.name}>
            {route.name}
          </Link>
        ))}
      </div>
      <div className='Current-location'>
        {
          routes.filter(
            route => route.to === props.history.location.pathname,
          )[0].name
        }
      </div>
    </div>
  );
};
