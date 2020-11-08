import styled from '@/utils/styled';
import { Box } from '@/ui-kit/atoms/Box';

export const NavigationPanel = styled.div`
  position: relative;
  height: 52px;
  background: ${({ theme }) => theme.colors.primaryVariant};
`;

export const PanelContentContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

export const SearchField = styled.input`
  width: 228px;
  height: 32px;
  padding: 8px 13px;
  margin: auto 0;
  border: none;
  border-radius: 18px;
  outline: none;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
`;
