import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const CardContainer = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
  margin-bottom: ${Gaps.Gap20};
  background: ${({ theme }) => theme.colors.surface};

  &:last-of-type {
    margin-bottom: 0;
  }
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
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const CardBody = styled.div`
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: max-height 0.4s ease-in-out;
`;
