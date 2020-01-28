import React, { FC } from 'react';
import AppWindowHeader from './AppWindowHeader';
import styled from 'styled-components';

interface AppWindowProps {
  showHeader?: boolean;
  title?: string;
}

const Container = styled.div`
  -moz-box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  -webkit-box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  background: #fff;
  max-width: 800px;
  margin: 50px auto;

  @media (max-width: 600px) {
    margin: 50px 10px;
  }
`;

const AppWindow: FC<AppWindowProps> = (props) => {
  const { children, showHeader, title } = props;

  return (
    <Container>
      { showHeader && <AppWindowHeader title={title} />}
      { children }
    </Container>
  );
};

AppWindow.defaultProps = {
  showHeader: true
};

export default AppWindow;
