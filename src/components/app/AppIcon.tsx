import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface AppIconProps {
  name: string;
  path: string;
  iconPath: string;
  active: boolean;
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & ~ & {
    margin-left: 10px;
  }
`;

const Icon = styled.img`
  height: 60px;
`;

interface ActiveIndicatorProps {
  active: boolean;
}
const ActiveIndicator = styled.span<ActiveIndicatorProps>`
  width: 4px;
  height: 4px;
  background: ${props => props.active ? 'black' : 'transparent'};
  border-radius: 4px;
  margin-top: 2px;
`;

const AppIcon: FC<AppIconProps> = (props) => {
  const { name, path, iconPath, active } = props;

  return (
    <StyledLink to={path}>
      <Icon src={iconPath} alt={name} />
      <ActiveIndicator active={active} />
    </StyledLink>
  );
};

export default AppIcon;
