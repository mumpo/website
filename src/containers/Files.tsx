import React, { FC } from 'react';
import AppWindow from '../components/app/AppWindow';
import FileExplorer from '../components/FileExplorer';
import File from '../components/File';

const Files: FC = () => {
  return (
    <AppWindow title="Files">
      <FileExplorer>
        <File
          name="Currículum Vitae.pdf"
          path="/cv.pdf"
          icon="/images/icon-cv.svg"
        />
        <File
          name="Linkedin"
          path="https://www.linkedin.com/in/sergi-ferriz"
          icon="/images/icon-linkedin.svg"
        />
      </FileExplorer>
    </AppWindow>
  )
};

export default Files;
