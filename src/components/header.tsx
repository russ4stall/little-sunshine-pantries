import { Link } from 'gatsby';
import React from 'react';

import wordMark from '@/images/word_mark.svg';

const Header = () => {
  return (
    <header className="bg-satin-linen-200">
      <div
        className="mx-auto"
      >
        <nav className="flex flex-col items-center justify-between sm:flex-row sm:px-16 sm:py-8">
          <Link className="h-auto w-36 text-center text-4xl font-bold" to="/">
            <img alt="Little Sunshine Pantries" src={wordMark} />
          </Link>
          <ul className="grid list-none auto-cols-max grid-flow-col items-center gap-6">
            <li
              className="border-b-2 border-calypso-800 py-2 text-calypso-800 transition-colors hover:text-calypso-800"
            >
              <Link to="/">About</Link>
            </li>
            <li className="py-2 transition-colors hover:text-calypso-800">
              <Link to="/support">Support</Link>
            </li>
            <li className="py-2 transition-colors hover:text-calypso-800">
              <Link to="/find-food">Find Food Now</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
