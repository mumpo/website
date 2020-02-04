import React, { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  toolBar: {
    background: '#e1e2e4',
    close: '#e74c3c'
  },
  statusBar: {
    background: '#f5f5f5'
  }
};

export type Theme = typeof theme;
export interface ThemeProps {
  theme: Theme
}

const ThemeProvider: FC = (props) => {
  const { children } = props;

  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
