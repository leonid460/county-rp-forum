import React, { useState } from 'react';
import * as Styled from './styled';
import { PrimaryButton } from 'ui-kit/atoms/Buttons/PrimaryButton';
import { useDeviceType } from 'utils/useDeviceType';
import { OpenPanelButton } from './OpenPanelButton/';

export const AuthMenu = () => {
  const { isMobile } = useDeviceType();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const renderButtons = () => (
    <Styled.AuthButtonsContainer>
      <Styled.SecondaryButton>Войти</Styled.SecondaryButton>
      <PrimaryButton>Регистрация</PrimaryButton>
    </Styled.AuthButtonsContainer>
  );

  const renderMobile = () => (
    <Styled.Container>
      <OpenPanelButton isActive={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      {menuIsOpen && <Styled.MobileMenuWrapper>{renderButtons()}</Styled.MobileMenuWrapper>}
    </Styled.Container>
  );

  return isMobile ? renderMobile() : renderButtons();
};
