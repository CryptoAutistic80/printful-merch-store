import React from 'react';
import { render } from '@testing-library/react';
import { Hero } from '../src/features/catalog/components/Hero';

describe('Hero', () => {
  it('renders heading text', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/Group 7 Life/i)).toBeTruthy();
  });
});
