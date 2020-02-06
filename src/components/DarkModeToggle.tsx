import React, { FC, useContext } from 'react';
import { DarkModeContext } from './ThemeProvider';
import styled, { ThemeContext } from 'styled-components';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  background-color: rgba(204, 204, 204, 0.5);
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    border-radius: 50%;
    background-color: white;
    transition: .4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider}:before {
    transform: translateX(24px);
  }
`;

const DarkModeToggle: FC = () => {
  const [ dark, setDark ] = useContext(DarkModeContext);
  const theme = useContext(ThemeContext);
  return (
    <Label>
      <Input type="checkbox" onChange={() => setDark(!dark)} />
      <Slider>
        <MoonIcon size={14} color={theme.main.fontColor} />
        <SunIcon size={14} color={theme.main.fontColor} />
      </Slider>
    </Label>
  );
};

export default DarkModeToggle;
