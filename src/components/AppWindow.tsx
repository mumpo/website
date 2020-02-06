import React, {FC} from 'react';
import styled from 'styled-components';
import ToolBar from './ToolBar';

const Bar = styled.div`
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  background: ${props => props.theme.window.background};
  max-width: 100%;
  min-width: 460px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

const AppWindow: FC = ({ children }) => (
  <Bar>
    <ToolBar />
    {children}
  </Bar>
)

export default AppWindow;
