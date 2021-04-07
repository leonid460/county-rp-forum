import React, { useState } from 'react';
import * as Styled from './styled';
import { PrimaryButton } from '@/ui-kit/atoms/Buttons/PrimaryButton';

interface IGoToPageWindowProps {
  pagesAmount: number;
  onSubmit: (_: number) => void;
}

export const GoToPageWindow = ({ pagesAmount, onSubmit }: IGoToPageWindowProps) => {
  const [inputValue, setInputValue] = useState<number>(1);

  return (
    <Styled.Container>
      <Styled.Input
        type="number"
        value={inputValue}
        min={1}
        max={pagesAmount}
        onChange={(event) => setInputValue(Number(event.target.value))}
      />
      <PrimaryButton onClick={() => onSubmit(inputValue)}>Перейти</PrimaryButton>
    </Styled.Container>
  );
};
