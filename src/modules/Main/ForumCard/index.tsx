import React, { useState } from 'react';
import * as Styled from './styled';
import { ShowHideButton } from './ShowHideButton';
import { SubForumRow } from './SubForumRow';
import { useCollapsible } from './useCollapsible';
import { IForum } from './types';
import { boxShadow } from '@/ui-kit/styles/boxShadow';

export const ForumCard = ({ name, subForums }: IForum) => {
  const [showBody, setShowBody] = useState(true);
  const { ref: bodyRef, maxHeight: bodyMaxHeight } = useCollapsible();
  const isNotEmpty = !!subForums;

  const renderSubForumsCards = () =>
    subForums.map((subForum) => <SubForumRow key={subForum.name} {...subForum} />);

  return (
    <Styled.CardContainer className={boxShadow}>
      <Styled.CardHeadContainer>
        <Styled.Title>{name}</Styled.Title>
        {isNotEmpty && (
          <ShowHideButton isHidden={!showBody} onClick={() => setShowBody(!showBody)} />
        )}
      </Styled.CardHeadContainer>
      <Styled.CardBody ref={bodyRef} style={{ maxHeight: showBody ? bodyMaxHeight : 0 }}>
        {isNotEmpty && renderSubForumsCards()}
      </Styled.CardBody>
    </Styled.CardContainer>
  );
};
