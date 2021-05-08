import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const Container = styled.label`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Checkbox = styled.button<{ isChecked?: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
    transition: opacity 0.2s ease-out;
  }

  &:hover:before {
    opacity: ${({ isChecked }) => (isChecked ? 0.7 : 0.3)};
  }

  &:active:before {
    opacity: ${({ isChecked }) => (isChecked ? 0.3 : 0.7)};
  }

  ${({ theme }) => theme.breakpoints.up('m')} {
    width: 18px;
    height: 18px;
  }
`;

export const LabelText = styled.span`
  margin-left: ${Gaps.Gap8};
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.onSurface};
`;
