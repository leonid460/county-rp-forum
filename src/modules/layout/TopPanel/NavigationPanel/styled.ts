import styled from 'utils/styled';
import { Box } from 'ui-kit/atoms/Box';
import { Link } from 'ui-kit/atoms/Link';

export const NavigationPanel = styled.div`
  height: 52px;
  background: ${({ theme }) => theme.colors.primaryVariant};
`;

export const PanelContentContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 18px;
  color: ${({ theme }) => theme.colors.onPrimary};
  font-weight: 400;
  font-size: 13px;
  opacity: 0.7;
  transition: 0.2s ease background-color;

  &:first-child {
    padding-left: 0;
  }

  &,
  &:hover {
    text-decoration: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.onPrimary};
  }

  &.active {
    font-weight: 500;
  }

  &:hover,
  &.active {
    opacity: 1;
  }
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
