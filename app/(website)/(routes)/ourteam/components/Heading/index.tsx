import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import React from 'react'

const Heading = () => {
  return (
    <div className='flex flex-col items-center px-24 pb-16 lg:pb-32 xl:py-24'>
      <div className='flex justify-center items-center pt-40 lg:pt-0 lg:mt-16'>
        <h2 className="font-bold text-4xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center lg:max-w-lg mx-auto ">
          <AnimatedTextWord text='We are Problem solvers, Innovative thinkers' />
        </h2>
      </div>
    </div>
  )
}

export default Heading