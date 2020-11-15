import styled from '@/utils/styled';
import { Margins } from '@/ui-kit/constants/global';
import { generateBoxWidth } from './generateBoxWidth';

export const Box = styled.div`
  margin: 0 auto;
  max-width: 1100px;

  ${({ theme }) => generateBoxWidth(theme.breakpoints, Margins)}
`;
