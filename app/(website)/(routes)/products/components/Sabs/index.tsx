import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Sabs = () => {
  return (
    <div className='flex flex-col pt-24 lg:grid lg:grid-cols-2 lg:pt-16'>
      <motion.div
        className='flex flex-col justify-center pb-12'
        variants={fadeIn('up', 0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
      >
        <div className='mb-4'>
          <h4 className='font-bold text-2xl text-center'>
            <AnimatedTextWord text='Shared Agency banking (SABS)' />
          </h4>
        </div>
        <p>We are taking banking services closer to the people 
          while reducing administrative costs and fostering inclusion for Zambia’s underbanked majority.</p>
      </motion.div>
      <motion.div
        className='relative -top-16 lg:top-0 lg:pt-12'
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
        >
          <Image 
            src='/images/SABS Ppl Logo.png'
            alt='SABS Logo'
            width={450} 
            height={450}
          ></Image>
        </motion.div>
      {/* <div className='flex flex-col justify-center pb-12 ml-7'> */}
      {/* </div> */}
    </div>
  )
}

export default Sabs