import React, { FC } from 'react';
import AppWindow from '../components/app/AppWindow';

const Photos: FC = () => {
  return (
    <AppWindow
      title="Photos"
    >
      <img src="/images/me.jpg" alt="Me" />
    </AppWindow>
  )
};

export default Photos;
