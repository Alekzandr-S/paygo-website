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

const JobForm1 = () => {
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
        <form className='flex flex-col'> 
          <div className='flex flex-col gap-4'>

            <div className='flex gap-2'>
              <div>
                <label htmlFor="role_title ">Role Title</label>
                <Input placeholder='User' id="role_title" />
              </div>
              <div>
                <label htmlFor="department ">Department</label>
                <Input placeholder='User' id="department" />
              </div>
              <div>
                <label htmlFor="type ">Type</label>
                <Input placeholder='User' id="type" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="description ">Description</label>
                <Textarea placeholder='...' id="description" />
              </div>
            </div>
          </div>
          <div className="mt-8 mb-8">
            <hr />
          </div>
          <div className='flex gap-4'>
            <div>
              <label htmlFor="responsibility_heading ">Heading</label>
              <Textarea placeholder='...' id="responsibility_heading" />
            </div>
            <div>
              <label htmlFor="responsibility_description ">Description</label>
              <Textarea placeholder='...' id="responsibility_description" />
            </div>
          </div>
          <div className="mt-8 mb-8">
            <hr />
          </div>
          <div className='flex gap-4'>
            <div>
              <label htmlFor="skills_heading ">Heading</label>
              <Textarea placeholder='...' id="skills_heading" />
            </div>
            <div>
              <label htmlFor="skills_description ">Description</label>
              <Textarea placeholder='...' id="skills_description" />
            </div>
          </div>
            <div className="mt-8 mb-8">
              <hr />
            </div>
          <div className='flex flex-col gap-4'>
            <div>
              <label htmlFor="qualifications ">Qualifications</label>
              <Textarea placeholder='...' id="qualifications" />
            </div>
            <div>
              <label htmlFor="benefits ">Benefits</label>
              <Textarea placeholder='...' id="benefits" />
            </div>
            <div className='flex gap-4'>
              <div>
                <div>
                  <label htmlFor="application_deadline ">Deadline</label>
                  <Textarea placeholder='...' id="application_deadline" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="contact_person ">Contact Person</label>
                  <Textarea placeholder='...' id="contact_person" />
                </div>
              </div>
            </div>
          </div>
            <div className="mt-8 mb-8">
              <hr />
            </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <div>
                <label htmlFor="ID ">ID</label>
                <Input placeholder='...' id="ID" />
              </div>
              <div>
                <label htmlFor="posting_date">Posting Date</label>
                <Input placeholder='...' id="posting_date" />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <Input placeholder='...' id="status" />
              </div>
              <div>
                <label htmlFor="hiring_manager">Hiring Manager</label>
                <Input placeholder='...' id="Hiring Manager" />
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                <label htmlFor="note ">Notes</label>
                <Textarea placeholder='...' id="note" />
              </div>
            </div>
          </div>
          <div className='flex  gap-4 mt-4'>
            <Button className=''>Post</Button>
            <Button variant={'secondary'}>Save Draft</Button>
          </div>
        </form>
    </div>
  )
}

export default JobForm1