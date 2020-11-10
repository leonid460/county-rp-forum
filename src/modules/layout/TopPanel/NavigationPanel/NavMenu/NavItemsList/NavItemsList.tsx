import React from 'react';
import * as Styled from './styled';
import { INavItemsListProps } from './types';

export const NavItemsList = ({ locations }: INavItemsListProps) => (
  <Styled.NavItemsWrapper>
    {locations.map(({ route, name }) => (
      <Styled.NavItem href={route} key={name}>
        {name}
      </Styled.NavItem>
    ))}
  </Styled.NavItemsWrapper>
);
