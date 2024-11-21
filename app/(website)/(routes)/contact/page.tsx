'use client'

import React, { useState } from 'react'
import Address from './components/Address'
import Contacts from './components/Contacts'
import Heading from './components/Heading'

const Page = () => {
  
    return (
      <main className="flex flex-col items-cente -24">
        <section className='bg-[#FDF4F5] dark:bg-inherit'>
          <Heading />
        </section>
        <section className=''>
          <Contacts />
        </section>
        <section className='bg-[#E1AFD1] dark:bg-inherit'>
          <Address />
        </section> 
      </main>
    )
}

export default Page