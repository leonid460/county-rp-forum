import styled from '@emotion/styled';
import { CheckBoxWithLabel as SourceCheckBoxWithLabel } from '@/ui-kit/atoms/CheckBoxWithLabel';
import { Gaps } from '@/ui-kit/constants/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckBoxWithLabel = styled(SourceCheckBoxWithLabel)`
  margin-bottom: ${Gaps.Gap8};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
