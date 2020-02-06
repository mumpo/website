import React, { FC } from 'react';
import styled from 'styled-components';

interface PreloadImageProps {
  src: string;
}

const HideImg = styled.img`
  width: 0;
  height: 0;
  opacity: 0;
`;

const PreloadImage: FC<PreloadImageProps> = ({ src }) => (
  <HideImg src={src} />
);

export default PreloadImage;
