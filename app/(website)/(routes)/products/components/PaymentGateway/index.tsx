import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const PaymentGateway = () => {
  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 pt-24'>
      {/* flex flex-col lg:grid lg:grid-cols-2 gap-4 pt-24 */}
      <motion.div
        className='py-12  lg:relative lg:bottom-16'
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
      >
        <Image 
            className='' 
            src='/images/payment gateway.png'
            width={450} 
            height={450}
            alt='PG Logo'
          ></Image>
      </motion.div>
    {/* <div className='flex flex-col justify-center pb-12 ml-7'> */}
      <motion.div
        className='flex flex-col justify-center pb-4 lg:pb-12 ml-7'
        variants={fadeIn('up', 0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
      >
        <div className='mb-4'>
          <h4 className='font-bold text-2xl text-center'>
            <AnimatedTextWord text='Payment Gateway'  />
          </h4>
        </div>
        <p>Experience seamless transactions with our cutting-edge payment gateway. Designed for efficiency and security, our platform ensures fast, reliable payments for your business. Enjoy easy integration all backed by 24/7 customer service. Elevate your business with our trusted payment solution and offer your customers a smooth, hassle-free payment experience.</p>
      </motion.div>
    {/* </div> */}
    </div>
  )
}

export default PaymentGateway