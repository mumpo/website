import React, { PureComponent } from 'react';
import AppHeader from './AppHeader';
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

class AppWindow extends PureComponent<AppWindowProps> {
  static defaultProps: Partial<AppWindowProps> = {
    showHeader: true
  };

  render() {
    const { children, showHeader, title } = this.props;

    return (
      <Container>
        { showHeader && <AppHeader title={title} />}
        { children }
      </Container>
    );
  }
}

export default AppWindow;