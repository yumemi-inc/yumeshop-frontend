import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Welcome to Yumeshop/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
