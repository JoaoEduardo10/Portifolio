import Link from 'next/link';
import React from 'react';

export type NavigationItensProps = {
  text: string;
  link: string;
  target: '_blank' | '_self' | '_top';
};

export type NavigationProps = {
  navItens: NavigationItensProps[];
  handleShowMenu?: (show: boolean) => void;
};

export const Navigation = ({ navItens, handleShowMenu }: NavigationProps) => {
  const handleClickShowMenu = () => {
    if (handleShowMenu) {
      handleShowMenu(false);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="navegaçao leptop"
      className="navigationHeader navigation-menu"
    >
      <ul role="list">
        {navItens.map((item, index) => (
          <li onClick={handleClickShowMenu} role="listitem" key={index}>
            <Link
              href={item.link}
              legacyBehavior
              target={item.target}
              rel="internal"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
