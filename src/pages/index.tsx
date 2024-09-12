import { Link } from 'gatsby';
import React from 'react';

import { Button } from '@/components/button';
import { Heading } from '@/components/heading';
import Layout from '@/components/layout';
import ArrowUnderline from '@/images/arrow-underline.inline.svg';
import familyPhoto from '@/images/family-photo.jpg';
import FreeFoodUnderline from '@/images/free-food-underline.inline.svg';
import HeroCircle from '@/images/hero-circle.inline.svg';
import HeroUnderline from '@/images/hero-underline.inline.svg';
import orangeLogoMark from '@/images/orange-logo_mark@2x.png';
import personBaggingOranges from '@/images/person-bagging-oranges.jpg';
import PersonCarryingGroceriesIllustration from '@/images/person-carrying-groceries-illustration.inline.svg';
import PovertyPercentUnderline from '@/images/poverty-percent-underline.inline.svg';
import RocketIllustration from '@/images/rocket-illustration.inline.svg';
import SmilingHousesIllustration from '@/images/smiling-houses-illustration.inline.svg';
import StateCapital from '@/images/state-capital.inline.svg';
import sticker from '@/images/sticker.png';
import youngPersonHoldingOranges from '@/images/young-person-holding-oranges.jpg';
import { Seo } from '@/components/seo';

const HeroSection = () => {
  return (
    <section className="flex bg-satin-linen-200 px-7 py-10 pb-20 md:p-14 md:pb-28">
      <article className="container mx-auto">
        <Heading className="max-w-4xl" level={1}>
          Bringing joy through unconditional generosity and working to normalize giving from abundance.
        </Heading>
      </article>
    </section>
  );
};

const GroceryStoreSection = () => {
  return (
    <section className="flex flex-col bg-mine-shaft-950 md:flex-row">
      <aside className="w-full md:w-1/2">
        <img
          alt="Young person holding oranges"
          className="size-full object-cover"
          src={youngPersonHoldingOranges}
        />
      </aside>
      <article className="m-auto w-full flex-1 items-center justify-center p-14 md:w-1/2 md:p-20">
        <div className="flex justify-center">
          <StateCapital className="h-auto w-40" />
        </div>
        <Heading className="mb-16 mt-10 text-center text-satin-linen-200" level={3}>
          We're creating Tallahassee's first free grocery store
        </Heading>
        <div className="flex items-center justify-center">
          <Button href="/support">
            Learn More
          </Button>
        </div>
      </article>
    </section>
  );
};

const FoodDistributedSection = () => {
  return (
    <section className="flex flex-col bg-pizazz-600 md:flex-row">
      <article className="flex w-full flex-col items-center justify-center px-16 py-20 md:w-1/2 md:p-20">
        <Heading className="text-center" level={3}>
          <span className="mb-6 block">We distributed over</span>
          <span className="mb-6 block text-8xl text-satin-linen-200 sm:leading-[0.75] lg:text-9xl">
            9,497 pounds
          </span>
          <span className="block">of food in 2023</span>
        </Heading>
      </article>
      <aside className="w-full md:w-1/2">
        <img
          alt="Person bagging oranges"
          className="size-full object-cover"
          src={personBaggingOranges}
        />
      </aside>
    </section>
  );
};

const GetInvolvedSection = () => {
  return (
    <section className="flex bg-satin-linen-200">
      <article className="mx-auto flex-col px-16 py-20 md:p-20">
        <Heading className="text-center" level={3}>
          The 32304 zip code is home to <span className="text-calypso-600">3,713 children.</span>
        </Heading>
        <Heading className="max-w-3xl text-center" level={2}>
          48.7% of them experience poverty.
        </Heading>
        <div className="mt-10 flex items-center justify-center">
          <Button href="/support">
            Get Involved
          </Button>
        </div>
      </article>
    </section>
  );
};

const BusPassesSection = () => {
  return (
    <section className="flex bg-mine-shaft-950 px-16 py-20 md:p-20">
      <article className="mx-auto max-w-3xl flex-col">
        <Heading
          className="relative mb-6 block text-center text-8xl text-satin-linen-200 sm:leading-[0.75] lg:text-9xl"
          level={2}
        >
          73 bus passes
        </Heading>
        <Heading className="max-w-3xl text-center text-calypso-600" level={3}>
          were given to those needing transportation
        </Heading>
      </article>
    </section>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <div />
      {/*<HeroSection />*/}
      {/*<GroceryStoreSection />*/}
      {/*<GetInvolvedSection />*/}
      {/*<FoodDistributedSection />*/}
      {/*<BusPassesSection />*/}
      {/*<div className="flex bg-calypso-600">*/}
      {/*  <div className="w-[50vw]">*/}
      {/*    <img*/}
      {/*      alt="Photo of a family"*/}
      {/*      className="size-full object-cover"*/}
      {/*      src={familyPhoto}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="m-auto w-[50vw] flex-col items-center justify-center sm:max-w-xl sm:p-20">*/}
      {/*    <div className="mb-8 flex items-center justify-center">*/}
      {/*      <SmilingHousesIllustration />*/}
      {/*    </div>*/}
      {/*    <h2 className="text-center text-3xl font-bold">*/}
      {/*      <span className="mb-2 inline-block">*/}
      {/*        Delivered*/}
      {/*        <br />*/}
      {/*        semi-regularly to*/}
      {/*      </span>*/}
      {/*      <br />*/}
      {/*      <span className="mb-2 inline-block text-satin-linen-200 sm:text-9xl">*/}
      {/*        12*/}
      {/*      </span>*/}
      {/*      <br />*/}
      {/*      <span className="mb-6 inline-block">households</span>*/}
      {/*      <span className="relative block text-base font-normal">*/}
      {/*        and placed 2nd in the*/}
      {/*        <br />*/}
      {/*        GiveTLH awards.*/}
      {/*        <ArrowUnderline className="absolute -bottom-2 left-[24%] w-40" />*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="relative flex bg-satin-linen-200 p-36">*/}
      {/*  <div className="absolute -top-12 right-12">*/}
      {/*    <img alt="brand sticker" className="w-60" src={sticker} />*/}
      {/*  </div>*/}
      {/*  <div className="flex-col sm:max-w-lg">*/}
      {/*    <h2 className="mb-12 sm:text-6xl sm:leading-tight">*/}
      {/*      Check out our interactive map to locate*/}
      {/*      {' '}*/}
      {/*      <span className="relative">*/}
      {/*        free food*/}
      {/*        <FreeFoodUnderline className="absolute inset-x-0 bottom-0" />*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <div className="flex items-center justify-center">*/}
      {/*      <Link*/}
      {/*        className="*/}
      {/*            flex items-center justify-center*/}
      {/*            rounded bg-pizazz-600 px-5 py-3*/}
      {/*            font-normal uppercase tracking-widest transition-all*/}
      {/*            hover:-translate-y-1 hover:bg-pizazz-500 active:bg-pizazz-600*/}
      {/*          "*/}
      {/*        to="/support"*/}
      {/*      >*/}
      {/*        View Map*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Layout>
  );
};

export const Head = () => {
  return <Seo />;
};

export default IndexPage;
