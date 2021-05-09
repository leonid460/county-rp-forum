import React, { useState } from 'react';
import { Portal } from '@/ui-kit/atoms/Portal';
import { GoBackButton } from './GoBackButton';
import { appear } from '@/ui-kit/styles/appear';
import { disappear } from '@/ui-kit/styles/disappear';
import { ModalBackground, ModalHead, ModalContentWrapper } from './styled';
import { IModalProps } from './types';

export const Modal: React.FC<IModalProps> = ({ isVisible, setIsVisible, children }) => {
  const [disappearAnimationClassName, setDisappearAnimationClassName] = useState(appear);

  const closeModal = () => {
    setDisappearAnimationClassName(disappear);

    const timerId = setTimeout(() => {
      setIsVisible(false);
      setDisappearAnimationClassName(appear);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Portal>
      <ModalBackground className={disappearAnimationClassName}>
        <ModalHead>
          <GoBackButton onClick={closeModal} />
        </ModalHead>
        <ModalContentWrapper>{children}</ModalContentWrapper>
      </ModalBackground>
    </Portal>
  );
};
