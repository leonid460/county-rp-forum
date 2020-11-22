import React from 'react';
import * as Styled from './styled';
import { SvgKeyboardArrow } from './SvgKeyboardArrow';
import { IBreadcrumbsProps } from './types';
import { insertJsxItemBetween } from '@/utils/insertItemBetween';

export const BreadcrumbsList = ({ entries }: IBreadcrumbsProps) => {
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

// {index !== entries.length - 1 && <SvgKeyboardArrow key={`${name}-arrow`} />}
