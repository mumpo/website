import React, { FC } from 'react';
import AppWindow from '../components/AppWindow';
import PhotoViewer from '../components/PhotoViewer';

const Photos: FC = () => {
  return (
    <AppWindow>
      <PhotoViewer>
        <img src="/images/me.jpg" alt="Me" />
      </PhotoViewer>
    </AppWindow>
  )
};

export default Photos;
