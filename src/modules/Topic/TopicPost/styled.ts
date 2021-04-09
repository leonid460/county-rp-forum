import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { Avatar as SourceAvatar } from '@/ui-kit/atoms/Avatar';
import { SvgGoToIcon } from './SvgGoToIcon';
import { Link } from '@/ui-kit/atoms/Link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Gaps.Gap16};
  margin-bottom: ${Gaps.Gap20};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: row;
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${Gaps.Gap16};
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: column;
    max-width: 98px;
    margin-bottom: 0;
    padding: ${Gaps.Gap8};
    margin-right: ${Gaps.Gap16};
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    max-width: 119px;
  }
`;

export const Avatar = styled(SourceAvatar)`
  min-width: 40px;
  min-height: 40px;
  margin-right: ${Gaps.Gap16};

  ${({ theme }) => theme.breakpoints.up('m')} {
    min-width: 60px;
    min-height: 60px;
    margin-right: 0;
    margin-bottom: ${Gaps.Gap16};
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    min-width: 90px;
    min-height: 90px;
  }
`;

export const UserSectionNameAndGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const UserSectionText = styled.span`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.breakpoints.up('m')} {
    text-align: center;
  }
`;

export const UserSectionUserName = styled(UserSectionText)`
  color: ${({ theme }) => theme.colors.onSurface};
  ${({ theme }) => theme.typography.body1};
`;

export const UserSectionGroupName = styled(UserSectionText)`
  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.typography.body2};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const PublicationDate = styled.span`
  margin-bottom: ${Gaps.Gap16};
  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.typography.body1};
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Gaps.Gap16};
  border-left: 4px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

export const QuoteHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Gaps.Gap16};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const QuoteHeadAuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: ${Gaps.Gap8};
  align-items: center;
  overflow: hidden;
`;

export const QuoteHeadText = styled.span`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.onSecondary};
`;

export const QuoteHeadOverflowText = styled(QuoteHeadText)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GoToButtonContainer = styled(Link)`
  display: flex;
`;

export const GoToIcon = styled(SvgGoToIcon)`
  & > path {
    fill: ${({ theme }) => theme.colors.onSecondary};
  }
`;

export const QuoteContent = styled.div`
  padding: ${Gaps.Gap16};
  background: ${({ theme }) => theme.colors.secondaryVariant};
  color: ${({ theme }) => theme.colors.onSecondary};
  ${({ theme }) => theme.typography.body1};
`;

export const PostText = styled.span`
  color: ${({ theme }) => theme.colors.onSurface};
  ${({ theme }) => theme.typography.body1};
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 1px;
  margin: ${Gaps.Gap16} 0;
  background: ${({ theme }) => theme.colors.border};
`;
