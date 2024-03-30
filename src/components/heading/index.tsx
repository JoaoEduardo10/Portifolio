'use server';

import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Navigation } from '../navigation';
import { navItensMock } from './navItensMock';

export type HeadingProps = {
  logo?: string | StaticImport;
  text: string;
};

export const Heading = ({ logo, text }: HeadingProps) => {
  return (
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
    </header>
  );
};
