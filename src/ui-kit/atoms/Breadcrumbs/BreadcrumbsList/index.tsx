import React from 'react';
import { insertJsxItemBetween } from '@/utils/insertItemBetween';
import { IBreadcrumbsListProps } from './types';
import * as Styled from './styled';
import { SvgKeyboardArrow } from './SvgKeyboardArrow';

export const BreadcrumbsList = ({ entries }: IBreadcrumbsListProps) => {
  let listToRender = entries.map(({ route, name }) => (
    <Styled.BreadcrumbItem href={route} key={route}>
      {name}
    </Styled.BreadcrumbItem>
  ));

  listToRender = insertJsxItemBetween(listToRender, (index) => (
    <SvgKeyboardArrow key={`separator-${index}`} />
  ));

  return <Styled.BreadcrumbsContainer>{listToRender}</Styled.BreadcrumbsContainer>;
};
