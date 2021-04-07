import styled from '@emotion/styled';
import { Gaps } from '@/ui-kit/constants/global';
import { Tag as OriginalTag } from '@/ui-kit/atoms/Tag';
import { Avatar } from '@/ui-kit/atoms/Avatar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${Gaps.Gap20} 0;
  border-radius: 4px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${Gaps.Gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Title = styled.h1`
  display: block;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const AuthorInfoContainer = styled(HeaderRow)`
  align-items: center;
`;

export const AuthorAvatar = styled(Avatar)`
  margin-right: ${Gaps.Gap8};
`;

export const AuthorInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const AuthorName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: ${Gaps.Gap4};
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const CreationDate = styled.div`
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TagsContainer = styled(HeaderRow)`
  padding-bottom: calc(${Gaps.Gap16} - ${Gaps.Gap4});
`;

export const Tag = styled(OriginalTag)`
  margin-right: ${Gaps.Gap4};
  margin-bottom: ${Gaps.Gap4};

  &:last-of-type {
    margin-right: 0;
  }
`;
