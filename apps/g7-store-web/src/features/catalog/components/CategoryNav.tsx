import Link from 'next/link';
import { Category } from '@g7/shared-types';
import { cn } from '@g7/core/utils';

const categories: { label: string; value?: Category }[] = [
  { label: 'All' },
  { label: 'Tees', value: 'tee' },
  { label: 'Hoodies', value: 'hoodie' },
  { label: 'Hats', value: 'hat' },
  { label: 'Accessories', value: 'accessory' },
];

export function CategoryNav({ activeCategory }: { activeCategory?: Category }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const href = category.value ? `/category/${category.value}` : '/shop';
        const isActive = category.value === activeCategory || (!category.value && !activeCategory);
        return (
          <Link
            key={category.label}
            href={href}
            className={cn(
              'rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60',
              isActive && 'border-accent/50 bg-accent/20 text-white',
            )}
          >
            {category.label}
          </Link>
        );
      })}
    </div>
  );
}
