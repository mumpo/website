import React, { FC } from 'react';
import { sergiCode } from '../constants/sergiCode';
import TextEditor from '../components/text-editor/TextEditor';
import AppWindow from '../components/app/AppWindow';

const Ide: FC = () => {
  return (
    <AppWindow title="Sergi Férriz">
      <TextEditor
        code={sergiCode}
        language="Typescript"
      />
    </AppWindow>
  );
};

export default Ide;
