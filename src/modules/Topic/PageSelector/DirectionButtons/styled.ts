import styled from '@emotion/styled';
import { AngleArrow as SourceAngleArrow } from '@/ui-kit/atoms/Icons/AngleArrow';
import { Gaps } from '@/ui-kit/constants/global';

export const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: ${Gaps.Gap4} ${Gaps.Gap8};
  overflow: hidden;
  outline: none;
  ${({ theme }) => theme.typography.button};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  background: none;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    &:after {
      opacity: 0.15;
    }
  }

  &:active {
    &:after {
      opacity: 0.3;
    }
  }

  &:disabled {
    cursor: not-allowed;

    &:after {
      opacity: 0.3;
      background: ${({ theme }) => theme.colors.onSurface};
    }
  }
`;

export const LeftArrow = styled(SourceAngleArrow)`
  margin-right: ${Gaps.Gap4};

  & > path {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

export const RightArrow = styled(SourceAngleArrow)`
  margin-left: ${Gaps.Gap4};
  transform: scaleX(-1);

  & > path {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
