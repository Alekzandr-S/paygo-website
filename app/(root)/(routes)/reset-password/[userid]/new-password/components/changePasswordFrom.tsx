import React from 'react'

const changePasswordFrom = () => {
  return (
    <div>changePasswordFrom</div>
  )
}

export default changePasswordFrom
// 'use client'

// import * as z from 'zod';
// import { cn } from '@/lib/utils'
// import React, { useState } from 'react'
// import { useToast } from '@/components/ui/use-toast';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Eye, EyeOff, Loader2 } from 'lucide-react';
// import { UserPasswordPolicy } from '@prisma/client';

// const formSchema = z.object({
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z.string()
//         .min(1, { message: "Password cannot be empty." }),
//     confirmPassword: z.string()
//         .min(1, { message: "Password cannot be empty." })
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
// });

// interface ChangePasswordFormProps {
//     email?: string,
//     policy?: UserPasswordPolicy
// }
// const ChangePasswordFrom: React.FC<ChangePasswordFormProps> = ({
//     email,
//     policy
// }) => {
//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
//     const [isPasswordVisible2, setIsPasswordVisible2] = useState<boolean>(false);
//     const { toast } = useToast()

//     function togglePasswordVisibility() {
//         setIsPasswordVisible((prevState) => !prevState);
//     }

//     function togglePasswordVisibility2() {
//         setIsPasswordVisible2((prevState) => !prevState);
//     }
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             email: email,
//             password: ""
//         }
//     })

//     async function onSubmit(values: z.infer<typeof formSchema>) {
//         setIsLoading(true)
//         try {
//             if (values.password.length < policy.minLength) {
//                 toast({
//                     className: cn(
//                         'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                     ),
//                     variant: "destructive",
//                     title: "Password Error!",
//                     description: `Must be ${policy.minLength} or more characters long.`,

//                 })
//                 return
//             }
//             if (policy.upperCase) {
//                 const regex = /[A-Z]/
//                 if (!regex.test(values.password)) {
//                     toast({
//                         className: cn(
//                             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                         ),
//                         variant: "destructive",
//                         title: "Password Error!",
//                         description: "Must have at least one uppercase letter.",

//                     })
//                     return
//                 }
//             }
//             if (policy.lowerCase) {
//                 const regex = /[a-z]/
//                 if (!regex.test(values.password)) {
//                     toast({
//                         className: cn(
//                             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                         ),
//                         variant: "destructive",
//                         title: "Password Error!",
//                         description: "Must have at least one lowercase letter.",

//                     })
//                     return
//                 }
//             }
//             if (policy.number) {
//                 const regex = /[0-9]/
//                 if (!regex.test(values.password)) {
//                     toast({
//                         className: cn(
//                             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                         ),
//                         variant: "destructive",
//                         title: "Password Error!",
//                         description: "Must have at least one number.",

//                     })
//                     return
//                 }
//             }
//             if (policy.symbols) {
//                 const regex = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/
//                 if (!regex.test(values.password)) {
//                     toast({
//                         className: cn(
//                             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                         ),
//                         variant: "destructive",
//                         title: "Password Error!",
//                         description: "Must have at least one special character.",

//                     })
//                     return
//                 }
//             }
//             const resp = await fetch(`/api/merchant/resetpassword/users`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(values)
//             })
//             const responseData = await resp.json()
//             if (resp.status === 200) {
//                 toast({
//                     className: cn(
//                         'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                     ),
//                     description: `${responseData.message}`,
//                 })
//                 window.location.href = '/'
//             } else {
//                 toast({
//                     className: cn(
//                         'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                     ),
//                     variant: "destructive",
//                     description: `${responseData.message}`,
//                 })
//             }
//         } catch (error) {
//             toast({
//                 className: cn(
//                     'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                 ),
//                 variant: "destructive",
//                 description: `Oops!! Something went wrong`,
//             })
//         } finally {
//             setIsLoading(false)
//         }
//     }
//     return (
//         <div className={cn("grid gap-6")}>
//             <div className="md:p-2 lg:w-[30vw] flex flex-col text-center">
//                 <p className="text-sm text-muted-foreground text-center">
//                     Create your new password
//                 </p>

//             </div>
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)}>
//                     <div className="grid gap-2">
//                         <FormField
//                             control={form.control}
//                             name='password'
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Password</FormLabel>
//                                     <FormControl>
//                                         <div className='flex'>
//                                             <Input className='mr-1' type={isPasswordVisible ? "text" : "password"} placeholder='Password' {...field} />
//                                             <Button className='ml-1' variant="outline" type='button' size={'icon'} onClick={togglePasswordVisibility}>
//                                                 {isPasswordVisible ? <EyeOff /> :
//                                                     <Eye />}
//                                             </Button>
//                                         </div>

//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                         <FormField
//                             control={form.control}
//                             name='confirmPassword'
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Confirm password</FormLabel>
//                                     <FormControl>
//                                         <div className='flex'>
//                                             <Input className='mr-1' type={isPasswordVisible2 ? "text" : "password"} placeholder='confirm password' {...field} />
//                                             <Button className='ml-1' variant="outline" type='button' size={'icon'} onClick={togglePasswordVisibility2}>
//                                                 {isPasswordVisible2 ? <EyeOff /> :
//                                                     <Eye />}
//                                             </Button>
//                                         </div>

//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                     </div>
//                     <div className='pt-6 space-x-2 flex items-center justify-center w-full'>

//                         <Button disabled={isLoading} type='submit'>
//                             {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//                             Submit
//                         </Button>
//                     </div>
//                 </form>
//             </Form>

//         </div>
//     )
// }

// export default ChangePasswordFrom