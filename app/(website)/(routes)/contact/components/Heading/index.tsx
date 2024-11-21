import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ContanctSupportDialog from '../Contacts/components/ContactSupportModal'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SalesModal from '../Contacts/components/SalesModal'
import ContactModal from '../Contacts/components/ContactModal'

const Heading = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'sales' | 'support'>('sales');

  return (
    <div className='pt-32'>
      <div className='pt-8 py-16 lg:pt-0 lg:py-0'>
        <h2 className="font-bold text-4xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center lg:max-w-lg mx-auto ">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          > 
            Get in touch with </motion.div>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden">
              us
            </motion.div>
        </h2>
      </div>
      <div className='flex flex-col gap-8 lg:flex lg:flex-row lg:justify-center lg:gap-52 lg:mb-24 lg:pt-4'>
        <div className='grid grid-cols-1 gap-2 text-center sm:mb-12'>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <img className='w-24 h-24' src='images/paygo_vector_8.svg' alt='sales image'/>
          </motion.div>
          <motion.div
              className=''
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <h3 className='text-center text-2xl font-bold'>Sales</h3>
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              >
                <p className='text-center text-[13px]/[20px]'>Interested in our services? <br/> Get in touch with us.</p>
          </motion.div>
          <motion.div
            className='flex flex-wrap justify-center'
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            >
              <SalesModal/>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 gap-2 text-center sm:mb-12'>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <img src='images/paygo_vector_10.svg' className='w-24 h-24' />
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('center', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <h3 className='text-center text-2xl font-bold'>Support</h3>
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('center', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p className='text-center text-[13px]/[20px]'>Need help with your account?<br/>Contact our support team.</p>
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('center', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ContanctSupportDialog />
          </motion.div>
        </div>

        <div className='grid grid-cols-1 gap-2 text-center sm:mb-12'>
        <motion.div
              className='flex justify-center'
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <img src='images/paygo_vector_9.svg' className='w-24 h-24' />
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <h3 className='text-center text-2xl font-bold'>Careers</h3>
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p className='text-center text-[13px]/[20px]'>Want to join Digital Paygo?</p>
          </motion.div>
          <motion.div
              className='flex justify-center'
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Link href={'/jobs'}>
                <Button className='text-background font-bold text-2xl'>
                  <span className='underline'>View Careers </span> &#160; &#160; &rarr;
                </Button>
              </Link>
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} modalType={modalType} />
    </div>
  )
}

export default Heading