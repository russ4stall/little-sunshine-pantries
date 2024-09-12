import clsx from 'clsx';
import React from 'react';

type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  level?: keyof typeof styles.level;
  as?: HeadingElementType;
} & React.ComponentPropsWithoutRef<HeadingElementType>;

const styles = {
  base: 'text-mineshaft-950',
  level: {
    1: 'font-semibold text-4xl leading-tight md:text-6xl md:leading-tight',
    2: 'font-bold text-6xl sm:text-7xl',
    3: 'text-3xl font-bold'
  }
};

export const Heading = ({ as, level = 1, className, ...props }: HeadingProps) => {
  const HeadingElement: HeadingElementType = as
    ? as
    : `h${level}`;

  return (
    <HeadingElement
      {...props}
      className={clsx(styles.base, styles.level[level], className)}
    />
  );
};
