'use client'

import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

function JobDetails() {
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

  const qualificationsSentences = `Bachelors Degree in Computer Science.
    Certificate in Project Management is an added advantage.
    Minimum of 3 years in a similar role.`.split('.').filter(sentence => sentence.trim() !== '');
  const general = `To oversee the completion of project tasks and monitor adherence to perpetual project management process and standards.
    To follow up on open items and track issues including resource allocation, task planning and progress reporting through highlight reports/exceptions.
    To document all project-related assignments, issues and risks and assist with creating reports and presentations using a variety of office productivity tools.
    To improve project administration processes by identifying inefficiencies and recommending solutions.
    To manage assigned projects according to the project management methodology, planning tasks, controlling resources and monitoring progress in order to effectively complete assigned projects.
    To maintain a detailed project plan for each project. Update the project plan to accurately reflect the project status regarding the work progress, resources used and schedule.
    To coordinate project teams consisting of functional area staff when necessary relative to the project scope and objectives. Exercise a leadership role, ensuring the completion of projects within defined time-lines, budget controls and quality standards.
    To continually communicate the status of each assigned project to all project participants and stakeholders.
    To research the availability and feasibility of vendor products whether appropriate for assigned projects. Provide written recommendation of most feasible solution based upon research performed.
    To work closely with the technical resources to develop and ensure the delivery of training programs relative to assigned projects.
    Maintain knowledge of products and services offered by the DSSL.
    To provide input into the development of organisational project budget planning phase and make recommendations for purchases as well as cost containment relative to the management of projects.  
    Raise of change requests to Change Advisory Board (CAB) for project roll-outs into production. 
    Request project approvals to management.
    Ensures accurate requisitions, invoicing and monitors payments for assigned projects.
    Addresses billing issues when they arise.`.split('.').filter(sentence => sentence.trim() !== '');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-24 lg:px-0 p-24">

      <div className='flex flex-col items-center mt-8'>
        <motion.div  
          className='flex justify-start mt-4 mb-20'
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
        >
          <h1 className='text-4xl lg:text-6xl text-center font-extrabold text-[#852882]'>IT PROJECT LEAD</h1>
          {/* <h1 className='text-[60px]/[70px] text-center font-extrabold text-[#852882]'>{jobRole!.role_title}</h1> */}
        </motion.div>
        <motion.div  
          className='mb-8 top-[20em]'
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
          >
          <Button className='rounded-3xl py-8 px-16 bg-[#852882] text-white' variant='outline' onClick={scrollToApplying}>Apply Now!</Button>
        </motion.div>
        <motion.div 
          className=' mb-12'
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
        >
          <p className='text-[#852882] font-semibold'>We normally respond within a week</p>
        </motion.div>
        <motion.div 
          className=''
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
        >
          <Button className='bg-[#852882]' variant="outline" onClick={scrollToAboutRole} size="icon">
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </motion.div>
          
        <div className='flex items-center justify-center mx-4 lg:mx-24 xl:mx-28 mt-32'>
          <p>
            Digital Shared Services Limited Trading as Digital PayGo is inviting applications from suitably qualified and experienced individuals for the position of Sales Manager in its Commercial Department, aimed at contributing to Digital PayGo’s strategic vision.
          </p>
        </div>
        <ol className='mx-8 lg:mx-24 xl:mx-28 list-decimal'>
          <li className='fle flex-col items-center mt-12'>
            <div ref={aboutRoleRef} className='   '>
              <h3 className='text-3xl mb-4'>Job Purpose</h3>
              {/* <p> {jobRole!.job_purpose} </p> */}
              <p> 
                Responsible for planning, execution and finalizing Projects according to strict deadlines, quality and within budget. This includes acquiring resources and coordinating the efforts of team members, stakeholders and third-party contractors or consultants to deliver projects according to plan and fit for purpose. The Project Manager is responsible for providing administrative and support in the management of strategic projects as assigned through the use of standardized Project Governance Framework and DSSL methodology.  He/she is responsible for the coordination and monitoring of project teams as required for the planning, development, testing, and implementation phases as necessary to complete fit for purpose projects in a timely manner within budget controls and defined quality standards.
              </p>
            </div>
          </li>

          <li className='mt-12'>
            <h3 className='text-3xl'>
              JOB RESPONSIBILITIES
            </h3>
              <ol className='list-[upper-alpha] pt-4'>
                <li className='pt-2'>
                  General
                  <ul className=''>
                    {general?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                {/* <li className='pt-2'>
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
                    {sales_strategy_and_planning?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                <li className='pt-2'>
                  Team Collaboration and Leaders
                  <ul className=''>
                    {team_collaboration?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li> */}

              </ol>
          </li>

          {/* <li className='mt-12'>
            <h3 className='text-3xl'>INTERNAL/EXTERNAL CONTACTS</h3>
            <ul>
              {internalExternaContacts?.map((sentence, index) =>
                <li className='list-disc ml-6 pt-2' key={index}>{sentence}</li>
              )}
            </ul>
          </li> */}

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

          {/* <li className='mt-12'>
            <h3 className='text-3xl'>SKILLS AND COMPETENCIES</h3>
            <ul>
              {skillsAndCompetencies?.map((sentence, index) => (
                <li className='list-disc ml-6 pt-2' key={index}> {sentence}</li>
              ))}
            </ul>
          </li> */}

          <li className='mt-12'>
            <div ref={applyingRef}>
              <h3 className='text-3xl'>APPLYING FOR THE ROLE</h3>
            </div>
          </li>
        </ol>
        <div className='mt-4'>
          <p className='mx-8 lg:mx-24 xl:mx-28'>
            If you are interested in this role and meet the qualifications set out in 4 above, please submit your application indicating the position being applied for in the subject line by email <span>
              <a
                href="mailto: HR@digitalpaygo.com"
                className='underline'>
                HR@digitalpaygo.com
                </a>
              </span> 
            <span className='font-bold'> no later than Wednesday, 5th February, 2025.</span>
          </p>

          <p className='pt-4 mx-8 lg:mx-28'>ALL application must have the following documents:</p>
          <ol className='list-[lower-alpha] mx-16 lg:mx-32'>
            <li>Application/cover letter;</li>
            <li>Copies of qualifications;</li>
            <li>ZAQA Certificate of Verification for the required qualifications; and</li>
            <li>Detailed Curriculum Vitae.</li>
          </ol>

          <p className='mx-8 lg:mx-24 xl:mx-28 pt-4'>Applications sent without these attachments <span  className='font-bold'>WILL NOT</span> be considered.</p>
          <p className='mx-8 lg:mx-24 xl:mx-28 pt-4 font-extrabold'>ONLY SHORTLISTED CANDIDATES WILL BE CONTACTED.</p>
        </div>
      </div> 
    </main> 
  )
}

export default JobDetails
