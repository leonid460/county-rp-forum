import React from 'react';
import * as Styled from './styled';
import { NavigationPanel } from './NavigationPanel';
import { UpperPanel } from './UpperPanel';

export const TopPanel = () => {
  return (
    <Styled.Container>
      <UpperPanel />
      <NavigationPanel />
    </Styled.Container>
  );
};
