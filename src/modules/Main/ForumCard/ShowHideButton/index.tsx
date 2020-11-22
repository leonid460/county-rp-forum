import React from 'react';

import { IconWrapper } from './styled';
import { SvgArrowIcon } from './SvgArrowIcon';
import { IShowHideButtonProps } from './types';

export const ShowHideButton = ({ isHidden, onClick }: IShowHideButtonProps) => {
  const direction = isHidden ? 'left' : 'down';

  return (
    <IconWrapper direction={direction} onClick={onClick}>
      <SvgArrowIcon />
    </IconWrapper>
  );
};
