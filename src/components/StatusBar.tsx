import React, {FC} from 'react';
import styled from "styled-components";
import {routes} from "../routes";
import {Route, Switch} from "react-router-dom";
import DarkModeToggle from './DarkModeToggle';
import Clock from './Clock';

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
  padding: 0 10px;
`;

const AppName = styled.span`
  flex-grow: 1;
  font-weight: bold;

  @media (min-width: 680px) {
    text-align: center;
  }
`;

const Tools = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  height: 30px;
  display: flex;
  align-items: center;

  > * {
    margin-left: 10px;
  }
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
    <Tools>
      <Clock />
      <DarkModeToggle />
    </Tools>
  </Bar>
);

export default StatusBar;
