import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  --text-color: ${({ theme }) => theme.colors.onPrimary};
  --background-color: ${({ theme }) => theme.colors.primary};
  --disabled-background-color: ${({ theme }) => theme.colors.onPrimary};
  --border-radius: 4px;

  position: relative;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  background: var(--background-color);
  color: var(--text-color);
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
    border-radius: var(--border-radius);
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
