import React, { FC } from 'react';
import styled from 'styled-components';
import { ThemeProps } from '../ThemeProvider';

interface AppHeaderProps {
  title?: string;
}

const Container = styled.div`
  background: #e1e2e4;
  height: 34px;
  display: flex;
  align-items: center;
`;

const Controls = styled.div`
  flex-grow: 0;
`;

interface ControlProps extends ThemeProps {
  color: string;
}

const Control = styled.span<ControlProps>`
  width: 14px;
  height: 14px;
  margin-left: 7px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${props => props.theme.app.control[props.color]};
`;

const Title = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 72px;
`;

const AppWindowHeader: FC<AppHeaderProps> = (props) => {
  const { title } = props;

  return (
    <Container>
      <Controls>
        <Control color="red" />
        <Control color="yellow" />
        <Control color="green" />
      </Controls>

      <Title>{title}</Title>
    </Container>
  );
};

export default AppWindowHeader;
