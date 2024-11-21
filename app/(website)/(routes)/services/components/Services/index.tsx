import React from 'react'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import { fadeIn } from '@/hooks/variants'
import AnimatedTextWord from '@/components/AnimatedTextWord'
import Image from 'next/image'
import Background from './components/Background'

const Services = () => {
  return (
    <div className='pb-16 lg:pb-24'>
      <div className='flex flex-col'>
        <div className='flex flex-col pt-4 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-16 bg-[#FDF4F5] dark:bg-inherit px-8 xl:py-8'>
          <div className='flex flex-col items-start'>
            <motion.div
              className=' lg:pt-16'
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
            >
            <div className='pb-4'>
              <h4 className='font-bold text-2xl'>
                <AnimatedTextWord text='Payment Aggregation' />
              </h4>
            </div>
              <p>At Digital Paygo, we understand the complexities and challenges businesses face in managing multiple payment channels and merchant accounts. That's why we're excited to offer our Payment Aggregation service, designed to simplify and enhance your payment processing 
              capabilities. Our service is tailored to empower businesses of all sizes, from startups to established enterprises, enabling them to accept a wide range of payment methods through a streamlined solutions.
              </p>
            </motion.div>
          </div>
          <motion.div
              className='pt-6 lg:pt-0'
              variants={fadeIn('up', 0.35)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
            >
              <Image src='images/business.svg' alt='Payment aggregation img' width={450} height={450}></Image>
          </motion.div>
        </div>
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 bg-[#E1AFD1] dark:bg-inherit px-8 py-16'>
          <motion.div
            className='pt-12 lg:pt-0'
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <Image src='/images/paygo_vector_1.png' alt='SABS img' width={450} height={450}></Image>
          </motion.div>
          <motion.div
            className='flex flex-col items-start lg:pt-16'
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <div className='pb-4'>
              <h4 className='font-bold text-2xl text-center'>
                <AnimatedTextWord text= 'Value Added Services (VAS) ' />
              </h4>
            </div>
            <p>Facilities for bill payments such as school fees, airtime, electricity, Pay TV, internet and water.</p>
          </motion.div>
        </div>
      </div>
      <div className='absolute bottom-4 left-0 z-[-1] opacity-30 lg:opacity-100'>
        <Background />
      </div>
      <div className='absolute top-16 right-0 z-[-1] opacity-30 lg:opacity-100'>
        <Background />
      </div>
    </div>
  )
}

export default Services