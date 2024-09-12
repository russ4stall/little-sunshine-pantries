import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { Link } from '@/components/link';

const styles = {
  base: [
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded border text-base/6 tracking-widest font-semibold',
    'px-5 py-3',
    'focus:outline-none data-[focus]:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500',
    'disabled:opacity-50'
  ],
  solid: [
    'border-transparent bg-[--btn-border]',
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg]',
    'after:absolute after:inset-0 after:-z-10',
    'after:active:bg-[--btn-hover-overlay] after:hover:bg-[--btn-hover-overlay]',
    'hover:-translate-y-1 transition-all'
  ],
  colors: {
    pizazz: [
      'text-mine-shaft-950 [--btn-bg:theme(colors.pizazz.600)] [--btn-border:theme(colors.pizazz.600/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
      'active:[--btn-icon:theme(colors.pizazz.600)] hover:[--btn-icon:theme(colors.pizazz.500)]'
    ]
  }
};

type ButtonProps = (
  | { color?: keyof typeof styles.colors; }
) & { className?: string; children: React.ReactNode; } & (
  | Omit<HTMLButtonElement, 'as' | 'className'>
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>
);

export const Button = forwardRef((
  { color = 'pizazz', children, className, ...props }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  const classes = clsx(
    styles.base,
    styles.solid,
    styles.colors[color],
    className
  );

  return 'href' in props
    ? <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>{children}</Link>
    : <button {...props as object} className={clsx(classes, 'cursor-default')} ref={ref}>{children}</button>;
});
