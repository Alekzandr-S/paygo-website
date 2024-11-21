'use client'

import React from 'react';
import Hero from './components/Hero';
import Why from './components/Why';
import MakeItSimple from './components/MakeItSimple';
import VisionSolutions from './components/VisionSolutions';

const Page: React.FC = () => {

    return (
      <div>
        <main className="flex min-h-screen flex-col gap-6 pt-8">
          <section className="bg-[#E1AFD1] dark:bg-inherit">
            <Hero />
          </section >
          {/* bg-[url('/images/Abstract_background.svg')] */}
          <section className="">
            <Why />
          </section>
          <section className="">
            <MakeItSimple />
          </section>
          <section className="b-[#E7F6FF ">
            <VisionSolutions />
          </section>
        </main>
      </div>
    )
  }
export default Page
