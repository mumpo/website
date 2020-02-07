import React, { FC } from 'react';
import AppWindow from '../components/AppWindow';
import PhotoViewer from '../components/PhotoViewer';

import MeImg from '../assets/images/me.jpg';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
`;

const Photos: FC = () => {
  return (
    <AppWindow>
      <PhotoViewer>
        <Img src={MeImg} alt="Me" />
      </PhotoViewer>
    </AppWindow>
  )
};

export default Photos;
