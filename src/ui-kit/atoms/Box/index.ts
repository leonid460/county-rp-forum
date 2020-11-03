import styled from 'utils/styled';
import { Margins } from 'ui-kit/constants/global';

export const Box = styled.div`
  width: calc(100% - ${Margins.s * 2}px);
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('m')} {
    width: calc(100% - ${Margins.m * 2}px);
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    width: calc(100% - ${Margins.l * 2}px);
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    width: calc(100% - ${Margins.xl * 2}px);
  }

  max-width: 1784px;
`;
