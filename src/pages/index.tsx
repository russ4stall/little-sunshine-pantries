import { Link } from 'gatsby';
import React from 'react';

import Layout from '@/components/layout';
import ArrowUnderline from '@/images/arrow_underline.inline.svg';
import familyPhoto from '@/images/family_photo.jpg';
import FreeFoodUnderline from '@/images/free_food_underline.inline.svg';
import HeroCircle from '@/images/hero_circle.inline.svg';
import HeroUnderline from '@/images/hero_underline.inline.svg';
import orangeLogoMark from '@/images/orange_logo_mark@2x.png';
import personBaggingOranges from '@/images/person_bagging_oranges.jpg';
import PersonCarryingGroceriesIllustration from '@/images/person_carrying_groceries_illustration.inline.svg';
import PovertyPercentUnderline from '@/images/poverty_percent_underline.inline.svg';
import RocketIllustration from '@/images/rocket_illustration.inline.svg';
import SmilingHousesIllustration from '@/images/smiling_houses_illustration.inline.svg';
import StateCapital from '@/images/state_capital.inline.svg';
import sticker from '@/images/sticker.png';
import youngPersonHoldingOranges from '@/images/young_person_holding_oranges.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex bg-satin-linen-200 sm:px-14 sm:py-8 sm:pb-20">
        <div>
          <h1 className="sm:text-6xl sm:leading-tight">
            Bringing joy through
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">unconditional generosity and</span>
              <HeroCircle className="absolute inset-y-0 left-0 z-0 h-auto w-[30rem]" />
            </span>
            <br />
            working to normalize giving
            <br />
            <span className="inline-block">
              from abundance.
              <HeroUnderline />
            </span>
            <span className="-mt-2 inline-block align-top">
              <img alt="Orange logo mark" className="h-auto w-14" src={orangeLogoMark} />
            </span>
          </h1>
        </div>
      </div>
      <div className="flex bg-mine-shaft-950">
        <div className="w-[50vw]">
          <img
            alt="Young person holding oranges"
            className="size-full object-cover"
            src={youngPersonHoldingOranges}
          />
        </div>
        <div className="m-auto w-[50vw] flex-col items-center justify-center sm:max-w-xl sm:p-20">
          <div className="flex justify-center">
            <StateCapital className="h-auto w-40" />
          </div>
          <h2 className="mb-16 mt-10 text-center text-3xl font-bold text-satin-linen-200">
            We're creating Tallahassee's first free grocery store
          </h2>
          <div className="flex items-center justify-center">
            <Link
              className="
                flex items-center justify-center
                rounded bg-pizazz-600 px-5 py-3
                font-normal uppercase tracking-widest transition-all
                hover:-translate-y-1 hover:bg-pizazz-500 active:bg-pizazz-600
              "
              to="/support"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-satin-linen-200">
        <div className="mx-auto flex-col px-20 py-48">
          <h2 className="mb-10 text-center font-bold">
            <span className="mb-2 inline-block text-3xl">
              The 32304 zip code is home to
              {' '}
              <span className="text-calypso-600">3,713 children.</span>
            </span>
            <br />
            <span className="relative font-bold sm:text-7xl">
              <span className="relative">
                <span>48.7%</span>
                <PovertyPercentUnderline className="absolute inset-x-0 bottom-0" />
              </span>
              of them
              <br />
              experience poverty.
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <Link
              className="
                  flex items-center justify-center
                  rounded bg-pizazz-600 px-5 py-3
                  font-normal uppercase tracking-widest transition-all
                  hover:-translate-y-1 hover:bg-pizazz-500 active:bg-pizazz-600
                "
              to="/support"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex bg-pizazz-600">
        <PersonCarryingGroceriesIllustration className="absolute right-[44%] top-20 w-40" />
        <div className="m-auto w-[50vw] flex-col items-center justify-center sm:max-w-xl sm:p-20">
          <h2 className="text-center text-3xl font-bold">
            <span className="mb-6 inline-block">We distributed over</span>
            <br />
            <span className="mb-6 inline-block text-satin-linen-200 sm:text-9xl sm:leading-[0.75]">
              9,497
              <br />
              pounds
            </span>
            <br />
            <span>of food in 2023</span>
          </h2>
        </div>
        <div className="w-[50vw]">
          <img
            alt="Person bagging oranges"
            className="size-full object-cover"
            src={personBaggingOranges}
          />
        </div>
      </div>
      <div className="flex bg-mine-shaft-950">
        <div className="mx-auto flex-col px-20 py-48">
          <h2 className="relative text-center font-bold">
            <span className="mb-6 inline-block text-satin-linen-200 sm:text-9xl sm:leading-[0.75]">
              73 bus
              <br />
              passes
            </span>
            <br />
            <span className="text-3xl text-calypso-600">
              were given to those
              <br />
              needing transportation
            </span>
            <RocketIllustration className="absolute -left-56 bottom-16 w-64" />
          </h2>
        </div>
      </div>
      <div className="flex bg-calypso-600">
        <div className="w-[50vw]">
          <img
            alt="Photo of a family"
            className="size-full object-cover"
            src={familyPhoto}
          />
        </div>
        <div className="m-auto w-[50vw] flex-col items-center justify-center sm:max-w-xl sm:p-20">
          <div className="mb-8 flex items-center justify-center">
            <SmilingHousesIllustration />
          </div>
          <h2 className="text-center text-3xl font-bold">
            <span className="mb-2 inline-block">
              Delivered
              <br />
              semi-regularly to
            </span>
            <br />
            <span className="mb-2 inline-block text-satin-linen-200 sm:text-9xl">
              12
            </span>
            <br />
            <span className="mb-6 inline-block">households</span>
            <span className="relative block text-base font-normal">
              and placed 2nd in the
              <br />
              GiveTLH awards.
              <ArrowUnderline className="absolute -bottom-2 left-[24%] w-40" />
            </span>
          </h2>
        </div>
      </div>
      <div className="relative flex bg-satin-linen-200 p-36">
        <div className="absolute -top-12 right-12">
          <img alt="brand sticker" className="w-60" src={sticker} />
        </div>
        <div className="flex-col sm:max-w-lg">
          <h2 className="mb-12 sm:text-6xl sm:leading-tight">
            Check out our interactive map to locate
            {' '}
            <span className="relative">
              free food
              <FreeFoodUnderline className="absolute inset-x-0 bottom-0" />
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <Link
              className="
                  flex items-center justify-center
                  rounded bg-pizazz-600 px-5 py-3
                  font-normal uppercase tracking-widest transition-all
                  hover:-translate-y-1 hover:bg-pizazz-500 active:bg-pizazz-600
                "
              to="/support"
            >
              View Map
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
