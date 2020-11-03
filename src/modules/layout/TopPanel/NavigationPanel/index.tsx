import React from 'react';
import * as Styled from './styled';

export const NavigationPanel = () => {
  const locations = [
    { route: '/nowhere', name: 'Главная' },
    { route: '/', name: 'Форум' }
  ];

  return (
    <Styled.NavigationPanel>
      <Styled.PanelContentContainer>
        <Styled.NavItemsWrapper>
          {locations.map(({ route, name }) => (
            <Styled.NavItem href={route} key={name}>
              {name}
            </Styled.NavItem>
          ))}
        </Styled.NavItemsWrapper>
        <Styled.SearchField placeholder="Поиск..." />
      </Styled.PanelContentContainer>
    </Styled.NavigationPanel>
  );
};
