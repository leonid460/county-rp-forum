import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { SecondaryButton } from '@/ui-kit/atoms/Buttons/SecondaryButton';

export const HeaderContainer = styled.div`
  padding: ${Gaps.Gap16};
  color: ${({ theme }) => theme.colors.onSurface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderMainText = styled.h1`
  ${({ theme }) => theme.typography.h1};
  margin: 0 0 ${Gaps.Gap4} 0;
`;

export const HeaderSecondaryPartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeaderSecondaryText = styled.span`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 0.5em;
`;

export const HeaderLoginButton = styled(SecondaryButton)`
  padding: 0 ${Gaps.Gap4};
`;
