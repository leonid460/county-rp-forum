import React from 'react';
import { useDeviceType } from '@/utils/useDeviceType';
import { AngleArrow, Cross, GoBackButtonContainer } from './styled';

export const GoBackButton = ({ onClick }: { onClick?: () => void }) => {
  const { isMobile } = useDeviceType();

  const renderMobile = () => (
    <>
      <AngleArrow />
      Назад
    </>
  );

  const renderDefault = () => <Cross />;

  return (
    <GoBackButtonContainer onClick={onClick}>
      {isMobile ? renderMobile() : renderDefault()}
    </GoBackButtonContainer>
  );
};
