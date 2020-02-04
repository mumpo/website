import React, { Children, FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 5px;
`;

const FileContainer = styled.div`
  margin: 0 10px;
`;

const FileExplorer: FC = ({ children }) => {
  return (
    <Container>
      {Children.map(children, (file, i) => (
        <FileContainer key={i}>{ file }</FileContainer>
      ))}
    </Container>
  );
};

export default FileExplorer;
