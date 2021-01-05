import styled from '@emotion/styled';
import { Link } from '@/ui-kit/atoms/Link';
import { Gaps } from '@/ui-kit/constants/global';

export const BreadcrumbItem = styled(Link)`
  display: inline-block;
  margin: 0 7px;

  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.typography.body2};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${Gaps.Gap12} 0;
`;
