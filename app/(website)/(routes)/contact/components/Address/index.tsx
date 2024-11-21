import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Address = () => {
  return (
    <div className='flex flex-col py-24 px-16'>
      <div >
        <h2 className="font-bold text-3xl lg:leading-tight xl:text-4xl xl:leading-tight text-center lg:max-w-lg mx-auto">
          <AnimatedTextWord text='Visit our offices' />
        </h2>
      </div>
      <div>
        <div className='flex flex-col justif-start gap-4 ml-12 pt-8'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Image src='/images/contact-page/undraw_map_re_60yf.svg'
              alt='Map Illustration'
              width={80} 
              height={80} 
            />
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          ><h3 className='font-semibold text-xl'>Address</h3></motion.div>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          ><p className='font-bold`'>Lusaka</p></motion.div>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <p>Number 6 Nyati Close, Off Addis Ababa Drive, Rhodes Park Lusaka, Zambia</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Address