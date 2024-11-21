import React from 'react'

import { Card } from '@/components/ui/card'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import AnimatedTextWord from '@/components/AnimatedTextWord'

const Heading = () => {
  return (
    <div className='pb-24 py-16 xl:py-32 '>
      <div>
        <h2 className="font-bold text-4xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center mb-8 w-full lg:max-w-lg mx-auto">
          <AnimatedTextWord text='We know your '/>
          <AnimatedTextWord text='industry '/>
        </h2>
      </div>
      <div> 
        <ul className='flex flex-rol flex-wrap justify-center items-center gap-4 lg:gap-'>
          <motion.li
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >  
            <Card className='rounded-2xl p-2'>
              <p className='text-1xl '>General</p>
            </Card>
          </motion.li>
          <motion.li
            variants={fadeIn('right', 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"  
          >
            <Card className='rounded-2xl p-2'>
              <p className='text-1xl '>Restaurant</p>
            </Card>
          </motion.li>
          <motion.li
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Card className='rounded-2xl p-2'>
              <p className='text-1xl '>Professional Services</p>
            </Card>
          </motion.li>
          <motion.li
            variants={fadeIn('left', 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Card className='rounded-2xl p-2'>
              <p className='text-1xl leading-normal xl:text-xl'>Beauty</p>
            </Card>
          </motion.li>
          <motion.li
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Card className='rounded-2xl p-2'>
              <p className='text-1xl leading-normal xl:text-xl'>Retail</p>
            </Card>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Heading