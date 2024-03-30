/* eslint-disable prefer-const */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ButtonMenu } from '.';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('ButtonMenu />', () => {
  it('should open button menu', async () => {
    const handleshow = vi.fn(() => {});

    render(<ButtonMenu handleShow={handleshow} show={false} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(handleshow).toHaveBeenCalled();
  });

  it('should close button menu', async () => {
    const handleshow = vi.fn();

    const { rerender } = render(
      <ButtonMenu handleShow={handleshow} show={false} />,
    );

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute(
      'class',
      'button-menu-container-open button-menu-mobile',
    );

    await userEvent.click(button);

    rerender(<ButtonMenu handleShow={handleshow} show={true} />);

    expect(button).toHaveAttribute(
      'class',
      'button-menu-container-close button-menu-mobile',
    );

    await userEvent.click(button);

    rerender(<ButtonMenu handleShow={handleshow} show={false} />);

    expect(button).toHaveAttribute(
      'class',
      'button-menu-container-open button-menu-mobile',
    );
  });
});
