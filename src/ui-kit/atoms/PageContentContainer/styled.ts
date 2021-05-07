import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';

export const ContentContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  margin-top: ${Gaps.Gap20};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
`;
