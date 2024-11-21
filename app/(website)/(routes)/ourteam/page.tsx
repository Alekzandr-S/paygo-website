'use client'

import React, { useRef } from 'react'
import Hero from './components/Hero'
import Heading from './components/Heading'
import Values from './components/Values'

const Page = () => {
  
  return (        
    <div className='flex flex-col mx-8'>
      <section className=''>
        <Heading />                          
      </section>                              
      <section className='px-8'>  
        <Hero />
      </section>
      <section className='dark:bg-background first-letter:bg-slate-400 '>
        <Values />
      </section>
    </div>
  )
}

export default Page

