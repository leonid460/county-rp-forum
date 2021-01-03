import React from 'react';
import * as Styled from './styled';
import { IAvatarProps } from './types';

export const Avatar = ({ src, className }: IAvatarProps) => {
  const avatarImgSrc = src || '/media/avatar-placeholder.svg';

  return <Styled.Avatar src={avatarImgSrc} className={className} />;
};
