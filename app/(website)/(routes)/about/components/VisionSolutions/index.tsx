import AnimatedTextWord from '@/components/AnimatedTextWord'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import React from 'react'

const VisionSolutions = () => {
  return (
    <div className='px-8 py-24 grid lg:grid-rows-2 sm:grid-rows-2 lg:gap- gap-16'>
      {/* Vision and Strategy */}
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-4"><AnimatedTextWord text='Vision and Strategy' /></h2>
        <motion.div
            className=''
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <p className="text-lg text-center">
              Established in 2019, our vision is to become the leading digital shared payment service provider in Zambia by 2025.
            </p>
          </motion.div>
      </div>
      {/* Solutions and Services */}
      <div className=" ">
        <h2 className="text-3xl font-bold text-center mb-4"><AnimatedTextWord text='Our Solutions' /></h2>
        <motion.div
            className=''
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          > 
            <p className="text-lg text-center">
              Digital PayGo offers a wide range of solutions, including merchant mobile payments, mobile applications.
            </p>
          </motion.div>
      </div>
    </div>
  )
}

export default VisionSolutions