import React from 'react';
import * as Styled from '@/modules/Topic/TopicPost/styled';
import { IQuoteProps } from './types';

export const GoToButton = ({ href }: { href: string }) => (
  <Styled.GoToButtonContainer href={href}>
    <Styled.GoToIcon />
  </Styled.GoToButtonContainer>
);

export const Quote = ({ author, text, quotedPostLink }: IQuoteProps) => (
  <Styled.QuoteContainer>
    <Styled.QuoteHead>
      <Styled.QuoteHeadAuthorWrapper>
        <Styled.QuoteHeadOverflowText>{author}</Styled.QuoteHeadOverflowText>
        &nbsp;
        <Styled.QuoteHeadText>сказал:</Styled.QuoteHeadText>
      </Styled.QuoteHeadAuthorWrapper>
      <GoToButton href={quotedPostLink} />
    </Styled.QuoteHead>
    <Styled.QuoteContent>{text}</Styled.QuoteContent>
  </Styled.QuoteContainer>
);
