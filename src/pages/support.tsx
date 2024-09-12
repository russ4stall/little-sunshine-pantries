import React from 'react';

import Layout from '@/components/layout';
import SupportHeroUnderline from '@/images/support-hero-underline.inline.svg';
import { Seo } from '@/components/seo';

const Support = () => {
  return (
    <Layout>
      <div className="flex justify-center bg-mine-shaft-950 sm:px-14 sm:py-8">
        <h1 className="text-center text-satin-linen-200 sm:text-6xl sm:leading-none">
          Food insecurity is multi-faceted.
          <br />
          <span className="relative inline-block">
            Our solutions need to be, too.
            <SupportHeroUnderline className="text-pizazz-600" />
          </span>
        </h1>
        <div className="flex">
          <div className="flex">

          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => {
  return (
    <Seo />
  );
};

export default Support;
