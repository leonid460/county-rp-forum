import React from 'react';
import { useTheme } from '@emotion/react';
import { IOpenPanelButtonProps } from './types';
import { ButtonWrapper } from './styled';

export const OpenPanelButton = ({ isActive, onClick, className }: IOpenPanelButtonProps) => {
  const theme = useTheme();
  const fillColor = isActive ? theme.colors.secondary : theme.colors.primary;

  return (
    <ButtonWrapper
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.01L0 2C0 0.9 0.9 0 2 0L16 0C17.1 0 18 0.9 18 2L18 20C18 21.1 17.1 22 16 22L2 22C0.9 22 0 21.1 0 20L0 14.99C0 14.45 0.45 14 1 14C1.54 14 1.99 14.45 1.99 14.99L1.99 19C1.99 19.55 2.44 20 2.99 20L15.01 20C15.56 20 16.01 19.55 16.01 19L16.01 3C16.01 2.45 15.56 2 15.01 2L2.98 2C2.43 2 1.98 2.45 1.98 3L1.98 7.01C1.98 7.55 1.54 8 0.99 8C0.45 8 0 7.55 0 7.01ZM9.86 7.86L12.65 10.65C12.84 10.84 12.84 11.16 12.64 11.35L9.85 14.14C9.54 14.46 9 14.24 9 13.79V12L1 12C0.45 12 0 11.55 0 11C0 10.45 0.45 10 1 10L9.01 10L9.01 8.21C9.01 7.77 9.55 7.55 9.86 7.86Z"
        fill={fillColor}
      />
    </ButtonWrapper>
  );
};
