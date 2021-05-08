import React from 'react';
import * as Styled from './styled';
import { IRadiobuttonWithLabelProps } from './types';

export const RadiobuttonWithLabel = ({
  label,
  value,
  setValue,
  className
}: IRadiobuttonWithLabelProps) => (
  <Styled.Container className={className}>
    <Styled.Radiobutton isChecked={value} onClick={() => setValue(!value)} />
    <Styled.LabelText>{label}</Styled.LabelText>
  </Styled.Container>
);
