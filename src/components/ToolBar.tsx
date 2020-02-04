import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.toolBar.background}
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const ToolBar: FC = (props) => (
    <Container />
  );

export default ToolBar;
