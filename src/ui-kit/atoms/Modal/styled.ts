import styled from '@emotion/styled';
import { AngleArrow as SourceAngleArrow } from '@/ui-kit/atoms/Icons/AngleArrow';
import { Gaps } from '@/ui-kit/constants/global';
import { Cross as SourceCross } from '@/ui-kit/atoms/Icons/Cross';

export const AngleArrow = styled(SourceAngleArrow)`
  margin-right: ${Gaps.Gap4};

  & > path {
    stroke: white;
  }
`;

export const Cross = styled(SourceCross)`
  width: 24px;

  & > rect {
    fill: white;
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    width: 32px;
  }
`;

export const GoBackButtonContainer = styled.button`
  border: none;
  padding: 0;
  background: none;
  color: white;
  ${({ theme }) => theme.typography.body1};
  cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  background: rgb(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`;

export const ModalHead = styled.div`
  padding: ${Gaps.Gap16};

  ${({ theme }) => theme.breakpoints.up('m')} {
    padding: ${Gaps.Gap32};
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 ${Gaps.Gap16} ${Gaps.Gap16} ${Gaps.Gap16};
`;
