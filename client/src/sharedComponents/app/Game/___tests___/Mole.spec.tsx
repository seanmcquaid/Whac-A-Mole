import { render, screen } from '@testing-library/react';
import React from 'react';
import Mole from '../Mole';

describe('<Mole/>', () => {
  it('Visible', () => {
    const props = {
      isVisible: true,
      onClick: jest.fn(),
    };

    render(<Mole {...props} />);

    expect(screen.getByTestId('visibleMole')).toBeInTheDocument();
    expect(screen.queryByTestId('hiddenMole')).toBeNull();
  });

  it('Hidden', () => {
    const props = {
      isVisible: false,
      onClick: jest.fn(),
    };

    render(<Mole {...props} />);

    expect(screen.getByTestId('hiddenMole')).toBeInTheDocument();
    expect(screen.queryByTestId('visibleMole')).toBeNull();
  });
});
