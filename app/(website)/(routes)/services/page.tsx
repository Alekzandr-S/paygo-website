'use client'

import React from 'react'
import Heading from './components/Heading'
import Services from './components/Services'
import CTA from './components/CTA'

const Page = () => {
    return (
        <main className="flex flex-col items-center  pt-24">
            <section className=''>
              <Heading />
            </section>
            <section className=''>
              <Services />
            </section>
            <section >
              <CTA />
            </section>
        </main>
    )
}

export default Page