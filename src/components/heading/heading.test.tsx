import React from 'react';
import { Heading } from '.';
import { render, screen } from '@testing-library/react';

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
});
