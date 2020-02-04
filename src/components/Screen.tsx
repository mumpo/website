import React, { FC } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Dock from './Dock';
import StatusBar from "./StatusBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
`

const Screen: FC = () => (
  <Container>
    <StatusBar />
    <Navigation />
    <Dock />
  </Container>
);

export default Screen;