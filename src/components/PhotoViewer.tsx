import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const PhotoViewer: FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default PhotoViewer;
