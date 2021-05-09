import React from 'react';
import * as Styled from './styled';
import { IRadioGroupProps } from './types';

export const RadioGroup = ({ value, setValue, options }: IRadioGroupProps) => (
  <Styled.Container>
    {options.map((option) => (
      <Styled.RadioButtonWithLabel
        key={option.value}
        label={option.name}
        value={option.value === value}
        setValue={() => setValue(option.value)}
      />
    ))}
  </Styled.Container>
);
