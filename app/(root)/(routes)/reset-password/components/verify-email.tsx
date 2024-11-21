"use client"

import * as z from 'zod';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
})

export const VerifyEmailForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            const resp = await fetch(`/api/resetpassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const responseData = await resp.json()
            if (resp.status === 200) {
                toast({
                    className: cn(
                        'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                    ),
                    description: `${responseData.message}`,
                })
                router.push(`/reset-password/${responseData.data.id}`)
            } else {
                toast({
                    className: cn(
                        'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                    ),
                    variant: "destructive",
                    description: `${responseData.message}`,
                })
                setIsLoading(false)
            }
        } catch (error) {
            toast({
                className: cn(
                    'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                ),
                variant: "destructive",
                description: `Oops!! Something went wrong`,
            })
            setIsLoading(false)
        }
    }
    return (
        <div className={cn("grid gap-6")}>
            <div className="md:p-2 flex flex-col text-center">
                <p className="text-sm text-muted-foreground">
                    Enter your email for verification.
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
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
                        </div>

                        <Button disabled={isLoading} type='submit'>
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
            {!isLoading &&
                <>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Return to login?
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link
                            className={cn("text-sm text-gray-600 dark:text-white dark:hover:text-gray-600 font-medium transition-colors hover:text-primary")}
                            href="/">
                            Login here.
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}
