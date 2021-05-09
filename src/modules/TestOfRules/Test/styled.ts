import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const ContainerWithBorderAndPadding = styled.div`
  padding: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const TestCaseContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: ${Gaps.Gap16};
  margin-bottom: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    padding-bottom: ${Gaps.Gap8};
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const TestCaseQuestion = styled.h3`
  margin: 0 0 ${Gaps.Gap16} 0;
  padding: 0;
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.onSurface};
`;
