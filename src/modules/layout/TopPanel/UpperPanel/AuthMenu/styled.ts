import styled from '@emotion/styled';
import { SecondaryButton as ProtoSecondaryButton } from '@/ui-kit/atoms/Buttons/SecondaryButton';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100vw;
  background: ${({ theme }) => theme.colors.surface};
  border-top: solid 1px ${({ theme }) => theme.colors.border};
  animation: growOut 0.3s ease-in-out forwards;
  transform-origin: top center;
  user-select: none;
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
