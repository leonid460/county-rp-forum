import React, { useState } from 'react';
import * as Styled from './styled';
import { PrimaryButton } from '@/ui-kit/atoms/Buttons/PrimaryButton';
import { useDeviceType } from '@/utils/useDeviceType';
import { OpenPanelButton } from './OpenPanelButton/';
import { useRouter } from 'next/router';
import { registration } from '@/routes';
import { Modal } from '@/ui-kit/atoms/Modal';
import { LoginModalContent } from './LoginModalContent';

const AuthButtons = () => {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);

  return (
    <>
      <Styled.AuthButtonsContainer>
        <Styled.SecondaryButton onClick={openLoginModal}>Войти</Styled.SecondaryButton>
        <PrimaryButton onClick={() => router.push(registration)}>Регистрация</PrimaryButton>
      </Styled.AuthButtonsContainer>
      <Modal isVisible={isLoginModalOpen} setIsVisible={setIsLoginModalOpen}>
        <LoginModalContent />
      </Modal>
    </>
  );
};

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
