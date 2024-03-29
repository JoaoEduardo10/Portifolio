import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '@/components/heading';

describe('<Heading>', () => {
  it('should render a heading', () => {
    render(<Heading />);

    expect(screen.getByRole('heading')).toHaveTextContent('test');
  });
});
