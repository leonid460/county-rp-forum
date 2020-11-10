import React from 'react';

import * as Styled from './styled';

import { IThemeSwitchProps } from './types';

export const ThemeSwitch = ({ checked, onChange }: IThemeSwitchProps) => (
  <Styled.Wrapper>
    <Styled.Checkbox checked={checked} onChange={onChange} />
    <Styled.Slider />
  </Styled.Wrapper>
);
