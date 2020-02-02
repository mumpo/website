import React, { FC } from 'react';
import AppWindowHeader from './AppWindowHeader';
import styled from 'styled-components';

interface AppWindowProps {
  showHeader?: boolean;
  title?: string;
}

const Container = styled.div`
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  background: #fff;
  max-width: 800px;
  min-width: 300px;
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
