import React from 'react';
import { Input } from '@/ui-kit/atoms/Input';
import { IInputWithLabelAndHintsProps } from './types';
import * as Styled from './styled';

export const InputWithLabelAndHints = ({
  label,
  hint,
  isRequired,
  ...inputProps
}: IInputWithLabelAndHintsProps) => {
  return (
    <Styled.Container>
      <Styled.LabelAndRequiredWrapper>
        <Styled.LabelText>{label}</Styled.LabelText>
        {isRequired && <Styled.RequiredText>обязательно</Styled.RequiredText>}
      </Styled.LabelAndRequiredWrapper>
      <Input {...inputProps} />
      {hint && <Styled.HintText>{hint}</Styled.HintText>}
    </Styled.Container>
  );
};
