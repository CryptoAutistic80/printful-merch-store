export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(value: number, currency: string | Intl.NumberFormatOptions['currency'] = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: typeof currency === 'string' ? currency : 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
