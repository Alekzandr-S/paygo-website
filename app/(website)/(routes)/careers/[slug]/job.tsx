'use client'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import React, { useEffect, useRef, useState } from 'react'
import DrawerComponent from './components/Drawer'
import { strict } from 'assert'
import { prisma } from '@/lib/prisma'
import { job_responsibilities, jobrole } from '@prisma/client'

export const dynamic = "force-dynamic"

type JobDetailsProps = {
  job: {
    role_id: number;
    role_title: string;
    date_posted: Date | null;
    status: string | null;
    about_role: string;
    internal_external_contacts: string | null;
    skills_and_competencies: string;
    job_purpose: string;
    expectations: string;
    qualifications: string;
  } | null;
  jobResponsibilities: job_responsibilities | null;
};

function JobDetails({ job, jobResponsibilities }: JobDetailsProps) {
  if (!job) {
    return <div className="flex justify-center">Job role not found.</div>;
  }
  
  const [jobRole, setJobRole] = useState(job);
  const [jobRes, setJobRes] = useState(jobResponsibilities);


  const aboutRoleRef = useRef<HTMLDivElement>(null);
  const applyingRef = useRef<HTMLDivElement>(null);

  const scrollToAboutRole = () => {
    const element = aboutRoleRef.current;
    if (element) {
        const offset = 100; // Custom offset value
        const top = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    }
  };

  const scrollToApplying = () => {
    const element = applyingRef.current;
    if (element) {
        const offset = 100; // Custom offset value
        const top = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    }
  };

  if (!jobRole) {
    return <div className='flex justify-center'>Job role not found.</div>; 
  } 
  console.log('jobrole', jobRole);
  const internalExternaContacts = jobRole?.internal_external_contacts?.split('.').filter(sentence => sentence.trim() !== '');
  const qualificationsSentences = jobRole?.qualifications?.split('.').filter(sentence => sentence.trim() !== '');
  const skillsAndCompetencies = jobRole?.skills_and_competencies?.split('.').filter(sentence => sentence.trim() !== '');

  const sales_strategy_and_planning = jobRes?.sales_forecasting_and_reporting?.split('.').filter(sentence => sentence.trim() !== '');
  const client_acquisiion = jobRes?.client_acquisition_and_account_management?.split('.').filter(sentence => sentence.trim() !== '');
  const market_research = jobRes?.market_research_and_product_feedback?.split('.').filter(sentence => sentence.trim() !== '');
  const sales_forecasting_and_reporting = jobRes?.sales_forecasting_and_reporting?.split('.').filter(sentence => sentence.trim() !== '');
  const team_collaboration = jobRes?.team_collaboration_and_leadership?.split('.').filter(sentence => sentence.trim() !== '');

  const jobResHeadings = Object.keys(jobRes as {});
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center mt-8'>
        <div  className='flex justify-start mt-4 mb-20'>
          <h1 className='text-[60px]/[70px] text-center font-extrabold text-[#852882]'>{jobRole!.role_title}</h1>
        </div>
        <div  className='mb-8 top-[20em]'>
          <Button className='rounded-3xl py-8 px-16 bg-[#852882] text-white' variant='outline' onClick={scrollToApplying}>Apply Now!</Button>
        </div>
        <div className=' mb-12'>
          <p className='text-[#852882] font-semibold'>We normally respond within a week</p>
        </div>
        <div className='mb-24'>
          <Button className='bg-[#852882]' variant="outline" onClick={scrollToAboutRole} size="icon">
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className='flex items-center mx-0 lg:mx-24 xl:mx-28'>
          <p>
            Digital Shared Services Limited Trading as Digital PayGo is inviting applications from suitably qualified and experienced individuals for the position of Sales Manager in its Commercial Department, aimed at contributing to Digital PayGo’s strategic vision.
          </p>
        </div>
        <ol className='mx-0 lg:mx-24 xl:mx-28 list-decimal'>
          <li className='fle flex-col items-center mt-12'>
            <div ref={aboutRoleRef} className='   '>
              <h3 className='text-3xl mb-4'>Job Purpose</h3>
              <p> {jobRole!.job_purpose} </p>
            </div>
          </li>

          <li className='mt-12'>
            <h3 className='text-3xl'>
              JOB RESPONSIBILITIES
            </h3>
              <ol className='list-[upper-alpha] pt-4'>
                <li className='pt-2'>
                  Sales Strategy and Planning
                  <ul className=''>
                    {sales_forecasting_and_reporting?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                <li className='pt-2'>
                  Client Acquisition and Account Management
                  <ul className=''>
                    {client_acquisiion?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                <li className='pt-2'>
                  Market Research and Product Feedback
                  <ul className=''>
                    {market_research?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                <li className='pt-2'>
                  Sales Forecasting and Reporting
                  <ul className=''>
                    {sales_forecasting_and_reporting?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                <li className='pt-2'>
                  Team Collaboration and Leaders
                  <ul className=''>
                    {sales_forecasting_and_reporting?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

              </ol>
          </li>

          <li className='mt-12'>
            <h3 className='text-3xl'>INTERNAL/EXTERNAL CONTACTS</h3>
            <ul>
              {internalExternaContacts?.map((sentence, index) =>
                <li className='list-disc ml-6 pt-2' key={index}>{sentence}</li>
              )}
            </ul>
          </li>

          <li className='fle flex-col items-center mt-12'>
            <div className=' '>
              <ul>
                <h3 className='text-3xl mb-4'>
                  QUALIFICATIONS
                </h3>
                {qualificationsSentences?.map((sentence, index) => (
                  <li className='list-disc ml-6' key={index}> {sentence}</li>
                ))}
              </ul>
            </div>
          </li>

          <li className='mt-12'>
            <h3 className='text-3xl'>SKILLS AND COMPETENCIES</h3>
            <ul>
              {skillsAndCompetencies?.map((sentence, index) => (
                <li className='list-disc ml-6 pt-2' key={index}> {sentence}</li>
              ))}
            </ul>
          </li>

          <li className='mt-12'>
            <div ref={applyingRef}>
              <h3 className='text-3xl'>APPLYING FOR THE ROLE</h3>
            </div>
          </li>
        </ol>
        <div className='mt-4'>
          <p className='mx-0 lg:mx-24 xl:mx-28'>
            If you are interested in this role and meet the qualifications set out in 4 above, please submit your application indicating the position being applied for in the subject line by email <span>
              <a
                href="mailto: HR@digitalpaygo.com"
                className='underline'>
                HR@digitalpaygo.com
                </a>
              </span> 
            <span className='font-bold'> no later than Friday, 13th December, 2024.</span>
          </p>

          <p className='pt-4 mx-28'>ALL application must have the following documents:</p>
          <ol className='list-[lower-alpha] mx-32'>
            <li>Application/cover letter;</li>
            <li>Copies of qualifications;</li>
            <li>ZAQA Certificate of Verification for the required qualifications; and</li>
            <li>Detailed Curriculum Vitae.</li>
          </ol>

          <p className='mx-0 lg:mx-24 xl:mx-28 pt-4'>Applications sent without these attachments <span  className='font-bold'>WILL NOT</span> be considered.</p>
          <p className='mx-0 lg:mx-24 xl:mx-28 pt-4 font-extrabold'>ONLY SHORTLISTED CANDIDATES WILL BE CONTACTED.</p>
        </div>
      </div> 
    </main> 
  )
}

export default JobDetails