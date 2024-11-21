import AnimatedTextWord from '@/components/AnimatedTextWord'
import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DiscoverInovativePaymentSolutions = () => {
  return (
    <div className='flex flex-col justify-center gap-6'>
      <div className='flex items-center flex-col lg:flex text-center pb-4'>
        <AnimatedTextWord text='Secure' />
        <h2 
          className='text-[28px]/[31px] font-bold '
        > 
          <AnimatedTextWord text='Discover Our Innovative Payment Solutions' />
          {/* <AnimatedTextWord text='' /> */}
        </h2>
        <motion.p 
          variants={fadeIn('center', 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='py-2 pt-4 text-1xl leading-normal items-center'>
          Experience seamless financial transactions with our cutting-edge technology. We prioritize your <br /> security and ease of use.
        </motion.p>
      </div>
      <div className='gap-y-6 pt-8 flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3'>
        <motion.div 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView='show'
          // while="show"
          exit="hidden"
          className='flex flex-col gap-2 items-center pt-4 text-center'>
          
          <Image
            className='pb-3'
            src='images/landing-page/undraw_security_re_a2rk.svg' 
            alt='Safe txn logo'
            width={120}
            height={120}
          >
          </Image>
          <div className='text-center'>
            <motion.h2 
              className='text-[24px]/[31px] font-bold'
            >
              Safe and Secure Transactions<br /> Every Time 
            </motion.h2>
            <p className='pt-3'>Your financial safety is our top priority.</p>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView='show'
          // while="show"
          exit="hidden"
          className='flex flex-col gap-2 items-center py-4 text-center '>
          
          <Image 
            className='pb-3' 
            src='images/landing-page/undraw_innovative_re_rr5i.svg' 
            alt='Safe txn logo'
            width={120}
            height={120}
          >
          </Image>          
          <div 
            className='text-center'>
            <h2 
              className='text-[24px]/[31px] font-bold'
            >
              Intuitive Interface for <br /> Effortless Navigation 
            </h2>
            <p className='pt-3'>Navigate with ease, no matter your <br /> experience level.</p>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView='show'
          // while="show"
          exit="hidden"
          className=''>
          
          <div className='flex flex-col gap-2 items-center py-4 text-center'>
            <Image
              className='pb-3' 
              src='images/landing-page/undraw_make_it_rain_re_w9pc.svg' 
              alt='Safe txn logo'
              width={120}
              height={120}
            >
            </Image>          
            <div className='text-center'>
              <motion.h2 
                className='text-[24px]/[31px] font-bold'
              >
                Payments Made Simple <br />and fast
              </motion.h2>
              <p className='pt-3'>Send and receive money across different <br /> platforms effortlessly.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute dark:hidden -z-0 top-[60rem] sm:top-[65rem] left-5 md:top-[65rem] lg:top-[40rem] opacity-20 dark:opacity-95">
        <Image 
          src='/images/landing-page/blob-1.svg'
          alt='Blob'
          width={300}
          height={350}
        >
        </Image>
        </div> 
        <motion.div 
          variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          className='flex flex-row justify-center py-4'>
          <Button className="text-current hover:bg-gray-600 text-1xl rounded" variant={'outline'}>
            <Link href={'/products'} className='flex flex-row'>
              Learn more
            </Link>
          </Button>          
        </motion.div>
          
      </div>
  )
}

export default DiscoverInovativePaymentSolutions