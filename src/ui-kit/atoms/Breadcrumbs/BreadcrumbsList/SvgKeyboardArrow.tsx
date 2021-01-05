import React from 'react';
import { useTheme } from '@emotion/react';

export const SvgKeyboardArrow = () => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      width="15px"
      height="15px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        fill={theme.colors.secondary}
      />
    </svg>
  );
};
