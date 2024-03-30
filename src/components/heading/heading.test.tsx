import React from 'react';
import { Heading } from '.';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('<Heading />', () => {
  it('should render Heading componet with text', () => {
    render(<Heading text="Desenvolvedor" />);

    const text = screen.getByLabelText('Heading test');
    const image = screen.queryByLabelText('logo');
    const navigation = screen.getByRole('navigation');

    expect(text).toHaveTextContent('Desenvolvedor');
    expect(image).not.toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });

  it('should render Heading componet with logo', () => {
    render(<Heading text="Desenvolvedor" logo={'http://logo.png'} />);

    const text = screen.queryByLabelText('Heading test');
    const image = screen.getByLabelText('logo');
    const navigation = screen.getByRole('navigation');

    expect(text).not.toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });

  it('should show a button for the mobile', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query !== '(max-width: 749px)',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(<Heading text="Desenvolvedor" logo={'http://logo.png'} />);

    const buttonMobile = screen.getByLabelText('button mobile');

    expect(buttonMobile).toHaveStyle({
      display: 'block',
    });
  });

  it('should open menu', async () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query !== '(max-width: 749px)',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(<Heading text="Desenvolvedor" logo={'http://logo.png'} />);

    const buttonMobile = screen.getByLabelText('button mobile');

    expect(buttonMobile).toHaveStyle({
      display: 'block',
    });

    await userEvent.click(buttonMobile);
  });
});
