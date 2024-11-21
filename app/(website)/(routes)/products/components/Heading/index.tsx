import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import React from 'react'

const Heading = () => {
  return (
    <div className='py-16 lg:my-4 lg:'>
      <h2 className="font-bold text-4xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center lg:max-w-lg mx-auto ">
        <AnimatedTextWord text='Innovative payment solutions for ' />
        <AnimatedTextWord text='your business' />
      </h2>
    </div>
  )
}

export default Heading