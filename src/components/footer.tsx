import React from 'react';

import bagOfOranges from '@/images/brand-bag-of-oranges.png';
import FacebookIcon from '@/images/facebook-icon.inline.svg';
import InstagramIcon from '@/images/instagram-icon.inline.svg';
import IntwLogo from '@/images/intw-logo.inline.svg';
import SptLogo from '@/images/spt-logo.inline.svg';
import SptWordMark from '@/images/spt-word-mark.inline.svg';

const Footer = () => {
  return (
    <footer className="bg-mine-shaft-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-20">
          <div className="flex shrink-0 justify-center md:-mt-28 md:justify-start">
            <img
              alt="Little Sunshine Pantries bag of oranges brand"
              className="w-36 sm:w-48 md:w-72 lg:w-96"
              src={bagOfOranges}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center gap-5 md:justify-start">
              {/* TODO: Add Facebook link */}
              <a className="block text-calypso-600 transition-all hover:-translate-y-1 hover:text-calypso-500" href="/">
                <FacebookIcon className="size-10" />
              </a>
              {/* TODO: Add Instagram link */}
              <a className="block text-calypso-600 transition-all hover:-translate-y-1 hover:text-calypso-500" href="/">
                <InstagramIcon className="size-10" />
              </a>
            </div>
            <div className="flex-col text-center md:text-left">
              <p className="text-base/6 text-calypso-600">
                contact: littlesunshinepantries@gmail.com
              </p>
              <p className="text-calypso-600">
                © 2021–2024 Little Sunshine Pantries
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a className="flex w-60 space-x-4 rounded p-2 text-satin-linen-200 hover:bg-mine-shaft-900" href="https://slashpine.tech" target="_blank">
                <SptLogo className="w-10" />
                <span className="flex-col">
                  <span className="block">Developed By</span>
                  <SptWordMark className="w-40" />
                </span>
              </a>
              <a className="flex w-60 space-x-4 rounded p-2 text-satin-linen-200 hover:bg-mine-shaft-900" href="https://carlyberry.design">
                <IntwLogo className="w-10" />
                <span className="flex-col">
                  <span className="block">Designed By</span>
                  <span className="uppercase tracking-widest">Carly Berry</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
