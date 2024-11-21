import React, { useState } from 'react'
import { Metadata } from 'next'
import { VerifyEmailForm } from './components/verify-email'

export const revalidate = 0

export const metadata: Metadata = {
    title: 'Reset password',
    description: "MMP.",
    icons: {
        icon: [
            {
                url: "/images/Merchant_App_icon.png", // /public path
                href: "/images/Merchant_App_icon.png", // /public path
            },
        ],
    },
}

const Pages = () => {

    return (
        <div>
            <div className="md:p-2 flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Reset your password here
                </h1>
            </div>
            <VerifyEmailForm />
        </div>
    )
}

export default Pages