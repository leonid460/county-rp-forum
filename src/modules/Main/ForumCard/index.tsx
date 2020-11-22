import React, { useState } from 'react';
import * as Styled from './styled';
import { ShowHideButton } from './ShowHideButton';
import { SubForumRow } from './SubForumRow';

interface ISubForumInfo {
  name: string;
  moderators: string[];
  messagesCount?: number;
  viewableTopic?: ILastTopicInfo;
}

interface ILastTopicInfo {
  name: string;
  avatarUrl: string;
  authorName: string;
  date: Date;
}

interface IForumCardProps {
  name: string;
  subForums?: ISubForumInfo[];
}

export const ForumCard = ({ name }: IForumCardProps) => {
  const [showBody, setShowBody] = useState(true);
  const { ref: bodyRef, maxHeight: bodyMaxHeight } = useCollapsible();

  return (
    <Styled.CardContainer>
      <Styled.CardHeadContainer>
        <Styled.Title>{name}</Styled.Title>
        <ShowHideButton isHidden={!showBody} onClick={() => setShowBody(!showBody)} />
      </Styled.CardHeadContainer>
      <Styled.CardBody ref={bodyRef} style={{ maxHeight: showBody ? bodyMaxHeight : 0 }}>
        <SubForumRow />
        <SubForumRow />
      </Styled.CardBody>
    </Styled.CardContainer>
  );
};

function useCollapsible() {
  const collapsibleRef = React.useRef<HTMLDivElement>(null);
  const [collapsibleContentHeight, setCollapsibleContentHeight] = useState<number | string>(null);

  React.useEffect(() => {
    setCollapsibleContentHeight(getContentHeight(collapsibleRef.current));
  }, [collapsibleRef]);

  return {
    ref: collapsibleRef,
    maxHeight: collapsibleContentHeight
  };
}

function getContentHeight(element: HTMLElement | null): number | string {
  return element?.scrollHeight || 'initial';
}
