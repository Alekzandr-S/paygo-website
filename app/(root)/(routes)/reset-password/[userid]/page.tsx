import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
// import { Metadata } from 'next'
// import React from 'react'
// import { VerifyTempPasswordForm } from './components/verify-temp-password'
// import prismadb from '@/lib/prisma'

// export const revalidate = 0

// export const metadata: Metadata = {
//     title: 'Reset password',
//     description: "MMP.",
//     icons: {
//         icon: [
//             {
//                 url: "/images/Merchant_App_icon.png", // /public path
//                 href: "/images/Merchant_App_icon.png", // /public path
//             },
//         ],
//     },
// }
// const Page = async ({
//     params
// }: {
//     params: {
//         userid: string
//     }
// }) => {
//     const data = await prismadb.merchantPortalUserMaster.findUnique({
//         where: {
//             id: params.userid
//         }
//     })
//     const otpPolicy = await prismadb.userPasswordPolicy.findFirst()
//     return (
//         <div>
//             <div className="md:p-2 flex flex-col space-y-2 text-center">
//                 <h1 className="text-2xl font-semibold tracking-tight">
//                     Reset your password here
//                 </h1>
//             </div>
//             <VerifyTempPasswordForm email={data?.email!} policy={otpPolicy!} />
//         </div>
//     )
// }

// export default Page