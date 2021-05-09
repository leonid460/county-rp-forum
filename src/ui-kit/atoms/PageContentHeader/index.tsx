import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const PageContentHeader = styled.h1`
  padding: ${Gaps.Gap16};
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.onSurface};
`;
