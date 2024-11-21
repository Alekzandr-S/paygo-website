  import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
  
  const Mmp = () => {
    return (
      <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
        <div className='flex flex-col pt-32'>
          <motion.div
            className=''
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <div className='pb-4'>
              <h4 className='font-bold text-2xl'>
                <AnimatedTextWord text='MMP' />
              </h4>
            </div>
            <p className=''>Our merchant payment solution (Mobile App and Web Portal) switches transactions seamlessly between Mobile Network Operators and other third-party providers. We have enhanced our merchant payments offering to cater for Mobile money on Point of Sale to solution for traditional merchants and Intergrated Point of Sale to enhance the small medium enterprises (SME) customer value proposition and supports the enablement of a digital first approach for merchant mobile payments. 
            </p>
          </motion.div>
        </div>
        <motion.div
            className='relative -top-16 lg:top-0'
            variants={fadeIn('up', 0.55)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <Image 
              className=' w-auto' 
              src='/images/Merchant App Logo Purple.png'
              alt='MMP Logo'
              width={450} height={450}
            ></Image>
          </motion.div>
      </div>
    )
  }
  
  export default Mmp