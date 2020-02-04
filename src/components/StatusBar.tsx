import React, {FC} from 'react';
import styled from "styled-components";
import {routes} from "../routes";
import {Route, Switch} from "react-router-dom";

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: ${props => props.theme.statusBar.background};
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
`;

const AppName = styled.span`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
`;

const StatusBar: FC = () => (
  <Bar>
    <Switch>
      {routes.map((route, i) => (
        <Route path={route.path} key={i}>
          <AppName>{route.name}</AppName>
        </Route>
      ))}
    </Switch>
  </Bar>
);

export default StatusBar;
