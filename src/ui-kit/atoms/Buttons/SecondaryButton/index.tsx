import styled from '@/utils/styled';

export const SecondaryButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryVariant};
  }
`;
