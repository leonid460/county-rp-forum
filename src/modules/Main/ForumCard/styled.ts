import styled from '@/utils/styled';

export const CardContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.h3};
`;

export const CardBody = styled.div`
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: max-height 0.4s ease-in-out;
`;
