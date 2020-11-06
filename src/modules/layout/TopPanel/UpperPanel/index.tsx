import React from 'react';
import * as Styled from './styled';
import { PrimaryButton } from 'ui-kit/atoms/Buttons/PrimaryButton';
import { ThemeButton } from 'modules/layout/TopPanel/UpperPanel/ThemeButton';

export const UpperPanel = () => {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Logo>County RP</Styled.Logo>
        <Styled.AuthButtonsContainer>
          <ThemeButton />
          <Styled.SecondaryButton>Войти</Styled.SecondaryButton>
          <PrimaryButton>Регистрация</PrimaryButton>
        </Styled.AuthButtonsContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  );
};
