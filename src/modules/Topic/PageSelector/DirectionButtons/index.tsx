import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './styled';

export const ForwardButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Styled.Container {...props}>
    {children}
    <Styled.RightArrow />
  </Styled.Container>
);

export const BackButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Styled.Container {...props}>
    <Styled.LeftArrow />
    {children}
  </Styled.Container>
);
