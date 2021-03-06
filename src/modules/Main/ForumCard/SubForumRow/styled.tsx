import styled from '@emotion/styled';
import { Link as OriginalLink } from '@/ui-kit/atoms/Link';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  height: 94px;
  width: 100%;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const InfoSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainInfoSectionContainer = styled(InfoSectionContainer)`
  flex: 1;
`;

export const CountSectionContainer = styled(InfoSectionContainer)``;

export const LastTopicSectionContainer = styled(InfoSectionContainer)`
  width: 25%;
`;

const RowInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfoContainer = styled(RowInfoContainer)`
  margin-left: 16px;
`;

export const PrimaryText = styled.h2`
  margin: 0;
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const SecondaryText = styled.span`
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const MessagesCountWrapper = styled(RowInfoContainer)`
  margin-right: 16px;
`;

export const ViewableTopicInfoSection = styled(RowInfoContainer)`
  margin-left: 8px;
`;

export const Link = styled(OriginalLink)`
  cursor: pointer;
  text-decoration: none !important;

  &:hover > * {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
