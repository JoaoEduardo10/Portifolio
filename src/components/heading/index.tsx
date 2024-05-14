'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Navigation } from '../navigation';
import { navItensMock } from './navItensMock';
import { ButtonMenu } from '../buttons/menu';
import { MenuMobile } from '../menuMobile';

export type HeadingProps = {
  logo?: string | StaticImport;
  text: string;
};

export const Heading = ({ logo, text }: HeadingProps) => {
  const [show, setShow] = useState(false);

  const handleShowMenu = (show: boolean) => {
    setShow(show);
  };

  return (
    <div className="container-header">
      <header>
        {logo ? (
          <div aria-label="logo" className="logo">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
        ) : (
          <p aria-label="Heading test" className="logoTitle">
            {text}
          </p>
        )}
        <Navigation navItens={navItensMock} />
        <ButtonMenu show={show} handleShow={handleShowMenu} />
      </header>
      {show && <MenuMobile handleShowMenu={handleShowMenu} />}
    </div>
  );
};
