import React, { FC } from 'react';
import AppWindow from '../components/AppWindow';
import PhotoViewer from '../components/PhotoViewer';

import MeImg from '../assets/images/me.jpg';

const Photos: FC = () => {
  return (
    <AppWindow>
      <PhotoViewer>
        <img src={MeImg} alt="Me" />
      </PhotoViewer>
    </AppWindow>
  )
};

export default Photos;
