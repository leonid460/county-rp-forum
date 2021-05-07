import React from 'react';
import { Input } from '@/ui-kit/atoms/Input';

type TInputProps = React.ComponentProps<typeof Input>;

export interface IInputWithLabelAndHintsProps extends TInputProps {
  label: string;
  hint?: string;
  isRequired?: boolean;
}
