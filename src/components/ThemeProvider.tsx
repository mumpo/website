import React, { createContext, FC, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = (dark: boolean) => ({
  toolBar: {
    background: dark ? '#242935' : '#e1e2e4',
    border: dark ? '#434a54' : '#e1e2e4',
    close: '#e74c3c'
  },
  window: {
    background: dark ? '#30394a' : '#fff',
  },
  panel: {
    background: dark ? '#2b3140' : '#f1f1f1',
    fontColor: dark ? '#dcdfe2' : '#999'
  },
  statusBar: {
    background: dark ? '#242935' : '#f5f5f5',
  },
  main: {
    fontColor: dark ? '#f4f4f4' : '#333',
  },
  code: {
    yellow: dark ? '#e6c277' : '#f1bf05',
    green: dark ? '#99cc99' : '#36bf74',
    gray: dark ? '#7d8b94' : '#bbc2c7'
  }
});

export type Theme = ReturnType<typeof theme>;

export type DarkModeContextType = [ boolean, (dark: boolean) => void ];
export const DarkModeContext = createContext<DarkModeContextType>([ false, () => {} ]);

const ThemeProvider: FC = (props) => {
  const { children } = props;
  const [ dark, setDark ] = useState(() => {
    const darkMatcher = window.matchMedia('(prefers-color-scheme: dark)');

    const hours = new Date().getHours();
    const isDayTime = hours >= 8 && hours < 20;

    return darkMatcher.matches || !isDayTime;
  });

  return (
    <StyledThemeProvider theme={theme(dark)}>
      <DarkModeContext.Provider value={[ dark, setDark ]}>
        {children}
      </DarkModeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
