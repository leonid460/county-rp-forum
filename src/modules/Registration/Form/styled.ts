import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { PrimaryButton } from '@/ui-kit/atoms/Buttons/PrimaryButton';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: ${Gaps.Gap16};
  padding: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.breakpoints.up('l')} {
    grid-template-columns: repeat(2, calc((100% - 16px) / 2));
    column-gap: ${Gaps.Gap16};
    row-gap: ${Gaps.Gap24};
    width: calc(2 * 100% / 3);
  }
`;

export const ContinueButton = styled(PrimaryButton)`
  width: calc(100% - ${Gaps.Gap16} * 2);
  margin: ${Gaps.Gap16};

  ${({ theme }) => theme.breakpoints.up('m')} {
    width: unset;
  }
`;
