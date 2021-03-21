import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const Header = styled.h1`
  padding: ${Gaps.Gap16};
  margin: 0;
  color: ${({ theme }) => theme.colors.onBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.typography.h1};
`;
