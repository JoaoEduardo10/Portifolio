import React from 'react';

export type ConteinerPrpps = {
  children: React.ReactNode;
  width?: string;
};

export const Conteiner = ({ children, width }: ConteinerPrpps) => {
  return (
    <section style={{ width: width ?? '100%' }} className="continer-section">
      {children}
    </section>
  );
};
