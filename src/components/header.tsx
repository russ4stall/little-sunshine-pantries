import clsx from 'clsx';
import { GatsbyLinkProps, Link } from 'gatsby';
import React from 'react';

import wordMark from '@/images/word-mark.svg';

const navLinkStyles = {
  base: [
    'transition-colors hover:text-calypso-800',
    'aria-[current=page]:border-b-2 aria-[current=page]:border-calypso-800 aria-[current=page]:font-bold aria-[current=page]:text-calypso-800'
  ]
};


const NavLink = <TState, >({
  className,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>>) => {
  return (
    <Link
      {...props}
      className={clsx(navLinkStyles.base, className)}
    />);
};

const Header = () => {
  return (
    <header className="bg-satin-linen-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex items-center md:gap-x-12">
            <Link to="/">
              <img alt="Little Sunshine Pantries" className="h-auto w-36" src={wordMark} />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/">about</NavLink>
            <NavLink to="/support">support</NavLink>
            <NavLink to="/find-food">find food now</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
