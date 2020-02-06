import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.toolBar.background};
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.toolBar.border};
`;

const ToolBar: FC = (props) => (
    <Container />
  );

export default ToolBar;
