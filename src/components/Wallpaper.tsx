import React, { FC, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { DarkModeContext } from './ThemeProvider';
import PreloadImage from './PreloadImage';

import DarkImg from '../assets/images/background-dark.jpg';
import LightImg from '../assets/images/background-light.jpg';

interface WallpaperProps {
  dark?: boolean;
}

const GlobalStyle = createGlobalStyle<WallpaperProps>`
  body {
    background-image: url("${props => (props.dark ? DarkImg : LightImg)}");
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
`;

const Wallpaper: FC = () => {
  const [ dark ] = useContext(DarkModeContext);
  return (
    <>
      <PreloadImage src={DarkImg} />
      <PreloadImage src={LightImg} />
      <GlobalStyle dark={dark} />
    </>
  );
};

export default Wallpaper;
