import AnimatedTextWord from '@/components/AnimatedTextWord'
import { Card } from '@/components/ui/card'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import React from 'react'

const MakeItSimple = () => {
  return (
    <div className='flex flex-col justify-center dark:pt-8 px-8 lg:pt-40 darklg:pt-40 gap-4 dark:bg-inherit bg-[#f2d2ff xl:min-h-screen my- text-center  -24'>
      <h2 className="text-[28px]/[31px] lg:text-[50px]/[60px] md:text-4xl font-bold mb-8">
        <AnimatedTextWord text='We make it simple for ' />
        <AnimatedTextWord text='entrepreneurs to get paid' />
      </h2>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-rows-3 gap-4">
        {/* The problem */}
        <motion.div
            className=''
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            exit="hidden"
          >
            <Card className=" bg-[#922790] p-6 rounded-3xl flex flex-col justify-center items-center shadow-lg min-h-[400px] mb:8">
              <h3 className="text-2xl font-bold text  text-bo mb-4">The Problem</h3>
              <p className="text-md">
                It's too hard for entrepreneurs to access card payment tools. How do you grow if you can't get paid?
              </p>
            </Card>
        </motion.div>
        {/* The idea */}
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            exit="hidden"
          >
            <Card className="bg-[#922790] p-6 rounded-3xl flex flex-col justify-center items-center shadow-lg min-h-[400px]">
              <h3 className="text-2xl font-bold  mb-4">The Idea</h3>
              <p className="text-md ">
                Simplifying the payment process for everyone, Digital PayGo empowers businesses in Zambia.
              </p>
            </Card> 
        </motion.div>
        {/* The outcome */}
        <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <Card className="bg-[#922790] p-6 rounded-3xl flex flex-col justify-center items-center shadow-lg min-h-[400px]">
              <h3 className="text-2xl font-bold  mb-4">The Outcome</h3>
              <p className="text-md ">
                Entrepreneurs thrive with our easy-to-use, secure payment solutions, increasing their potential for growth.
              </p>
            </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default MakeItSimple