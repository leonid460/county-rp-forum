import React, { useState } from 'react';
import * as Styled from './styled';
import { MenuIcon } from './MenuIcon';
import { useDeviceType } from '@/utils/useDeviceType';
import { NavItemsList } from './NavItemsList/NavItemsList';
import { INavItemsListProps } from './NavItemsList/types';

const MobileNavMenu = ({ locations }: INavItemsListProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Styled.MobileMenuWrapper>
      <MenuIcon isActive={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      {menuIsOpen && (
        <Styled.MobilePopUpContainer>
          <NavItemsList locations={locations} />
        </Styled.MobilePopUpContainer>
      )}
    </Styled.MobileMenuWrapper>
  );
};

export const NavMenu = () => {
  const { isTablet, isMobile } = useDeviceType();
  const shouldRenderMobileVersion = isMobile || isTablet;

  const locations = [
    { route: '/nowhere', name: 'Главная' },
    { route: '/', name: 'Форум' }
  ];

  return shouldRenderMobileVersion ? (
    <MobileNavMenu locations={locations} />
  ) : (
    <NavItemsList locations={locations} />
  );
};
