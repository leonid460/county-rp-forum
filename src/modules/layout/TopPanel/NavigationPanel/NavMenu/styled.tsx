import styled from '@/utils/styled';

export const MobileMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MobilePopUpContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primaryVariant};
  animation: growOut 0.3s ease-in-out forwards;
  transform-origin: top center;
  user-select: none;
`;
