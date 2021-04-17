import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { Link } from '@/ui-kit/atoms/Link';
import { SvgGoToPrevPageButtonArrow as OriginalSvgGoToPrevPageButtonArrow } from './SvgGoToPrevPageButtonArrow';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${Gaps.Gap8} ${Gaps.Gap16};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const GoToPrevPageButtonContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const GoToPrevPageButtonText = styled.div`
  padding: ${Gaps.Gap8} ${Gaps.Gap4} ${Gaps.Gap8} 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.onSecondary};
  ${({ theme }) => theme.typography.button};
`;

export const SvgGoToPrevPageButtonArrow = styled(OriginalSvgGoToPrevPageButtonArrow)`
  & path {
    fill: ${({ theme }) => theme.colors.onSecondary};
  }
`;
