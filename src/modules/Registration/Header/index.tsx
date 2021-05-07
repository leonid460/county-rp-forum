import React from 'react';
import * as Styled from './styled';

export const Header = () => (
  <Styled.HeaderContainer>
    <Styled.HeaderMainText>Регистрация</Styled.HeaderMainText>
    <Styled.HeaderSecondaryPartWrapper>
      <Styled.HeaderSecondaryText>Уже зарегистрированы?</Styled.HeaderSecondaryText>
      <Styled.HeaderLoginButton>Войти</Styled.HeaderLoginButton>
    </Styled.HeaderSecondaryPartWrapper>
  </Styled.HeaderContainer>
);
