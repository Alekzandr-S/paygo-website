'use client'

import Image from "next/image";
import { UserAuthForm } from "../../../components/signin-form/page"; 
// import { prisma } from "@/lib/prisma"; 

export default async function Home() {

  // const policy = await prisma.pc_user_password_policy.findFirst()
  return (
    <>
      <div className="md:hidden h-[100vh] pr-10 pl-10 flex items-center justify-center">

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="relative z-20 flex items-center justify-center text-lg font-medium">
            <Image alt='logo' src={'/images/Digital Paygo Logo.png'} width={100} height={30} className='w[100px] h-[30px]' />
            Web Portal
          </div>
          <div className="md:p-8 flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below to login to your account
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="lg:hidden flex items-center justify-center text-lg font-medium">
          <Image alt='logo' src={'/images/Digital Paygo Logo.png'} width={100} height={30} className='w[100px] h-[30px]' />
          Web Portal
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-xl font-medium">
            <Image alt='logo' src={'/images/Digital Paygo Logo.png'} width={150} height={40} className=' mr-5' />
            Web Portal
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to login to your account
              </p>
            </div>
            <UserAuthForm  />
          </div>
        </div>
      </div>
    </>
  );
}
