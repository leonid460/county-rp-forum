import styled from 'utils/styled';

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryVariant};
  }
`;
