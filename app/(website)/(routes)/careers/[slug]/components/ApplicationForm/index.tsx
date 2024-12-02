'use client'
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import submitApplication from '@/lib/submitApplication';
import { toast } from '@/components/ui/use-toast';
import { schema } from '@/schemas/applicationFormSchema';
import { Button } from '@/components/ui/button';

type ApplicationFormProps = {
  roleId: string;
  submitRef: React.RefObject<HTMLButtonElement>;
};


export default function ApplicationForm({ roleId, submitRef }: ApplicationFormProps){
  const { reset, register, handleSubmit, formState: { errors }, watch, } = useForm({
    resolver: zodResolver(schema),
  });

  // Watch file input fields
  const cv = watch("cv");
  const nrc = watch("nrc"); 
  const coverLetter = watch("coverLetter"); 

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("id", roleId);

    if (cv && cv.length > 0) {formData.append("cv", cv[0]);}
    if (nrc && nrc.length > 0) {formData.append("nrc", nrc[0]);}
    if (coverLetter && coverLetter.length > 0) {formData.append("coverLetter", coverLetter[0]);}

    try {
      const response = await fetch('/api/apply-job', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Submission successful');
        toast({title: 'Success', description: 'Submission successful'});
        return true;
      } else {
        console.error('Submission failed');
        toast({variant: 'destructive', title: 'Error', description: `Submission failed: ${result.message || 'Unkown error'}`})
        return false;
      }
    } catch (error) {
      toast({description: 'Submission error', variant: 'destructive'})
      console.error('Submission error', error);
      return false;
    }
  };

  return (
    <>
      {/* <Input type='file'></Input> */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='sm:space-y- sm:overflow-y-scrol lg:overflow-y-hidde max-h-[60vh lg:grid lg:grid-cols-3 lg:gap-4'
      >
        <div>
          <label htmlFor="first_name">First name*</label>
          <Input  className=' ' id="first_name" {...register('first_name')} />
          {errors.first_name && <p>{errors.first_name.message?.toString()}</p>}
        </div>
        <div>
          <label htmlFor="surname">Last name*</label>
          <Input id="surname" {...register('surname')} />
          {errors.surname && <p>{errors.surname.message?.toString()}</p>}
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <Input id="email" {...register('email')} />
          {errors.email && <p>{errors.email.message?.toString()}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone*</label>
          <Input id="phone" {...register('phone')} />
          {errors.phone && <p>{errors.phone.message?.toString()}</p>}
        </div>
        <div>
          <label htmlFor="cv">Upload CV*</label>
          <Input type="file" {...register('cv')} />
        </div>
        <div>
          <label htmlFor="nrc">NRC</label>
          <Input type="file" {...register('nrc')} />
        </div>
        <div>
          <label htmlFor="coverLetter">Cover letter</label>
          <Input type="file" {...register('coverLetter')} />
        </div>
        <Button 
          className='flex items-center justify-center bg-[#852882] font-bold py-2 px-4 rounded-full'  
          type="submit" 
          variant='secondary' 
          ref={submitRef} 
          style={{display: 'none'}}>
            Submit
        </Button>
      </form>
    </>
  );
}




