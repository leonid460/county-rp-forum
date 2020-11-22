import styled from '@/utils/styled';

export const IconWrapper = styled.div<{ direction: 'left' | 'down' }>`
  transform: rotate(${({ direction }) => (direction === 'left' ? '90' : '0')}deg);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  & > svg path {
    stroke: ${({ theme }) => theme.colors.onSurface};
  }

  &:hover {
    & > svg path {
      stroke-opacity: 0.5;
      transition: stroke-opacity 0.2s ease;
    }
  }
`;
