import React, { useState } from 'react';
import * as Styled from './styled';
import { PrimaryButton } from '@/ui-kit/atoms/Buttons/PrimaryButton';
import { useDeviceType } from '@/utils/useDeviceType';
import { OpenPanelButton } from './OpenPanelButton/';

const AuthButtons = () => (
  <Styled.AuthButtonsContainer>
    <Styled.SecondaryButton>Войти</Styled.SecondaryButton>
    <PrimaryButton>Регистрация</PrimaryButton>
  </Styled.AuthButtonsContainer>
);

const MobileAuthMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Styled.Container>
      <OpenPanelButton isActive={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      {menuIsOpen && (
        <Styled.MobileMenuWrapper>
          <AuthButtons />
        </Styled.MobileMenuWrapper>
      )}
    </Styled.Container>
  );
};

export const AuthMenu = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? <MobileAuthMenu /> : <AuthButtons />;
};
