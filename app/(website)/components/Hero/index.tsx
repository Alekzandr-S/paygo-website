import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from '@/hooks/variants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';


const HeroSection = () => {
  return (
      <div className=" flex flex-wrap w-full lg:px-24 w-ful p-8 pt-0 flex-wra">
        <div className="flex-1 flex flex-col w-full lg:w-1/2 justify-center">
            <motion.h2
                className='text-red-500 hover:text-red-700 pt-8 lg:pt-0 underline text-5xl font-bold leading-snug tracking-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight'
            >
                <Link href={'/jobs'}>
                    We're Hiring!
                </Link>
            </motion.h2>
            <motion.h2
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='text-4xl font-bold pt-8 leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight'>
                Innovation, Simplicity <br />
                <span className='text-[#922790] '>
                    Financial Inclusion
                </span>
            </motion.h2>
            <motion.p
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='max-w-full py-5 text-1xl leading-normal lg:text-xl xl:text-2xl'>
                Promoting financial inclusion through innovative and simple digital solutions in an interoperable digital environment.
            </motion.p>
            <motion.div
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Button className=" bg-[#852882] text-white hover:bg-gray-600 text-1xl rounded" >
                    <Link href={'/contact'} className='flex flex-row'>
                        <PhoneCall className="w-5 h-5 mr-2" />
                        More information?
                    </Link>
                </Button>
            </motion.div>
        </div>
        <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
                <Image
                    src={'/images/paygo_vector_2.png'}
                    width="616"
                    height="617"
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                />
            </div>
        </motion.div>
    </div>
  )
}

export default HeroSection