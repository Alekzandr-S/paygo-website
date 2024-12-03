import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Background from '../../../services/components/Services/components/Background'

const Hero = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 xl:py-16'>
      <div className='flex flex-col items-start pt-4 lg:pt-16 gap-4'>
          <div className=''>
            <h3 className='font-bold text-3xl lg:leading-tight xl:text-4xl xl:leading-tight text-center lg:max-w-lg mx-auto '>
              <AnimatedTextWord className='flex flex-wrap md:hidden' text='Defining Our Culture: People and Vision in Harmony' />
              <AnimatedTextWord className='hidden md:block' text='Defining Our Culture:' />
              <span  className='text-[#852882] text-start'>
                <AnimatedTextWord className='hidden md:block' text='People and Vision' />
              </span >
                <AnimatedTextWord className='hidden md:block text-start' text='in Harmony' />
            </h3>
          </div>
          <div>
            <p className=' mb-2'>“Culture” is a very special piece that directly relates to our people and our collective vision of how we want to relate to each other and the world.</p>
            <p className=''>Our mission is deeply rooted in our culture, shaped collectively by every one of us.</p>
          </div>
        </div>
        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='lg:relative lg:left-16'>
          <Image 
            src='/images/paygo_vector_6.svg' 
            alt='Culture Illustration'
            width={450} 
            height={450} 
            className='xl:hidden'
          />
          <Image 
            src='/images/paygo_vector_6.svg' 
            alt='Culture Illustration'
            width={550} 
            height={550} 
            className='hidden xl:block'
          />
        </motion.div>
        <div className='absolute bottom-4 left-0 z-[-1] opacity-30 lg:opacity-100'>
          <Background />
        </div>
        <div className='absolute top-16 right-0 z-[-1] opacity-30 lg:opacity-100'>
          <Background />
        </div>
    </div>
  )
}

export default Hero