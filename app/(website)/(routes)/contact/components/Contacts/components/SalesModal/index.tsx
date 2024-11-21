import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import AnimatedTextWord from '@/components/AnimatedTextWord'

const SalesModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-background font-bold text-2xl'>
          <span className='underline'>Contact Sales </span> &#160; &#160; &rarr;
        </Button> 
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-4 w-full lg:max-w-lg mx-auto">
              <AnimatedTextWord text="Let's Connect" />
            </h2>
            <p className="mb-4">Keen to chat? Catch us live during business hours (8am-5pm on weekdays)</p>
          </DialogTitle>
          <DialogDescription>
            <div className='flex justify-center py-2'>
              <a href="https://wa.me/+260762023355" target="_blank" rel="noopener noreferrer" className="bg-[#852882] text-background hover:bg-green-600 font-bold py-2 px-4 rounded-full">
                  Chat on WhatsApp
              </a>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SalesModal