import React, { FC } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { routes } from '../routes';
import AppIcon from './AppIcon';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const StyledDock = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const Dock: FC = (props) => {
  return (
    <Container>
      <StyledDock>
        { routes.map((route, index) => (
          <Route
            path={route.path}
            children={({ match }) => (
              <AppIcon
                name={route.name}
                path={route.path}
                iconPath={route.iconPath}
                active={!!match}
              />
            )}
            key={index}
          />
        ))}
      </StyledDock>
    </Container>
  );
};

export default Dock;
