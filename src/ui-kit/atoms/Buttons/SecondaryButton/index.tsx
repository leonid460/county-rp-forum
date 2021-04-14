import styled from '@emotion/styled';

export const SecondaryButton = styled.button`
  --text-color: ${({ theme }) => theme.colors.primary};
  --background-color: ${({ theme }) => theme.colors.surface};
  --disabled-background-color: ${({ theme }) => theme.colors.onSurface};

  position: relative;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  outline: none;
  overflow: hidden;
  background: none;
  color: var(--text-color);
  background: var(--background-color);
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

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

  &:disabled {
    cursor: not-allowed;

    &:before {
      opacity: 0.3;
      background: var(--disabled-background-color);
    }
  }
`;
