import React from 'react';
import { navItensMock } from '../heading/navItensMock';
import { Navigation } from '../navigation';

export type MenuMobileProps = {
  handleShowMenu: (show: boolean) => void;
};

export const MenuMobile = ({ handleShowMenu }: MenuMobileProps) => {
  return (
    <section className="menuMobile">
      <Navigation handleShowMenu={handleShowMenu} navItens={navItensMock} />
    </section>
  );
};
