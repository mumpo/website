import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes';

const Navigation = () => {
  const defaultRoute = routes.find((route) => route.default);

  return <>
    <Switch>
      {routes.map((route, i) => (
        <Route
          path={route.path}
          key={i}
        >
          <route.component />
        </Route>
      ))}
      {defaultRoute && <Redirect exact from="/" to={defaultRoute.path} />}
    </Switch>
  </>;
};

export default Navigation;
