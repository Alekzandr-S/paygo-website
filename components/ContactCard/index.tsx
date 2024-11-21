import { motion } from 'framer-motion'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import { fadeIn } from '@/hooks/variants'
import { Card } from '../ui/card'

const ContactCard = () => {
  return (
    <>
      <Card className="flex flex-col gap-4 py-24 items-center rounded-3xl shadow-lg dark:bg-background bg-slate-200 w-[500px] h-[450px]">
          {/* <h2 className="text-3xl font-bold text-center mb-4">Vision and Strategy</h2> */}
          <motion.div
            className=''
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <h3 className='text-3xl w-96 font-bold mb-2'>
              Unlock the full potential of your business with Digital Paygo.
            </h3>
          </motion.div>
          <motion.div
            className=''
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <p className='w-96 mb-2'> Contact us today to learn more and take the first step toward strealined payment processing.</p>
          </motion.div>
          <motion.div
            className=''
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
            <Button className=" bg-[#852882] text-white hover:bg-gray-600 text-1xl rounded" >
              <Link href={'/contact'} className='flex flex-row'>
                  <PhoneCall className="w-5 h-5 mr-2" />
                  More information?
              </Link>
            </Button>
          </motion.div>
        </Card>
    </>
  )
}

export default ContactCard