import React, { useEffect, useState } from 'react';
import { Portal } from '@/ui-kit/atoms/Portal';
import { GoBackButton } from './GoBackButton';
import { appear } from '@/ui-kit/styles/appear';
import { disappear } from '@/ui-kit/styles/disappear';
import { ModalBackground, ModalHead, ModalContentWrapper } from './styled';
import { IModalProps } from './types';

export const Modal: React.FC<IModalProps> = ({ isVisible, setIsVisible, children }) => {
  const [isVisibleInner, setIsVisibleInner] = useState(false);
  const [disappearAnimationClassName, setDisappearAnimationClassName] = useState(appear);

  useEffect(() => {
    if (isVisible) {
      setDisappearAnimationClassName(appear);
      setIsVisibleInner(true);
    } else {
      setDisappearAnimationClassName(disappear);

      const timerId = setTimeout(() => {
        setIsVisibleInner(false);
      }, 300);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [isVisible]);

  if (!isVisibleInner) {
    return null;
  }

  return (
    <Portal>
      <ModalBackground className={disappearAnimationClassName}>
        <ModalHead>
          <GoBackButton onClick={() => setIsVisible(false)} />
        </ModalHead>
        <ModalContentWrapper>{children}</ModalContentWrapper>
      </ModalBackground>
    </Portal>
  );
};
