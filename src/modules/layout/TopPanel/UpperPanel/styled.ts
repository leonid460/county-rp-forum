import styled from 'utils/styled';
import { Box } from 'ui-kit/atoms/Box';
import { SecondaryButton as ProtoSecondaryButton } from 'ui-kit/atoms/Buttons/SecondaryButton';

export const Container = styled.div`
  width: 100%;
  height: 66px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 16px 0;
`;

export const SecondaryButton = styled(ProtoSecondaryButton)`
  margin-right: 15px;
`;
