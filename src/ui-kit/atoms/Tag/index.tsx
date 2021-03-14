import React from 'react';
import * as Styled from './styled';
import { Link } from '@/ui-kit/atoms/Link';

export const Tag = ({ href, children, className }: React.ComponentProps<typeof Link>) => {
  return (
    <Styled.TagContainer href={href || ''} className={className}>
      {children}
    </Styled.TagContainer>
  );
};
