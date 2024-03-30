import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from '.';
import { navItensMock } from '../heading/navItensMock';

describe('<Navigations />', () => {
  it('should render 5 link', () => {
    render(<Navigation navItens={navItensMock} />);

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(5);
  });
});
