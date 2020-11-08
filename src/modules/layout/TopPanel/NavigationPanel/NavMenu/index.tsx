import React, { useState } from 'react';
import * as Styled from './styled';
import { MenuIcon } from './MenuIcon';
import { useDeviceType } from '@/utils/useDeviceType';

export const NavMenu = () => {
  const { isTablet, isMobile } = useDeviceType();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const locations = [
    { route: '/nowhere', name: 'Главная' },
    { route: '/', name: 'Форум' }
  ];

  const renderNavItems = () => (
    <Styled.NavItemsWrapper>
      {locations.map(({ route, name }) => (
        <Styled.NavItem href={route} key={name}>
          {name}
        </Styled.NavItem>
      ))}
    </Styled.NavItemsWrapper>
  );

  const renderPopUp = () => (
    <Styled.MobileMenuWrapper>
      <MenuIcon isActive={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      {menuIsOpen && <Styled.MobilePopUpContainer>{renderNavItems()}</Styled.MobilePopUpContainer>}
    </Styled.MobileMenuWrapper>
  );

  return isMobile || isTablet ? renderPopUp() : renderNavItems();
};
