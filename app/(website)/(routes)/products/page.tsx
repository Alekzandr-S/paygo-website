'use client'

import React from 'react'
import Heading from './components/Heading'
import Mmp from './components/Mmp'
import PaymentGateway from './components/PaymentGateway'
import Vfm from './components/Vfm'
import Sabs from './components/Sabs'
import ContactCard from '@/components/ContactCard'
import CTA from '../services/components/CTA'

const Page = () => {
  return (
    <div className='flex flex-col items-center pt-24'>
      <section className='bg-[#f2d2ff w-full dark:bg-inherit  px-8'>
        <Heading />
      </section>
      <section className='bg-slate-200 dark:bg-inherit px-8'>
        <PaymentGateway />
      </section>
      <section className=' px-8'>
        <Mmp />
      </section>
      <section className='bg-[#FDF4F5] dark:bg-inherit px-8'>
        <Vfm />
      </section>
      <section className='gap-4 px-8'>
        <Sabs />
      </section>
      <section className=' flex justify-center'>
        <CTA />
      </section>
    </div>
  )
}

export default Page