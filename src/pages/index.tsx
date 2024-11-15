import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/button';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import babyFruit from '@/images/baby-holding-fruit.jpg';
import jackSparrow from '@/images/jack-sparrow.jpg';
import storeFrontWorker from '@/images/storefront-worker.jpg';
import orangeLogoMark from '@/images/orange-logo_mark@2x.png';
import PersonCarryingGroceriesSvg from '@/images/person-carrying-groceries-illustration.inline.svg';
import Rocket from '@/images/rocket-illustration.inline.svg';
import StateCapitalSvg from '@/images/state-capital.inline.svg';
import SmilingHousesIllustration from '@/images/smiling-houses-illustration.inline.svg';
import sticker from '@/images/sticker.png';

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
            src={storeFrontWorker}
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
              <Button href="mailto:littlesunshinepantries@gmail.com?subject=I'd like to learn more about the free grocery store!">Learn More</Button>
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
            <Button href="/support">Get Involved</Button>
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
              <span className="block mb-8">We distributed over</span>
              <em className="text-7xl/[0.75] font-extrabold not-italic text-satin-linen-200 sm:text-9xl/[0.75]">
                9,497
                <br />
                pounds
              </em>
              <span className="block mt-6">of food in 2023</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-[0_0_50%] overflow-hidden">
          <div className="aspect-h-1 aspect-w-1 size-full">
            <img
              alt="young person holding vegetables"
              className="size-full object-cover object-center"
              src={jackSparrow}
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
      <section className="flex flex-col bg-calypso-600 lg:max-h-[50rem] lg:flex-row">
        <div className="flex items-center justify-center lg:flex-[0_0_50%]">
          <img
            alt="family on couch taking a candid family photo"
            className="size-full object-cover"
            src={babyFruit}
          />
        </div>
        <div className="flex items-center justify-center lg:flex-[0_0_50%] ">
          <div className="flex max-w-lg flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-64">
              <SmilingHousesIllustration className="w-full" />
            </div>
            <h3 className="text-center text-3xl font-extrabold text-mine-shaft-950">
              <span className="mb-8 block">delivered semi-regularly to</span>
              <em className="text-7xl/[0.75] font-extrabold not-italic text-satin-linen-200 sm:text-9xl/[0.75]">
                12
              </em>
              <span className="mt-6 block">households</span>
            </h3>
            <p className="text-center font-semibold mx-auto">
              <span className="block">and placed 2nd in the</span>
              <em className="relative not-italic flex flex-col items-center justify-end">
                <svg className="absolute -bottom-3 -left-16 fill-satin-linen-200" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 294.44 99.92">
                  <path
                    d="M293.16,96.5c-12.92-2.64-25.96-4.66-39.02-6.54-12.92-1.86-25.88-3.46-38.87-4.72-26.02-2.51-52.24-3.61-78.36-2.38-7.37.35-14.73.87-22.08,1.59-7.27.71-14.72,1.5-21.83,3.24-1.25.31-1.01,2.34.31,2.27,6.45-.34,12.9-1.2,19.34-1.77,6.46-.57,12.92-1.06,19.4-1.38,12.96-.64,25.95-.76,38.91-.43,26.03.67,52,3.16,77.78,6.74,14.53,2.02,28.98,4.54,43.48,6.76.95.15,1.88-.24,2.16-1.23.25-.87-.3-1.97-1.23-2.16Z" />
                  <path
                    d="M80.05,79.2c-1.86-2.42-3.76-4.83-5.69-7.19-.97-1.18-2.01-2.3-3.03-3.43-.92-1.02-1.82-2.35-3.11-2.91-.35-.15-.66.09-.61.47.21,1.4,1.26,2.61,2.02,3.76.8,1.22,1.58,2.45,2.42,3.64.62.87,1.25,1.72,1.89,2.58-7.65.36-15.36-3.14-21.99-6.54-6.38-3.27-12.41-7.22-17.88-11.86-11.02-9.35-19.92-21.08-25.81-34.3C4.97,16.02,2.9,8.14.89.32.76-.17-.01-.07,0,.44c.08,3.78.57,7.38,1.46,11.05.89,3.66,2.1,7.25,3.49,10.74,2.77,6.96,6.32,13.58,10.64,19.7,8.62,12.2,20.05,22.63,33.4,29.45,3.85,1.97,7.85,3.68,11.97,5.01,4.63,1.49,9.47,2.46,14.24,1.4.39.52.79,1.04,1.19,1.56-2.24.98-4.48,1.98-6.7,3-1.38.63-2.75,1.27-4.11,1.93-1.27.61-2.86,1.22-3.78,2.32-.62.75-.28,2.16.87,2.09,1.45-.09,2.84-.9,4.11-1.53,1.42-.71,2.84-1.4,4.26-2.08,2.79-1.33,5.62-2.59,8.47-3.81.69-.3,1-1.48.54-2.07Z" />
                </svg>
                <span className="relative inline-block">GiveTLH awards.</span>
              </em>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-satin-linen-200 flex flex-col-reverse md:flex-row py-14 sm:py-20">
        <div className="relative mx-auto flex flex-col max-w-7xl gap-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl">
            <h2 className="text-5xl font-semibold sm:text-7xl">
              check out our interactive map to locate
              {' '}
              <em className="relative not-italic inline-flex flex-col items-center justify-end">
                <svg className="absolute -bottom-3 fill-calypso-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449.62 19.73">
                  <path
                    d="M446.41,10.83C389.61,3.56,331.13.56,272.79.07c-58.52-.49-116.98,1.53-174.88,6.08-16.03,1.26-31.97,2.78-47.95,4.18-7.86.69-15.73,1.3-23.62,1.83-3.95.27-7.92.51-11.89.7-2.14.1-4.28.21-6.42.35-2.68.17-4.28.89-6.35,1.71-2.14.85-2.33,2.38,0,3.2,1.47.52,3,1.17,4.74,1.43,1.89.28,4.25.15,6.2.13,3.66-.04,7.33-.16,10.98-.29,7.32-.26,14.61-.69,21.88-1.18,14.93-1.01,29.78-2.3,44.68-3.45,27.65-2.15,56.6-3.72,85.06-4.78,57.74-2.15,115.51-1.61,173.2.62,32.32,1.25,64.59,3.06,96.79,5,5.13.31,6.13-4.13,1.21-4.76Z"
                  />
                </svg>
                <span>free food</span>
              </em>
            </h2>
          </div>
          <div className="flex items-center justify-center">
              <Button href="/find-food">view map</Button>
          </div>
        </div>
        <div className="relative -mt-32 max-w-4xl mx-auto mr-10">
          <img className="w-48" src={sticker} alt="Little Sunshine Pantries sticker logo" />
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => {
  return <Seo />;
};

export default IndexPage;
