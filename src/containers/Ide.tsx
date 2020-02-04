import React, { FC } from 'react';
import { sergiCode } from '../constants/sergiCode';
import TextEditor from '../components/text-editor/TextEditor';
import AppWindow from '../components/AppWindow';

const Ide: FC = () => {
  return (
    <AppWindow>
      <TextEditor
        code={sergiCode}
        language="Typescript"
      />
    </AppWindow>
  );
};

export default Ide;
