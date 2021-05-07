import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelAndRequiredWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${Gaps.Gap4};
`;

export const LabelText = styled.span`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.onSurface};
  font-weight: 700;
`;

export const RequiredText = styled.span`
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.error};
`;

export const HintText = styled.span`
  margin-top: ${Gaps.Gap4};
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.secondary};
`;
