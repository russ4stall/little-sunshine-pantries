import { motion } from 'framer-motion';
import React from 'react';

import Layout from '@/components/layout';
import { Seo } from '@/components/seo';
import mascot from '@/images/little-sunshine-pantries-asset-mascot@4x.png';
import pantry from '@/images/pantry@4x.png';

const FindFood = () => {
  return (
    <Layout>
      <section className="container mx-auto grid max-w-7xl grid-cols-1 justify-center gap-14 px-4 pb-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex items-center justify-center">
          <img alt="A Little Sunshine Pantry" className="w-full max-w-3xl" src={pantry} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center font-semibold">
            Since 2022, we’ve been creating direct access to food and other essentials for those in Tallahassee who need
            it the most by regularly stocking
            <br />
            <em
              className="relative my-6 inline-flex items-center justify-center text-6xl font-extrabold not-italic sm:text-7xl"
            >
              <span className="z-10">19 Pantries</span>
              <svg className="absolute z-0" fill="none" viewBox="0 0 765.54 158.5" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  animate={{ pathLength: 1 }}
                  className="fill-transparent stroke-amber-500 stroke-[3]"
                  d="M764.52,88.01c-1.35-8.56-7.32-14.12-13.84-17.9-8.65-5.01-18.34-8.07-27.53-11.52-20.75-7.79-41.76-14.68-62.96-20.72-42.41-12.08-85.55-20.74-128.96-26.61C442.87-.7,353.56-1.12,264.81,4.48c-50.14,3.16-100.17,8.27-150.09,14.42-1.11.14-1.12,2.12,0,1.98C184.72,12.25,254.97,5.68,325.39,3.65c70.08-2.02,140.38.45,209.99,10.16,69.54,9.7,138.46,26.72,204.51,53.38,6.68,2.7,14.04,5.82,18.89,11.96,1.23,1.56,2.26,3.27,2.98,5.2.96,2.52,1.15,3.15-.81,4.72-3.63,2.91-7.68,5.34-11.58,7.77-14.86,9.3-30.6,16.68-46.73,22.67-33.69,12.51-68.99,19.42-104.07,24.57-74.14,10.88-149.38,12.19-224.04,11.25-38.14-.48-76.26-1.92-114.34-4.32-37.34-2.36-74.75-5.2-111.84-10.83-18.47-2.81-36.86-6.36-55.03-11.02-15.98-4.1-31.98-8.81-47.09-16.05-14.24-6.82-29.04-16.3-39.02-30-3.07-4.22-5.44-9.5-4.01-15.07,1.4-5.43,5.88-9.39,9.76-12.53,6.86-5.54,14.55-9.64,22.46-12.87,16.46-6.71,33.95-10.64,51.14-14.06,18.49-3.68,37.13-6.23,55.82-8.18,36.35-3.8,72.87-5.88,109.36-6.8,72.88-1.84,145.86,1.62,218.36,10.31,72.9,8.73,145.3,22.77,216.61,42.02,17.26,4.66,34.44,9.63,51.56,14.89,1.09.33,1.55-1.58.47-1.91-49.95-15.35-100.51-28.15-151.49-38.32-50.57-10.08-101.55-17.59-152.71-22.51-51.57-4.95-103.34-7.26-155.1-6.91-51.78.35-103.85,2.75-155.32,9.36-25.12,3.23-50.23,7.74-74.68,15.14-11.03,3.34-22.01,7.51-31.88,14.1C10.34,54.6-.02,62.13,1.08,73.15c1.04,10.43,10.87,18.81,17.68,24.65,8.41,7.21,17.77,12.85,27.48,17.45,22.17,10.49,46.18,16.29,69.73,21.16,51.52,10.66,104.11,14.3,156.34,17.32,53.73,3.1,107.54,4.29,161.33,3.56,52.86-.72,105.81-3,158.31-10.28,47.98-6.64,97.22-16.07,141.51-38.9,10.62-5.47,20.87-11.79,30.65-18.98.35-.26.47-.67.4-1.12Z"
                  initial={{ pathLength: 0 }}
                  strokeLinecap="round"
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                />
              </svg>
            </em>
          </h1>
          <h2 className="inline-flex flex-col items-center gap-2 text-xl font-extrabold text-amber-500">
            <span>see map</span>
            <svg className="w-2" fill="none" viewBox="0 0 17.83 88.27" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-amber-500"
                d="M17.41,68.12c-.53-.53-1.6-.63-2.12,0-3.99,4.85-7.99,9.7-11.98,14.55,0-.43-.02-.87-.02-1.3.27-.1.52-.3.72-.6,5.94-9.29,9.54-19.92,10.86-30.85,1.31-10.86.29-22.05-3.05-32.47C9.93,11.56,7.31,5.9,3.97.7c-1.04-1.62-3.63-.12-2.59,1.51,5.69,8.89,9.26,19.09,10.5,29.56,1.25,10.55.29,21.32-2.94,31.44-1.45,4.55-3.38,8.93-5.75,13.08-.07-3.69-.13-7.37-.2-11.06-.03-1.93-3.03-1.93-3,0l.39,21.52c.02,1.2,1.69,2.11,2.56,1.06,4.82-5.86,9.64-11.72,14.46-17.57.51-.62.61-1.51,0-2.12Z"
              />
            </svg>
          </h2>
        </div>
      </section>
      <section className="container mx-auto flex max-w-7xl items-end gap-14 px-4 pb-28 pt-10 sm:px-6 lg:px-24">
        <div className="relative w-full max-w-5xl overflow-hidden pt-[56.25%]">
          <iframe
            className="absolute inset-0 size-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/d/embed?mid=1eyqlWLBNSbgttezWEknxRtNImOabGsZU&ehbc=2E312F"
          />
        </div>
        <div className="hidden w-56 md:block">
          <img alt="Little Sunshine Pantries character" src={mascot} />
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => {
  return <Seo description="Locate nearby Pantries to access food now." title="Find Food" />;
};

export default FindFood;
