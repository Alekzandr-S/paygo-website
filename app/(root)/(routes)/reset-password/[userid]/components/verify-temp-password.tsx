import React from 'react'

const verifyTempPassword = () => {
  return (
    <div>verify-temp-password</div>
  )
}

export default verifyTempPassword
// "use client"

// import * as z from 'zod';
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { cn } from '@/lib/utils'
// import { Loader2 } from 'lucide-react'
// import Link from 'next/link'
// import React, { useEffect, useRef, useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useRouter } from 'next/navigation';
// import { useToast } from '@/components/ui/use-toast';
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { UserPasswordPolicy } from '@prisma/client';
// import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

// const formSchema = z.object({
//     email: z.string().email({ message: "Invalid email address" }),
//     otp: z.string()
// })

// interface VerifyTempPasswordFormProps {
//     email: string;
//     policy: UserPasswordPolicy
// }
// export const VerifyTempPasswordForm: React.FC<VerifyTempPasswordFormProps> = ({
//     email,
//     policy
// }) => {
//     const maxPinLength = policy.otpminLength; // change as per your requirements
//     const [password] = useState<string[]>(Array(maxPinLength).fill(''));
//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [time, setTime] = useState<number>(60 * policy.otpTimeout)

//     const router = useRouter()
//     const { toast } = useToast()

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             email: email,
//             otp: ''
//         }
//     })

//     function changeMail(str: string) {
//         var split = str.split("@");
//         var letter1 = split[0].substring(0, 1);
//         var letter2 = split[0].substring(split[0].length - 1, split[0].length);
//         var newFirst = letter1;
//         for (let i = 0; i < split[0].length - 2; i++) {
//             newFirst += "*";
//         }
//         newFirst += letter2;

//         var letter3 = split[1].substring(0, 1);
//         var extension = letter3;
//         for (let i = 0; i < split[1].split(".")[0].length - 1; i++) {
//             extension += "*";
//         }
//         extension += "." + split[1].split(".")[1];
//         var result = newFirst + "@" + extension;

//         return result;
//     }

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime((prevSeconds) => prevSeconds - 1);
//         }, 1000);
//         if (time === 0) {
//             //do somenthing here
//             deleteOtp()
//         }
//         // Clean up the timer
//         return () => clearInterval(timer);
//     }, [time]);

//     const seconds = String(time % 60).padStart(2, String(0));
//     const minutes = String(Math.floor(time / 60)).padStart(2, String(0));

//     const deleteOtp = async () => {
//         const values = {
//             email: email
//         }
//         try {
//             const resp = await fetch(`/api/merchant/resetpassword/users/verify-email`, {
//                 method: 'DELETE',
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
//                 window.location.href = `/reset-password`
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
//         }
//     }

//     async function onSubmit(values: z.infer<typeof formSchema>) {
//         setIsLoading(true)
//         if (values.otp.length < maxPinLength) {
//             setIsLoading(false)
//             toast({
//                 className: cn(
//                     'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                 ),
//                 variant: "destructive",
//                 title: "Verification Error!",
//                 description: "Please provide the OTP sent to your email.",

//             })
//             return
//         } else {
//             try {
//                 const resp = await fetch(`/api/merchant/resetpassword/users/verify-email`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(values)
//                 })
//                 const responseData = await resp.json()
//                 if (resp.status === 200) {
//                     toast({
//                         className: cn(
//                             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                         ),
//                         description: `${responseData.message}`,
//                     })
//                     router.push(`/reset-password/${responseData.data.id}/new-password`)
//                 } else {
//                     toast({
//                         className: cn(
//                             'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                         ),
//                         variant: "destructive",
//                         description: `${responseData.message}`,
//                     })
//                 }
//             } catch (error) {
//                 toast({
//                     className: cn(
//                         'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
//                     ),
//                     variant: "destructive",
//                     description: `Oops!! Something went wrong`,
//                 })
//             } finally {
//                 setIsLoading(false)
//             }
//         }
//     }
//     return (
//         <div className={cn("grid gap-6")}>
//             <div className="md:p-2 lg:w-[30vw] flex flex-col text-center">
//                 <p className="text-sm text-muted-foreground text-center">
//                     One-Time Password has been sent to {changeMail(email)}
//                 </p>
//                 <p className="text-sm text-muted-foreground mt-2">
//                     One-Time Password is only valid for {time <= 0 ? '0:00' : `${minutes}:${seconds}`}
//                 </p>
//             </div>
//             <div className='text-center flex flex-col justify-center items-center'>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)}>
//                         <div className="grid gap-2">
//                             <FormField
//                                 control={form.control}
//                                 name="otp"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>One-Time Password</FormLabel>
//                                         <FormControl>
//                                             <InputOTP maxLength={6} {...field}>
//                                                 <InputOTPGroup>
//                                                     {password.map((digit, i) => (
//                                                         <InputOTPSlot key={i} index={i} />
//                                                     ))}
//                                                 </InputOTPGroup>
//                                             </InputOTP>
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <Button disabled={isLoading} type='submit'>
//                                 {isLoading && (
//                                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                                 )}
//                                 Submit
//                             </Button>
//                         </div>
//                     </form>
//                 </Form>
//             </div>
//             {!isLoading &&
//                 <>
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <span className="w-full border-t" />
//                         </div>
//                         <div className="relative flex justify-center text-xs uppercase">
//                             <span className="bg-background px-2 text-muted-foreground">
//                                 Return to login?
//                             </span>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <Link
//                             className={cn("text-sm text-gray-600 dark:text-white dark:hover:text-gray-600 font-medium transition-colors hover:text-primary")}
//                             href="/">
//                             Login here.
//                         </Link>
//                     </div>
//                 </>
//             }
//         </div>
//     )
// }
