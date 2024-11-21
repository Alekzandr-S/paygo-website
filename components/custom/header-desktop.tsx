'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell, LogOut, Settings, } from 'lucide-react';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator';
import { AlertModal } from '@/components/modals/alert-modal';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Session } from 'next-auth';

export const revalidate = 0;

interface HeaderProps {
    role?: string | undefined
    fullname?: string
    initials?: string
    session?: Session
}
const HeaderDesktop: React.FC<HeaderProps> = ({
    role,
    fullname,
    initials,
    session,
}) => {
    const { setTheme } = useTheme()
    const scrolled = useScroll(5);
    const [isOpen, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    // const {data: session} = useSession();
    
    const logout = async () => {
        setIsLoading(true)
        try {
            await fetch(`/api/log/logout`)

            const values = {
                action: "Logout",
                description: "System logout"
            }

            await fetch(`/api/log/activity`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            await signOut({ redirect: false })
            router.replace("/admin")
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <AlertModal description='You are about to logout of the system. Please ensure all your work is saved or you might risk losing it.' isOpen={isOpen} onClose={() => setOpen(false)} onConfirm={logout} loading={isLoading} />
            <div
                className={cn(
                    `sticky inset-x-0 top-0 z-30 w-full transition-all border-b shadow-lg`,
                    {
                        'backdrop-blur-lg': scrolled
                    },
                )}
            >
                <div className="flex h-[60px] items-center justify-between px-4">
                    <div className="flex items-center space-x-4">
                        <Link
                            href={'/admin/dashboard'}
                            className="flex flex-row space-x-3 items-center justify-center md:hidden"
                        >
                            <Image alt='logo' src={`/images/zanaco_gear.png`} width={30} height={30} />
                            <span className="font-bold text-xl flex ">Logo</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                      <div className='flex justify-between items-center'>
                          <div className='mr-5'>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                  <span className="sr-only">Toggle theme</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => setTheme("light")}>
                                      Light
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                                      Dark
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setTheme("system")}>
                                      System
                                  </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                  <Avatar className='rounded-full h-full w-full'>
                                    <AvatarFallback>{initials?.toUpperCase()}</AvatarFallback>
                                  </Avatar>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <Separator />
                                <DropdownMenuLabel className='font-normal'>{fullname}</DropdownMenuLabel>
                                <DropdownMenuLabel className='text-xs font-normal'>{role}</DropdownMenuLabel>
                                  <>
                                    {/* <DropdownMenuSeparator /> */}
                                    <DropdownMenuItem>
                                      <Link href={ '/merchant/settings'} className='flex justify-center'>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                      </Link>
                                    </DropdownMenuItem>
                                  </>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setOpen(true)}>
                                  <LogOut className="mr-2 h-4 w-4" />
                                  <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderDesktop