import styled from '@emotion/styled';
import { RadiobuttonWithLabel as SourceRadioButtonWithLabel } from '@/ui-kit/atoms/RadiobuttonWithLabel';
import { Gaps } from '@/ui-kit/constants/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioButtonWithLabel = styled(SourceRadioButtonWithLabel)`
  margin-bottom: ${Gaps.Gap8};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
