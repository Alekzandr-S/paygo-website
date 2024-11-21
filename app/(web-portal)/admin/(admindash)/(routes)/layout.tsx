
import { auth } from '@/auth';
import HeaderDesktop from '@/components/custom/header-desktop';
import MarginWidthWrapper from '@/components/custom/margin-width-wrapper';
import PageWrapper from '@/components/custom/page-wrapper';
import SideNavAdmin from '@/components/custom/side-nav-admin';
import Provider from '@/providers/provider';
import React from 'react'

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    const firstname = '';
    const lastname = '';
    
    // const getUserInitials = () => {

    //     if (firstname && lastname) {
    //         const initials = `${firstname.charAt(0)}${lastname.charAt(0)}`;
    //         return initials.toUpperCase();
    //     }
    //     return "";
    // };
    return (
        <>
            <div className="flex">
                <main className="flex-1">
                    <Provider>
                        <SideNavAdmin />
                        <MarginWidthWrapper>
                            <HeaderDesktop fullname={`${firstname} ${lastname}`} initials='AD' role='admin' />
                            <PageWrapper>
                                {children}
                            </PageWrapper>
                        </MarginWidthWrapper>
                    </Provider>
                </main>
            </div>
        </>
    )
}
