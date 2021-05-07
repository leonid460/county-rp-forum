import React from 'react';
import * as Styled from './styled';
import { boxShadow } from '@/ui-kit/styles/boxShadow';

export const PageContentContainer = (
  props: React.ComponentProps<typeof Styled.ContentContainer>
) => <Styled.ContentContainer className={boxShadow} {...props} />;
