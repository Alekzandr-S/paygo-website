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
import ApplicationForm from "../ApplicationForm";

type DrawerComponentProps = {
  roleTitle: string; // Prop for the role title
  roleId: string;
};

const DrawerComponent: React.FC<DrawerComponentProps> = ({ roleTitle, roleId}) => {
  const submitRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = () => {
    if (submitRef.current) {
      submitRef.current.click();
    }
  };
  
  return (
    <div className="">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className='rounded-3xl py-8 px-16 bg-[#852882] text-white'>Apply Now!</Button>
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader className="flex flex-col items-center">
            <DrawerTitle className="text-3xl font-bold mb-8">{ roleTitle }</DrawerTitle>
            <DrawerDescription>
              <div className="flex justify-center mb-4">
                <h2 className="text-xl font-semibold">Personal information</h2>
              </div>
              <div>
                <ApplicationForm roleId={roleId} submitRef={submitRef}/>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="">
            <div>
              <Button className="" variant='default' onClick={handleSubmit}>Submit</Button>
            </div>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
export default DrawerComponent;