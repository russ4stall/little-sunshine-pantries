import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/button';
import { Heading } from '@/components/heading';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import childHolderCarrots from '@/images/child-holder-carrots.jpeg';
import youngPersonHoldingVegetables from '@/images/girl-with-oranges.jpeg';
import orangeLogoMark from '@/images/orange-logo_mark@2x.png';
import personBaggingOranges from '@/images/person-bagging-oranges.jpg';
import PersonCarryingGroceriesSvg from '@/images/person-carrying-groceries-illustration.inline.svg';
import Rocket from '@/images/rocket-illustration.inline.svg';
import StateCapitalSvg from '@/images/state-capital.inline.svg';

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
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <section className="bg-satin-linen-200 pb-14 pt-10 sm:pb-20 sm:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
              Bringing joy through
              {' '}
              <em className="relative inline-flex items-center justify-center not-italic">
                <motion.svg className="absolute inset-0" viewBox="0 0 943.08 147.29" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    className="fill-transparent stroke-pizazz-600 stroke-[4]"
                    d="M941.08,70.92s-98.61,36.17-305.15,37.19S23.39,144.56,3.15,84.82C-17.09,25.08,232.24,17.36,485.36,6.22s385.57-2.26,388.5,51.27c2.65,48.28-82.01,94.16-258.18,87.07S8.21,128.36,21.37,79.76C34.53,31.16,527.6-4.27,811.09,29.14"
                    initial={{ pathLength: 0, opacity: 0 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                  />
                </motion.svg>
                <span className="relative">unconditional</span>
              </em>
              {' '}
              generosity and
              working to normalize giving
              {' '}
              <em className="relative inline-flex items-end justify-center not-italic">
                <motion.svg
                  className="absolute -bottom-5"
                  viewBox="0 0 796.76 21.48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    className="fill-transparent stroke-pizazz-600 stroke-[4]"
                    d="M2,16.44s447.51-34.42,792.76,3.04"
                    initial={{ pathLength: 0, opacity: 0 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                  />
                </motion.svg>
                <span className="relative">
                  from abundance.
                  {' '}
                  <img
                    alt="Little Sunshine Pantries orange logo mark."
                    className="absolute -right-9 top-0 w-7 sm:-right-10 sm:w-9 md:-right-12 md:w-11 lg:w-12"
                    src={orangeLogoMark}
                  />
                </span>
              </em>
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-mine-shaft-950 lg:max-h-[50rem] lg:flex-row">
        <div className="flex items-center justify-center lg:flex-[0_0_50%]">
          <img
            alt="young person holding vegetables"
            className="size-full object-cover"
            src={youngPersonHoldingVegetables}
          />
        </div>
        <div className="flex items-center justify-center lg:flex-[0_0_50%] ">
          <div className="flex max-w-lg flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-52">
              <StateCapitalSvg className="w-full" />
            </div>
            <h3 className="text-center text-3xl font-extrabold text-satin-linen-200">
              We're creating Tallahassee's first free grocery store
            </h3>
            <div className="flex items-center justify-center">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-satin-linen-200 py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-center text-3xl font-extrabold">
              The 32304 zip code is home to
              {' '}
              <em className="not-italic text-calypso-600">3,713 children.</em>
            </h3>
            <h2 className="text-center text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
              <em className="relative inline-flex items-end justify-center not-italic">
                <motion.svg
                  className="absolute -bottom-2"
                  viewBox="0 0 403.34 34.58"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    className="fill-transparent stroke-calypso-600 stroke-[7]"
                    d="M3.92,23.71s-11.79,7.86,89.93-1.47c101.72-9.33,280.6,6.88,304.68,7.86S107.61,15.85,57.97,13.88s228.51-24.08,323.36,2.95c0,0-274.21,5.9-323.36,14.25"
                    initial={{ pathLength: 0, opacity: 0 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                  />
                </motion.svg>
                <span className="relative">48.7%</span>
              </em>
              {' '}
              of them experience poverty.
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <Button>Get Involved</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse bg-pizazz-600 lg:max-h-[50rem] lg:flex-row">
        <div className="relative flex flex-col items-center justify-center gap-10 py-20 lg:flex-[0_0_50%]">
          <div className="relative lg:absolute lg:-right-16 lg:top-10 lg:z-10">
            <PersonCarryingGroceriesSvg className="w-36" />
          </div>
          <div className="flex max-w-lg flex-col gap-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-3xl font-extrabold text-mine-shaft-950">
              We distributed over
              <br />
              <em className="text-7xl/[0.75] font-extrabold not-italic text-satin-linen-200 sm:text-9xl/[0.75]">
                9,497
                <br />
                pounds
              </em>
              <br />
              of food in 2023
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-[0_0_50%]">
          <div className="aspect-h-1 aspect-w-1 size-full">
            <img
              alt="young person holding vegetables"
              className="size-full object-cover object-center"
              src={childHolderCarrots}
            />
          </div>
        </div>
      </section>
      <section className="bg-mine-shaft-950 py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto flex max-w-2xl flex-col gap-4">
            <div className="flex items-center justify-center lg:absolute lg:-left-36 lg:top-10">
              <Rocket className="w-48" />
            </div>
            <h3 className="relative flex flex-col gap-2 text-center text-3xl font-extrabold text-calypso-600">
              <em className="text-7xl/[0.75] font-extrabold not-italic text-satin-linen-200 sm:text-9xl/[0.75]">
                73 bus
                <br />
                passes
              </em>
              <br />
              <span>
                were given to those
                <br />
                needing transportation
              </span>
            </h3>
          </div>
        </div>
      </section>
      {/* <HeroSection />*/}
      {/* <GroceryStoreSection />*/}
      {/* <GetInvolvedSection />*/}
      {/* <FoodDistributedSection />*/}
      {/* <BusPassesSection />*/}
      {/* <div className="flex bg-calypso-600">*/}
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
      {/* </div>*/}
      {/* <div className="relative flex bg-satin-linen-200 p-36">*/}
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
      {/* </div>*/}
    </Layout>
  );
};

export const Head = () => {
  return <Seo />;
};

export default IndexPage;
