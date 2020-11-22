import styled from '@/utils/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 94px;
  width: 100%;
  padding-left: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  &:last-of-type {
    border-bottom: none;
  }
`;
