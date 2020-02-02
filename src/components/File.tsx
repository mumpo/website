import React, { FC } from 'react';
import styled from 'styled-components';

interface FileProps {
  name: string;
  path: string;
  icon: string;
}

const Link = styled.a`
  display: flex;
  flex-direction: column;
  width: 80px;
  text-decoration: none;
`;

const Name = styled.span`
  color: black;
  font-size: 0.8em;
  text-align: center;
  margin-top: 3px;
`;

const File: FC<FileProps> = ({ name, path, icon }) => (
  <Link target="_blank" href={path} rel="noopener noreferrer">
    <img src={icon} alt="icon" width={80} />
    <Name>{name}</Name>
  </Link>
);

export default File;
