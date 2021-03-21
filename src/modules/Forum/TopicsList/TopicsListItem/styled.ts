import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { SvgLock as OriginalSvgLock } from '@/ui-kit/atoms/Icons/SvgLock';
import { Tag as OriginalTag } from '@/ui-kit/atoms/Tag';
import { Link as OriginalLink } from '@/ui-kit/atoms/Link';
import { Avatar as OriginalAvatar } from '@/ui-kit/atoms/Avatar';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${Gaps.Gap16};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const ContentAndLockContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LockIconContainer = styled.div`
  display: flex;
  min-width: 8px;
  width: 8px;
  margin-right: ${Gaps.Gap8};
`;

export const SvgLock = styled(OriginalSvgLock)`
  margin-top: ${Gaps.Gap4};
`;

export const ItemContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc((100% - ${Gaps.Gap8} * 3) / 4));
  grid-template-rows: auto;
  column-gap: ${Gaps.Gap8};
  width: calc(100% - 16px);
  box-sizing: border-box;

  ${({ theme }) => theme.breakpoints.up('m')} {
    grid-template-columns: repeat(8, calc((100% - ${Gaps.Gap20} * 7) / 8));
    column-gap: ${Gaps.Gap20};
  }
`;

export const TitlePartContainer = styled.div`
  display: flex;
  grid-column: 1 / 4;
  flex-direction: column;
  margin-bottom: ${Gaps.Gap4};

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    grid-column: 1 / 5;
  }
`;

export const LinkToTopic = styled(OriginalLink)`
  margin-bottom: ${Gaps.Gap4};
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.onSurface};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AboutAuthorTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body2};
`;

export const MainText = styled(Text)`
  margin-bottom: ${Gaps.Gap4};
  color: ${({ theme }) => theme.colors.secondary};

  ${({ theme }) => theme.breakpoints.up('m')} {
    color: ${({ theme }) => theme.colors.onSurface};
  }
`;

export const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AuthorName = styled(SecondaryText)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TopicCreationDate = styled(SecondaryText)`
  display: block;
  white-space: nowrap;
`;

export const CountersColumnContainer = styled.div`
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('m')} {
    grid-column: 4 / 6;
    justify-content: center;
    align-items: flex-end;
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    grid-column: 5 / 7;
  }
`;

export const LastMessageInfoContainer = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${({ theme }) => theme.breakpoints.up('m')} {
    grid-row: 1 / 2;
    grid-column: 6 / 9;
    flex-direction: row;
    align-items: flex-start;
  }

  ${({ theme }) => theme.breakpoints.up('l')} {
    grid-column: 7 / 9;
  }
`;

export const Avatar = styled(OriginalAvatar)`
  margin-bottom: ${Gaps.Gap4};

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-bottom: 0;
    margin-right: ${Gaps.Gap8};
  }
`;

export const LastMessageInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LastMessageAuthorName = styled(MainText)`
  display: none;

  ${({ theme }) => theme.breakpoints.up('m')} {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${Gaps.Gap8};
  margin-top: ${Gaps.Gap8};
`;

export const Tag = styled(OriginalTag)`
  margin-right: ${Gaps.Gap4};
`;
