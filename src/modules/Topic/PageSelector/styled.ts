import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { SvgTripleDots } from './SvgTripleDots';
import {
  ForwardButton as SourceForwardButton,
  BackButton as SourceBackButton
} from './DirectionButtons';
import { SecondaryButton } from '@/ui-kit/atoms/Buttons/SecondaryButton';

export const MobileSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  align-items: center;
  padding: ${Gaps.Gap16};
  margin-bottom: ${Gaps.Gap20};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${Gaps.Gap16};
  margin-bottom: ${Gaps.Gap20};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
`;

export const PageNumbersListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${Gaps.Gap16};
`;

export const PageNumberButton = styled.button<{ isActive?: boolean }>`
  --background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : '')};
  --text-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.onPrimary : theme.colors.primary};

  position: relative;
  padding: ${Gaps.Gap4} ${Gaps.Gap8};
  margin-right: ${Gaps.Gap8};
  border: none;
  border-radius: 2px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  background: var(--background-color);
  color: var(--text-color);
  ${({ theme }) => theme.typography.button};

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    background: var(--text-color);
    transition: opacity 0.2s ease;
  }

  &:hover {
    &:before {
      opacity: 0.15;
    }
  }

  &:active {
    &:before {
      opacity: 0.3;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const TripleDots = styled(SvgTripleDots)`
  margin-right: ${Gaps.Gap8};

  & > circle {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ForwardButton = styled(SourceForwardButton)`
  grid-column-start: 3;
  justify-self: end;

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-right: ${Gaps.Gap16};
  }
`;

export const BackButton = styled(SourceBackButton)`
  grid-column-start: 1;
  justify-self: start;

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-right: ${Gaps.Gap16};
  }
`;

export const GoToPageButton = styled(SecondaryButton)<{ active?: boolean }>`
  text-transform: none;

  &:before {
    ${({ active }) => (active ? 'opacity: 0.3' : '')}
  }
`;

export const MobileGoToPageButton = styled(GoToPageButton)`
  grid-column-start: 2;
  justify-self: center;
`;
