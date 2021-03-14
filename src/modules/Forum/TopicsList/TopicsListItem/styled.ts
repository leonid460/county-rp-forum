import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { SvgLock as OriginalSvgLock } from '@/ui-kit/atoms/Icons/SvgLock';
import { Tag as OriginalTag } from '@/ui-kit/atoms/Tag';
import { Link as OriginalLink } from '@/ui-kit/atoms/Link';
import { Avatar as OriginalAvatar } from '@/ui-kit/atoms/Avatar';

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

const RowSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const HeadingSectionContainer = styled(RowSectionContainer)`
  flex-direction: column;
  align-items: stretch;
  position: relative;
  flex-grow: 1;
  padding-left: ${Gaps.Gap16};

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: row;
    align-items: center;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadingColumn = styled(ColumnContainer)`
  flex-grow: 1;
`;

export const SvgLock = styled(OriginalSvgLock)`
  position: absolute;
  top: calc(21px - 18px);
  left: 0;
`;

export const TagAndNameWrapper = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${Gaps.Gap4};
`;

export const Tag = styled(OriginalTag)`
  margin-right: ${Gaps.Gap4};
`;

export const LinkToTopic = styled(OriginalLink)`
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.onSurface};
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body2};
`;

export const MainText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-bottom: ${Gaps.Gap4};
    color: ${({ theme }) => theme.colors.onSurface};
  }
`;

export const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CountersSectionColumn = styled(ColumnContainer)`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Avatar = styled(OriginalAvatar)`
  margin-bottom: ${Gaps.Gap4};

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-bottom: 0;
    margin-right: ${Gaps.Gap8};
  }
`;

export const LastMessageSectionContainer = styled(RowSectionContainer)`
  flex-direction: column;
  padding-left: ${Gaps.Gap16};

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: row;
    max-width: 25%;
  }
`;
