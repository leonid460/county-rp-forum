import React from 'react';
import * as Styled from './styled';
import { ThemeButton } from 'modules/layout/TopPanel/UpperPanel/ThemeButton';
import { AuthMenu } from './AuthMenu';

export const UpperPanel = () => {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Logo>County RP</Styled.Logo>
        <Styled.UserControlWrapper>
          <ThemeButton />
          <AuthMenu />
        </Styled.UserControlWrapper>
      </Styled.ContentContainer>
    </Styled.Container>
  );
};
