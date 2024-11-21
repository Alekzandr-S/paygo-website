import { Button } from '@/components/ui/button';
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-wrap w-full w-ful p-8 lg:px-24 lg:pb-16'> 
      <div className='flex-1 flex flex-col w-full lg:w-1/2 justify-center xl:gap-4'>
        <div className=''>
          <motion.h1
            variants={fadeIn('right', 0.2)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className=' text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight underline underline-offset-auto pt-16 lg:pt-0'
          >
            ABOUT US</motion.h1>
        </div>
        <div>
          <motion.p
            variants={fadeIn('right', 0.3)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className=' py-5 text-xl leading-normal lg:text-xl xl:text-2xl '
          >
            Digital Shared Services Limited, trading as Digital PayGo, is 
            
            <span className='text-[#852882]'> revolutionizing financial inclusivity </span> 
            in Zambia through 
            <span className='text-[#852882]'> innovative mobile payment solutions</span>...</motion.p>
        </div>
        <motion.div
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Button className=" bg-[#852882] text-white hover:bg-gray-600 text-1xl rounded" >
                    <Link href={'/contact'} className='flex flex-row'>
                        <PhoneCall className="w-5 h-5 mr-2" />
                        Get to Learn More
                    </Link>
                </Button>
            </motion.div>
      </div>
      <div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='xl:pt-8'
        >
          <div>
            <Image 
               src='/images/paygo_vector_3.svg'
               width="516"
              height="517"
               className=''
               alt="Hero Illustration"
               loading="eager"
               
            />
          </div>
        </motion.div>
      </div>    
      <div className="absolute dark:hidden -z-0 top-[1rem] right-0 sm:top-[65rem] md:top-[65rem] lg:top-5 lg:left-0 opacity-20 dark:opacity-95">
        <Image 
          src='/images/landing-page/blob-1.svg'
          alt='Blob'
          width={300}
          height={350}
        >
        </Image>
        </div> 
    </div>
  )
}

export default Hero