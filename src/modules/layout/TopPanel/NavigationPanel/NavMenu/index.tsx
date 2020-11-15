import React, { useState } from 'react';
import * as Styled from './styled';
import { MenuIcon } from './MenuIcon';
import { useDeviceType } from '@/utils/useDeviceType';
import { NavItemsList } from './NavItemsList/NavItemsList';
import { INavItemsListProps } from './NavItemsList/types';
import { mainLocations } from '@/locations';

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

  return shouldRenderMobileVersion ? (
    <MobileNavMenu locations={mainLocations} />
  ) : (
    <NavItemsList locations={mainLocations} />
  );
};
