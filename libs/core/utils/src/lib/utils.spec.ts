import { cn, formatCurrency } from './utils';

describe('core utils', () => {
  it('joins class names', () => {
    expect(cn('a', false && 'b', 'c')).toBe('a c');
  });

  it('formats currency values', () => {
    expect(formatCurrency(42)).toBe('$42');
  });
});
