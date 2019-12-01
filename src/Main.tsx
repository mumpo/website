import React from 'react';
import './Main.css';
import AppWindow from './components/window/AppWindow';
import TextEditor from './components/text-editor/TextEditor';
import ThemeProvider from './components/ThemeProvider';
import { sergiCode } from './constants/sergiCode';

function Main() {
  return (
    <ThemeProvider>
      <AppWindow title="Sergi Férriz">
        <TextEditor
          code={sergiCode}
          language="Typescript"
        ></TextEditor>
      </AppWindow>
    </ThemeProvider>
  );
}

export default Main;
