import React, { useState } from 'react';
import * as Styled from './styled';
import { ICheckboxGroupProps } from './types';

export const CheckboxGroup = ({ values, setValues, options }: ICheckboxGroupProps) => {
  const [setOfValues, setSetOfValues] = useState(new Set<string>(values));

  const setValue = (key: string, value: boolean) => {
    const newSet = new Set(setOfValues);

    value ? newSet.add(key) : newSet.delete(key);

    setSetOfValues(newSet);
    setValues(Array.from(newSet));
  };

  return (
    <Styled.Container>
      {options.map((option) => (
        <Styled.CheckBoxWithLabel
          key={option.value}
          label={option.name}
          value={setOfValues.has(option.value)}
          setValue={(value) => setValue(option.value, value)}
        />
      ))}
    </Styled.Container>
  );
};
