import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  position: relative;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
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
    background: ${({ theme }) => theme.colors.onPrimary};
  }

  &:hover {
    &:before {
      opacity: 0.15;
    }
  }
`;
