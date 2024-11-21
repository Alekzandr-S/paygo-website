// 'use client'

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import AnimatedTextWord from "@/components/AnimatedTextWord";
// import UserForm from "../UserForm";

// type ContanctSupportDialogProps = {
//   open: boolean,
//   onClose: () => void
// }

// export function ContanctSupportDialog({open, onClose}: ContanctSupportDialogProps) {

//   return (
//       <Dialog open={open} onOpenChange={onClose}>
//         <DialogContent className="sm:max-w-4xl h-[80vh] overflow-y-auto z-[1000]">
//           <DialogHeader>
//             <DialogTitle>
//               <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-4 w-full lg:max-w-lg mx-auto">
//                 <AnimatedTextWord text="Got Questions?" />
//               </h2>
//             </DialogTitle>
//             <DialogDescription>
            //  <p className="mb-4 font-semibold text-center">Keen to chat? Catch us live during business hours (8am-5pm on weekdays)</p>
//             </DialogDescription>
//           </DialogHeader>
            // <div className='flex justify-center py-2'>
            //    <p>Or</p>
            //  </div>
            //  <div className='flex justify-center py-2'>
            //    <p className='font-bold'>Log a Query</p>
            //  </div>
            //  <div className='mt-4'>
            //    <UserForm />
            //  </div>          
          // <DialogFooter className="sm:justify-start">
          //   <DialogClose asChild>
          //     <Button type="button" variant="secondary">
          //       Close
          //     </Button>
          //   </DialogClose>
          // </DialogFooter>
//         </DialogContent>
//       </Dialog>
//   )
// }

'use client'

import React, { useRef } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
// import ApplicationForm from "../ApplicationForm";
import AnimatedTextWord from "@/components/AnimatedTextWord";
import UserForm from "./component/UserForm";

type ContanctSupportDialogProps = {
  open?: boolean,
  onClose?: () => void
}

export function ContanctSupportDialog({open, onClose}: ContanctSupportDialogProps) {
  
  return (
    <div className="">
      <Drawer open={open} onOpenChange={onClose}>
          <DrawerTrigger asChild>
            <Button className='text-background font-bold text-2xl'>
              <span className='underline'>Contact Support </span> &#160; &#160; &rarr;
            </Button>          
          </DrawerTrigger>       
        <DrawerContent className="h-[100h] overflow-y-auto">
          <DrawerHeader className="flex flex-col items-center">
            <DrawerTitle>
              <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-4 w-full lg:max-w-lg mx-auto">
                <AnimatedTextWord text="Got Questions?" />
              </h2>            
            </DrawerTitle>
            <DrawerDescription>
              <p className="mb-4 font-semibold text-center">Keen to chat? Catch us live during business hours (8am-5pm on weekdays)</p>
              <div className='flex justify-center py-2'>
                <p>Or</p>
              </div>
              <div className='flex justify-center py-2'>
                <p className='font-bold'>Log a Query</p>
              </div>
              <div className='mt-4'>
                <UserForm />
              </div>           
            </DrawerDescription>
            <DrawerFooter className="">
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
export default ContanctSupportDialog;