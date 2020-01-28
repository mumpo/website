import React from 'react';
import AppWindow from './components/app/AppWindow';
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
        />
      </AppWindow>
    </ThemeProvider>
  );
}

export default Main;
