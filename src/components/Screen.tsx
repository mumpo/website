import React, { FC } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Dock from './Dock';
import StatusBar from "./StatusBar";
import Wallpaper from './Wallpaper';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
  color: ${props => props.theme.main.fontColor}
`;

const Screen: FC = () => (
  <Container>
    <Wallpaper />
    <StatusBar />
    <Navigation />
    <Dock />
  </Container>
);

export default Screen;
