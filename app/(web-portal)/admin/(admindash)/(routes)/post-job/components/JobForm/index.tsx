'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { jobRoleSchema } from '@/lib/formSchema'; 
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { prisma } from '@/lib/prisma';

// type something = typeof prisma.jobrole;
type JobRoleFormData = z.infer<typeof jobRoleSchema>;

const JobForm: React.FC =  () => {
  const session = useSession();
  const [status, setStatus] = useState("Open");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<JobRoleFormData>({
    resolver: zodResolver(jobRoleSchema),
  });

  const onSubmit = async (data: JobRoleFormData) => {
    try {
      const response = await fetch('/api/web-portal/create-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roleTitle: data.role_title,
          aboutRole: data.about_role,
          expectations: data.expectations,
          qualifications: data.qualifications        
        }),
      });

      if (response.ok) {
        
        reset(); 
        toast({description:'Job role created successfully!'});
      } else {
        console.error('Failed to create job role');
        toast({description: 'Failed to create job role. Please try again.'});
      }
    } catch (error) {
      console.error('Network error:', error);
      toast({description: 'Network error. Please try again later.'});
    }
  };

  return (
    <div className='mx-5 my-8'>
      <div className='my-8 flex justify-between'>
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Create a job opening
                </label>
            </div>
            <Button variant='outline'  onClick={() => history.back()}>
              <ArrowLeft /> Back
            </Button>
        </div>
        <div className="mt-8 mb-8">
            <hr />
        </div>
      <div>
        <form id='roleForm' className='grid grid-cols-2 gap-2' onSubmit={handleSubmit(onSubmit)} >
          <div className='row-span-2 col-span-'>
            <label htmlFor="role_title ">Role Title</label>
            <Input placeholder='User' id="role_title" {...register('role_title')} />
            {errors.role_title && <p>{errors.role_title.message}</p>}
          </div>
          <div className='row-span-2 col-start-1'>
            <label htmlFor="about_role">Job Purpose</label>
            <Textarea className='col-span-' id="about_role" {...register('about_role')} />
            {errors.about_role && <p>{errors.about_role.message}</p>}
          </div>
          <div className='row-span-2 col-start-2'>
            <label htmlFor="expectations">Expectations</label>
            <Textarea className='col-span-2' id="expectations" {...register('expectations')} />
            {errors.expectations && <p>{errors.expectations.message}</p>}
          </div>
          <div className='row-span-3 col-start-1'>
            <label htmlFor="qualifications">Qualifications</label>
            <Textarea className='col-span-2' id="qualifications" {...register('qualifications')} />
            {errors.qualifications && <p>{errors.qualifications.message}</p>}
          </div>
          <div>
            
          </div>
        </form>
        <div className='my-4 flex justify-start'>
          <Button form='roleForm' type="submit">
            Submit
          </Button></div>
      </div>
    </div>
  );
};

export default JobForm;
