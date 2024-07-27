import React from 'react';

import bagOfOranges from '@/images/brand_bag_of_oranges.png';
import FacebookIcon from '@/images/facebook_icon.inline.svg';
import InstagramIcon from '@/images/instagram_icon.inline.svg';
import SptWordMark from '@/images/spt_word_mark.inline.svg';
import SptLogo from '@/images/spt_logo.inline.svg';
import IntwLogo from '@/images/intw_logo.inline.svg';

const Footer = () => {
  return (
    <footer className="bg-mine-shaft-950">
      <div className="mx-auto px-20 py-16">
        <div className="flex items-center justify-between">
          <img
            alt="Little Sunshine Pantries bag of oranges brand"
            className="z-10 -mt-28 h-auto w-96"
            src={bagOfOranges}
          />
          <div className="flex-col">
            <div className="flex gap-5">
              <a className="block text-calypso-600 transition-all hover:-translate-y-1 hover:text-calypso-500" href="/">
                <FacebookIcon className="size-10" />
              </a>
              <a className="block text-calypso-600 transition-all hover:-translate-y-1 hover:text-calypso-500" href="/">
                <InstagramIcon className="size-10" />
              </a>
            </div>
            <div className="my-6 flex-col space-y-1">
              <p className="text-calypso-600">
                contact: littlesunshinepantries@gmail.com
              </p>
              <p className="text-calypso-600">
                © 2021–2024 Little Sunshine Pantries
              </p>
            </div>
            <div className="flex space-x-8">
              <a className="flex space-x-4 rounded p-2 text-satin-linen-200 hover:bg-mine-shaft-900" href="/">
                <SptLogo className="w-10" />
                <span className="flex-col">
                  <span className="block">Developed By</span>
                  <SptWordMark className="w-40" />
                </span>
              </a>
              <a className="flex space-x-4 rounded p-2 text-satin-linen-200 hover:bg-mine-shaft-900" href="/">
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
