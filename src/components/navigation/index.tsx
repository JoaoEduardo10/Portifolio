import React from 'react';

export type NavigationItensProps = {
  text: string;
  link: string;
  target: '_blank' | '_self' | '_top';
};

export type NavigationProps = {
  navItens: NavigationItensProps[];
};

export const Navigation = ({ navItens }: NavigationProps) => {
  return (
    <nav role="navigation" className="navigationHeader">
      <ul role="list">
        {navItens.map((item) => (
          <li role="listitem" key={item.link}>
            <a href={item.link} target={item.target}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
