'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '@iconify/react';
import { SideNavItem } from '@/types/side-nav-types';
import { SUPER_SIDENAV_ITEMS } from '@/menus/constant';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const SideNavAdmin = ({}) => {
    const {data: session} = useSession();
    
    return (
        <div className="md:w-60 h-screen flex-1 fixed border-r shadow-2xl hidden md:flex">
            <div className="flex flex-col space-y-5 w-full">
                <Link
                    href="/admin/dashboard"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 h-[60px] w-fit"
                >
                    <Image alt='logo' src={`/images/Digital Paygo Logo.png`} width={80} height={20} />
                    <span className="font-bold text-xl hidden md:flex">WEB PORTAL</span>
                </Link>
                <div className="flex flex-col space-y-2  md:px-6 ">
                    {SUPER_SIDENAV_ITEMS.map((item, idx) => {
                        return <MenuItem key={idx} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SideNavAdmin;

const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-black hover:text-white dark:hover:bg-slate-600 ${pathname.includes(item.path) ? 'bg-zinc-500 text-white dark:bg-slate-600' : ''
                            }`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-normal text-1xl flex">{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            <Icon icon="lucide:chevron-down" width="18" height="18" />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-1">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`hover:bg-black hover:text-white dark:hover:bg-slate-600 p-1 rounded-sm ${subItem.path === pathname ? 'font-normal bg-black text-white dark:bg-slate-600' : ''
                                            }`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-slate-600 ${item.path === pathname ? 'bg-black text-white dark:bg-slate-600' : ''
                        }`}
                >
                    {item.icon}
                    <span className="font-normal text-1xl flex">{item.title}</span>
                </Link>
            )}
        </div>
    );
};