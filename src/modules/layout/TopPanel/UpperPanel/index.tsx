import React from 'react';
import * as Styled from './styled';
import { ThemeSwitchBlock } from '@/modules/layout/TopPanel/UpperPanel/ThemeSwitchBlock';
import { AuthMenu } from './AuthMenu';

export const UpperPanel = () => {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Logo>County RP</Styled.Logo>
        <Styled.UserControlWrapper>
          <ThemeSwitchBlock />
          <AuthMenu />
        </Styled.UserControlWrapper>
      </Styled.ContentContainer>
    </Styled.Container>
  );
};
