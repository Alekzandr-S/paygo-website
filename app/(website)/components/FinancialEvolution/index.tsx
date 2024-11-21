import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const FinancialEvolution = () => {
  return (
    <div className='flex items-start px-8 justify-center flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-y-2'>
      <div className='w-[30rem] lg:pl-28'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className='text-[28px]/[36px] font-bold w-full'
        >
          Join the <span className='text-[#922790]'>Financial Revolution</span> Today
        </motion.h2>
      </div>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <p>
            Experience the future of finance with DSSL's innovative mobile payment solutions. Sign up now to unlock seamless transactions and financial inclusivity.
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.25)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className='flex gap-4'
        >
          <Button className="text-white dark:text-black bg hover:bg-gray-600 text-1xl rounded" variant={'default'}>
            <Link href={'/contact'} className='flex flex-row'>
              Sign Up
            </Link>
          </Button>
          <Button className="text-current hover:bg-gray-600 text-1xl rounded" variant={'outline'}>
            <Link href={'/products'} className='flex flex-row'>
              Learn More
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default FinancialEvolution