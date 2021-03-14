import React from 'react';
import * as Styled from './styled';
import { INavItemsListProps } from './types';

export const NavItemsList = ({ locations }: INavItemsListProps) => (
  <Styled.NavItemsWrapper>
    {locations.map(({ route, name }, index) => (
      <Styled.NavItem href={route} key={`${name}-${index}`}>
        {name}
      </Styled.NavItem>
    ))}
  </Styled.NavItemsWrapper>
);
