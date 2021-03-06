import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const PageHeader = styled.h1`
  padding: ${Gaps.Gap20} 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.onBackground};
  ${({ theme }) => theme.typography.h1};
`;
