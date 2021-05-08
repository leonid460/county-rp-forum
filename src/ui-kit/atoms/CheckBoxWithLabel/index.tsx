import React from 'react';
import * as Styled from './styled';
import { ICheckBoxWithLabelProps } from './types';

export const CheckBoxWithLabel = ({
  label,
  value,
  setValue,
  className
}: ICheckBoxWithLabelProps) => (
  <Styled.Container className={className}>
    <Styled.Checkbox isChecked={value} onClick={() => setValue(!value)} />
    <Styled.LabelText>{label}</Styled.LabelText>
  </Styled.Container>
);
