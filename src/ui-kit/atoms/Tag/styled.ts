import styled from '@emotion/styled';
import { Link } from '@/ui-kit/atoms/Link';
import { Gaps } from '@/ui-kit/constants/global';

export const TagContainer = styled(Link)`
  position: relative;
  display: inline-flex;
  padding: ${Gaps.Gap4} ${Gaps.Gap8};
  border-radius: 22px;
  background: #005cdf;
  text-decoration: none !important;
  overflow: hidden;

  ${({ theme }) => theme.typography.body2};
  color: white;

  &:hover,
  &:active {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: black;
      opacity: 0.2;
    }
  }
`;
