import React from 'react';
import * as Styled from './styled';
import { NavMenu } from './NavMenu';

export const NavigationPanel = () => {
  return (
    <Styled.NavigationPanel>
      <Styled.PanelContentContainer>
        <NavMenu />
        {/*<Styled.SearchField placeholder="Поиск..." />*/}
      </Styled.PanelContentContainer>
    </Styled.NavigationPanel>
  );
};
