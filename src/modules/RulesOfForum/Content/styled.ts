import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { PrimaryButton } from '@/ui-kit/atoms/Buttons/PrimaryButton';

export const Header = styled.h1`
  margin: 0;
  padding: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const ContainerWithPadding = styled.div`
  padding: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const ContinueButton = styled(PrimaryButton)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('m')} {
    width: unset;
  }
`;

export const H1 = styled.h1`
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const H2 = styled.h3`
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.onSurface};
  font-weight: bold;
`;

export const H3 = styled.h3`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Text = styled.span`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.onSurface};
`;
