import React, { FC } from 'react';
import styled from 'styled-components';
import { useIntervalUpdate } from '../hooks/useIntervalUpdate';
import moment from 'moment';

const Container = styled.span`
  font-weight: 500;
`;

const Clock: FC = () => {
  useIntervalUpdate(2000);

  const formattedDate = moment().format('ddd hh:mm');
  return (
    <Container>{formattedDate}</Container>
  );
};

export default Clock;
