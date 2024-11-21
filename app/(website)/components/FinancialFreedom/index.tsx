import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FinancialFreedom = () => {
  return (
    <>
      <div className='flex items-start px-16 justify-center flex-col gap-4 lg:grid lg:grid-cols-2'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <motion.div 
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          ><p>Empower</p></motion.div>
          <div>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className='text-[28px]/[31px] font-bold w-full'
            >
              Unlock Financial Freedom with DSSL payments
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn('right', 0.35)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <p>DSSL's mobile payment solutions offer seamless transactions for both inmotion.dividuals and businesses, enhancing convenience and accessibility. Experience faster payments, lower fees, and a user-friendly interface that empowers you to manage your finances effortlessly.</p>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.45)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Button className="text-current hover:bg-gray-600 text-1xl rounded" variant={'outline'}>
              <Link href={'/products'} className='flex flex-row'>
                Learn more
              </Link>
            </Button>
            <Button variant='link'>
              <Link href={'/contact'} className='flex flex-row'>
                Sign Up
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <Image 
            src='images/landing-page/undraw_freelancer_re_irh4.svg' 
            alt='Free svg' 
            width={400} 
            height={350}
          >
          </Image>
        </motion.div>
      </div>
    </>
  )
}

export default FinancialFreedom