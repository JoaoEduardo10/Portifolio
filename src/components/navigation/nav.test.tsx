import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from '.';
import { navItensMock } from '../heading/navItensMock';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('<Navigations />', () => {
  it('should render 5 link', () => {
    render(<Navigation navItens={navItensMock} />);

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(5);
  });

  it('should close menu', async () => {
    const handleShowMenu = vi.fn();
    render(
      <Navigation navItens={navItensMock} handleShowMenu={handleShowMenu} />,
    );

    const links = screen.getAllByRole('link');

    await userEvent.click(links[0]);

    expect(handleShowMenu).toHaveBeenCalled();
  });
});
