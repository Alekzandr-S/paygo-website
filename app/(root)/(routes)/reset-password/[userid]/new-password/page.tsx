import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
// import { prisma } from '@/lib/prisma'
// import { Metadata } from 'next'
// import React from 'react'
// import ChangePasswordFrom from './components/changePasswordFrom'

// export const revalidate = 0

// export const metadata: Metadata = {
//     title: 'Reset password',
//     description: "MMP.",
//     icons: {
//         icon: [
//             {
//                 url: "/images/Digital Paygo Logo.png", // /public path
//                 href: "/images/Digital Paygo Logo.png", // /public path
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
//     const data = await prisma.merchantPortalUserMaster.findUnique({
//         where: {
//             id: params.userid
//         }
//     })
//     const policy = await prisma.userPasswordPolicy.findFirst()
//     return (
//         <div>
//             <div className="md:p-2 flex flex-col space-y-2 text-center">
//                 <h1 className="text-2xl font-semibold tracking-tight">
//                     Reset your password here
//                 </h1>
//             </div>
//             <ChangePasswordFrom email={data?.email!} policy={policy!} />
//         </div>
//     )
// }

// export default Page