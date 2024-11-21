"use client"

import * as z from 'zod';
import { cn } from "@/lib/utils"
import { signIn, useSession, } from 'next-auth/react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Key, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { pc_user_password_policy } from '@prisma/client';
// import secureLocalStorage from 'react-secure-storage';

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
        .min(1, { message: "Password cannot be empty." })
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    policy?: any
}

export function UserAuthForm({ policy, className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const router = useRouter()
    // const {data: session} = useSession();
    const { toast } = useToast()

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            // if (values.password.length < policy.min_length) {
            //     toast({
            //         className: cn(
            //             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            //         ),
            //         variant: "destructive",
            //         title: "Password Error!",
            //         description: `Must be ${policy.min_length} or more characters long.`,
            //     })
            //     return
            // }
            // if (policy.uppercase) {
            //     const regex = /[A-Z]/
            //     if (!regex.test(values.password)) {
            //         toast({
            //             className: cn(
            //                 'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            //             ),
            //             variant: "destructive",
            //             title: "Password Error!",
            //             description: "Must have at least one uppercase letter.",

            //         })
            //         return
            //     }
            // }
            // if (policy.lowercase) {
            //     const regex = /[a-z]/
            //     if (!regex.test(values.password)) {
            //         toast({
            //             className: cn(
            //                 'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            //             ),
            //             variant: "destructive",
            //             title: "Password Error!",
            //             description: "Must have at least one lowercase letter.",

            //         })
            //         return
            //     }
            // }
            // if (policy.number) {
            //     const regex = /[0-9]/
            //     if (!regex.test(values.password)) {
            //         toast({
            //             className: cn(
            //                 'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            //             ),
            //             variant: "destructive",
            //             title: "Password Error!",
            //             description: "Must have at least one number.",

            //         })
            //         return
            //     }
            // }
            // if (policy.symbols) {
            //     const regex = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/
            //     if (!regex.test(values.password)) {
            //         toast({
            //             className: cn(
            //                 'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            //             ),
            //             variant: "destructive",
            //             title: "Password Error!",
            //             description: "Must have at least one special character.",

            //         })
            //         return
            //     }
            // }
            console.log('creds..................:', values.email, values.password)
            const signInData = await signIn('credentials', {
                email: values.email,
                password: values.password,
                redirect: false
            });
            console.log('sign data......', signInData); 
            if (signInData?.error == "CredentialsSignin") {
                //setIsLoading(false)
                toast({
                    className: cn(
                        'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                    ),
                    variant: "destructive",
                    title: "Authentication Error!",
                    description: "Incorrect login credentials or your account has been locked.",
                })
            }
            if (signInData?.error == null) {
                router.push('/error')
            }
            if (signInData?.ok == true) {
                router.replace('/admin/dashboard')
            }
        } catch (error) {
            console.error(error);
            // router.replace('/error')

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className='flex'>
                                        <Input className='mr-1' type={isPasswordVisible ? "text" : "password"} placeholder='Password' {...field} />
                                        <Button className='ml-1' variant="outline" type='button' size={'icon'} onClick={togglePasswordVisibility}>
                                            {isPasswordVisible ? <EyeOff /> :
                                                <Eye />}
                                        </Button>
                                    </div>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='pt-6 space-x-2 flex items-center justify-center w-full'>

                        <Button disabled={isLoading} type='submit'>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            <Key className='mr-2 h-4 w-4 animate-bounce' />
                            Sign In
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground" style={{ textDecoration: 'none' }}>
                        Forgot password?
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Link
                    className={cn("text-sm text-gray-600 dark:text-white dark:hover:text-gray-600 font-medium transition-colors hover:text-primary")}
                    href="/reset-password">
                    Reset password here.
                </Link>
            </div>
        </div>
    )
}