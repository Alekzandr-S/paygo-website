import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { ReloadIcon } from "@radix-ui/react-icons"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
 
const FormSchema = z.object({
  name: z.string().min(2, "name must be at least 2 characters."),
  email: z.string().email(),
  surname: z.string().min(2),
  phone: z.string().regex(/^0(97|96|95|77|76|75)\d{7}$/, 'Invalid phone number format'),
  description: z.string().min(10)
})

function UserForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setSubmitting(true);
    try {
      const response = await fetch('/api/log-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast({
          className: cn(
            'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 z-[10000]'
          ),          
          title: "Success",
          description: "Your query has been logged. We will get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          className: cn(
            'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 z-[10000]'
          ),          
          title: "Error",
          description: "There was an error submitting your form. Please try again.",
        });
      }
    } catch (error) {
      toast({
        className: cn(
          'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 z-[10000]'
        ),        
        variant: 'destructive',
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className='flex justify-center'>
        <p>Thank you for submitting your query. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 grid-rows- gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name*</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname*</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone*</FormLabel>
              <FormControl>
                <Input placeholder="0971234567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Description*</FormLabel>
              <FormControl>
                <Input  placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='flex items-center justify-center bg-[#852882] font-bold py-2 px-4 rounded-full' type="submit" disabled={submitting}>
          {submitting ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default UserForm
