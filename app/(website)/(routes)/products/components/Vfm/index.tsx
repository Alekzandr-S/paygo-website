import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Vfm = () => {
  return (
    <div className='flex flex-col-reverse relative dark:-top-8 gap-24  dark:lg:top-0 lg:grid lg:grid-cols-2 xl:py-16'>
      <motion.div
        className='lg:relative lg:left-32'
        variants={fadeIn('up', 0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
        >
          <Image 
            src='/images/vfm.png' 
            className=''
            width={300} 
            height={300}
            alt='VFM Logo'
          ></Image>
        </motion.div>
      <div className='flex flex-col justify-center pb-12'>
        <motion.div
          className=''
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          >
            <div className='mb-4'>
              <h4 className='font-bold text-2xl'>
                <AnimatedTextWord text='Virtual Farmers Market (VFM)' />
              </h4>
            </div>
            <p>The MAANO Virtual Farmers Market (VFM) is a digital self-onboarding agriculture trading platform that 
              digitalizes the trading process for small holder farmers by providing easy market accessibility.
            </p>
          </motion.div>
      </div>
    </div>
  )
}

export default Vfm