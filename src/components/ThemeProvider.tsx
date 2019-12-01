import React, { PureComponent } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  app: {
    control: {
      red: '#e74c3c',
      yellow: '#f1c40f',
      green: '#2ecc71'
    }
  }
};

export type Theme = typeof theme;
export interface ThemeProps {
  theme: Theme
};

class ThemeProvider extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    );
  }
}

export default ThemeProvider;