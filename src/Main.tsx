import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import { HashRouter } from 'react-router-dom';
import Screen from './components/Screen';

function Main() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Screen />
      </HashRouter>
    </ThemeProvider>
  );
}

export default Main;
