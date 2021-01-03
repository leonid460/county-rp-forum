import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { Link as OriginalLink } from '@/ui-kit/atoms/Link';
import { Avatar as OriginalAvatar } from '@/ui-kit/atoms/Avatar';
import { SvgLock as OriginalSvgLock } from '@/ui-kit/atoms/Icons/SvgLock';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopicRowContainer = styled.div`
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
  padding-right: ${Gaps.Gap16};
  box-sizing: border-box;

  &:last-of-type {
    padding-right: 0;
  }
`;

export const HeadingSectionContainer = styled(RowSectionContainer)`
  flex-direction: column;
  align-items: stretch;
  position: relative;
  flex-grow: 1;
  padding-left: ${Gaps.Gap16};

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LastMessageSectionContainer = styled(RowSectionContainer)`
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: row;
    width: 25%;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadingColumn = styled(ColumnContainer)`
  flex-grow: 1;
`;

export const CountersSectionColumn = styled(ColumnContainer)`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.up('m')} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const LinkToTopic = styled(OriginalLink)`
  margin-bottom: ${Gaps.Gap4};
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

export const Avatar = styled(OriginalAvatar)`
  margin-bottom: ${Gaps.Gap4};

  ${({ theme }) => theme.breakpoints.up('m')} {
    margin-bottom: 0;
    margin-right: ${Gaps.Gap8};
  }
`;

export const SvgLock = styled(OriginalSvgLock)`
  position: absolute;
  top: calc(21px - 18px);
  left: 0;
`;
