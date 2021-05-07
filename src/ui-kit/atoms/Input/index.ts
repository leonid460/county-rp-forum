import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const Input = styled.input`
  padding: ${Gaps.Gap12};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  outline: none;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
