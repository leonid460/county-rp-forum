import React from 'react';
import { useTheme } from 'utils/useTheme';

interface IMenuIconProps {
  isActive: boolean;
  onClick: () => void;
}

interface ISvgIconProps {
  fillColor: string;
}

const SvgCloseIcon = ({ fillColor }: ISvgIconProps) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      fill={fillColor}
    />
  </svg>
);

const SvgMenuIcon = ({ fillColor }: ISvgIconProps) => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
      fill={fillColor}
    />
  </svg>
);

export const MenuIcon = ({ isActive, onClick }: IMenuIconProps) => {
  const theme = useTheme();
  const fillColor = theme.colors.onPrimary;

  return (
    <span onClick={onClick}>
      {isActive ? <SvgCloseIcon fillColor={fillColor} /> : <SvgMenuIcon fillColor={fillColor} />}
    </span>
  );
};
