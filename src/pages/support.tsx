import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/button';
import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import donationsTruck from '@/images/donations-truck.jpg';
import orangeBagLogo from '@/images/orange-bag-logo@4x.png';
import pantry from '@/images/pantry@4x.png';
import smilingPantry from '@/images/smiling-pantry@4x.png';

const Support = () => {
  return (
    <Layout>
      <section className="bg-mine-shaft-950 py-20">
        <div className="container mx-auto flex max-w-7xl flex-col gap-20 px-4 pb-10 pt-20 sm:px-6 lg:px-8">
          <h1 className="text-center text-5xl font-extrabold text-satin-linen-200 sm:leading-none lg:text-6xl">
            Food insecurity is multi-faceted.
            <br />
            <em className="relative inline-flex items-end not-italic">
              <span>Our solutions need to be, too.</span>
              <svg className="absolute -bottom-6" viewBox="0 0 557.65 13.42" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-pizazz-600 stroke-pizazz-600 stroke-2"
                  d="M557.65,0C371.77,5.83,185.88,10.31,0,13.42"
                />
              </svg>
            </em>
          </h1>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-10">
              <h2 className="text-4xl font-extrabold text-satin-linen-200">
                So we’re creating
                <br />
                Tallahassee’s first
                <br />
                <em className="relative z-10 inline-flex items-center justify-center not-italic">
                  <span className="z-10">free grocery store</span>
                  <svg className="absolute -inset-1 z-0" viewBox="0 0 829.57 172.29" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      className="fill-transparent stroke-pizazz-600 stroke-[4]"
                      d="M759.29,23.53S323.35-27.79,95.93,28.04c-227.42,55.82,19.64,128.18,98.2,134.39,78.56,6.2,509.56-15.64,580.96-38.25,62.02-19.64,69.26-55.82,20.67-75.46-35.19-14.22-307.02-35.15-510.66-29.98S6,46.64,16.33,85.92s377.31,137.49,626.44,47.55"
                      initial={{ pathLength: 0, opacity: 0 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                      viewport={{ once: true }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                    />
                  </svg>
                </em>
              </h2>
              <div className="flex items-center gap-10">
                <Button color="calypso" href="mailto:littlesunshinepantries@gmail.com?subject=I'd like to learn more about the free grocery store!">Get In Touch</Button>
              </div>
            </div>
            <div className="-mb-12 flex flex-col items-center justify-center">
              <img
                alt="Little Sunshine Pantries bag of oranges logo"
                className="w-full max-w-xs sm:max-w-sm"
                src={orangeBagLogo}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse bg-calypso-600 lg:max-h-[50rem] lg:flex-row">
        <div className="mx-auto flex max-w-xl flex-col justify-center px-4 py-20 sm:px-6 lg:flex-[0_0_50%] lg:px-8">
          <h2 className="text-8xl font-extrabold text-satin-linen-200">
            Food
            <br />
            pantries
          </h2>
          <div>
            <p className="my-8 font-semibold text-mine-shaft-950">
              Since 2022, we’ve been creating direct access to food and other essentials for those in Tallahassee who
              need it the most by regularly stocking
              {' '}
              <em className="relative inline-flex items-center justify-center not-italic">
                <span className="z-10">19 pantries.</span>
                <motion.svg
                  className="absolute inset-0 z-0"
                  viewBox="0 0 163.38 51.61"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    animate={{ pathLength: 1, opacity: 1 }}
                    className="fill-transparent stroke-satin-linen-200 stroke-2"
                    d="M140.66,3.91S27.1-5.68,6.41,13.06C-14.28,31.8,27.05,45.8,85.71,47.8c58.66,2,76.36-8.65,76.67-21.33.54-22.18-55.55-24.82-98.11-22.08S6.62,12.9,9.17,27.02c2.55,14.12,36.16,24.89,96.1,23.46,59.23-1.41,58.71-29.07,45.8-35.12C131.68,6.25,67.3-15.01,5.59,22.11"
                    initial={{ pathLength: 0, opacity: 0 }}
                    strokeDasharray="0 1"
                    strokeLinecap="round"
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.svg>
              </em>
            </p>
            <p className="my-8 font-semibold text-mine-shaft-950">
              We use the money you donate to purchase
              <br />
              <em className="relative inline-flex items-end justify-end not-italic">
                <span className="z-10">1food, hygiene supplies, and bus passes</span>
                <motion.svg
                  className="absolute -bottom-2 z-0"
                  viewBox="0 0 466.66 13.51"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    animate={{ pathLength: 1, opacity: 1 }}
                    className="fill-transparent stroke-satin-linen-200 stroke-2"
                    d="M465.66,1.03S170.44-.12,1,12.51c0,0,318.77-11.49,462.94-4.02,0,0-240.08,1.15-322.79,3.45"
                    initial={{ pathLength: 0, opacity: 0 }}
                    strokeDasharray="0 1"
                    strokeLinecap="round"
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.svg>
              </em>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button color="satin-linen" href="https://www.paypal.com/donate/?hosted_button_id=Z9V9GXBFBSRJJ">PayPal</Button>
            <Button color="satin-linen" href="https://account.venmo.com/u/sunshine_pantries">Venmo</Button>
            <Button color="satin-linen" href="https://www.amazon.com/hz/wishlist/ls/2JR201AT70B6Q/ref=hz_ls_biz_ex"><span className="whitespace-nowrap">Amazon Wishlist</span></Button>
          </div>
        </div>
        <div className="lg:flex-[0_0_50%]">
          <img alt="A Little Sunshine Pantry" className="size-full object-cover" src={pantry} />
        </div>
      </section>
      <section className="flex flex-col bg-satin-linen-200 lg:max-h-[50rem] lg:flex-row">
        <div className="lg:flex-[0_0_50%]">
          <img alt="truck full of donations" className="size-full object-cover" src={donationsTruck} />
        </div>
        <div className="mx-auto flex max-w-xl flex-col justify-center px-4 py-20 sm:px-6 lg:flex-[0_0_50%] lg:px-8">
          <div className="relative">
            <img
              alt="smiling pantry illustration"
              className="mb-10 h-auto w-40 md:absolute md:-right-10 md:-top-5 md:mb-0"
              src={smilingPantry}
            />
            <h2 className="relative text-8xl font-extrabold text-pizazz-600">
              <span className="relative">
                Want to
                <br />
                become a
                <br />
                partner?
              </span>
            </h2>
          </div>
          <div>
            <p className="my-8 font-semibold text-mine-shaft-950">
              As a partner, you can adopt your very own pantry and help us keep it filled with weekly donations of the essentials we stock them with.
            </p>
            <p className="my-8 font-semibold text-mine-shaft-950">
              Who can become a partner? Individuals! Organizations! Schools! Collectives! Businesses! YOU!
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button color="pizazz" href="mailto:littlesunshinepantries@gmail.com?subject=I'd like to partner with you!&body=Hello, I'd like to become a partner by...">Get Started</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => {
  return (
    <Seo description="Learn more about how you can support Little Sunshine Pantries." title="Support" />
  );
};

export default Support;
