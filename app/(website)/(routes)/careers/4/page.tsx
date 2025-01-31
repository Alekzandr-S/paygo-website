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

  const qualificationsSentences = `
    Diploma or higher( University Degree desirable) in Information Technology related field or relevant subject from a reputable university.
    Grade 12 Credit or above is mandatory in Mathematics and English and any other three subjects.
    3-5 years of database, network administration, or system administration experience.
    System administration and IT certifications in Linux, Microsoft, or other network-related fields are a plus.
    Working knowledge of virtualization, VMWare, or equivalent.
    Strong knowledge of systems and networking software, hardware, and networking protocols.
    Experience with scripting and automation tools.
    A proven track record of developing and implementing IT strategy and plans.
    Strong knowledge of implementing and effectively developing helpdesk and IT operations best practices, including expert knowledge of security, storage, data protection, and disaster recovery protocols.
    At least three (3) years of working experience in IT.
    Excellent critical thinking and problem-solving skills.
    Patient and professional demeanor, with a can-do attitude.`.split('.').filter(sentence => sentence.trim() !== '');
  const dbAdministration = `Design and implement databases in accordance to end users’ information needs and views.
    Define users and enable data distribution to the right user, in appropriate format and in a timely manner.
    Ensure all databases are up to date and backed up.
    Manage Database access.
    Design maintenance procedures and ensure fast query responses.
    Determine, enforce and document database policies, procedures and standards.
    Perform tests and evaluations regularly to ensure data security, privacy and integrity.
    Monitor database performance, implement changes and apply new patches and versions when required.
    Managing, monitoring and maintaining company databases. 
    Making requested changes, updates and modifications to database structure and data. 
    Ensuring database security, integrity, stability and availability. 
    Maintaining database backup and recovery infrastructure.`.split('.').filter(sentence => sentence.trim() !== '');
  const systemAdmnistration = `Responsible for the maintenance, configuration, and reliable operation of computer systems, network servers, and virtualization.
    Install, configure and upgrade hardware and software.
    Ensure all security controls are implemented on all IT Infrastructure.
    Manage virtual servers and integrate automation processes.
    Monitor performance and maintain systems.
    Set up accounts and workstations / Laptops for employees.
    Troubleshoot issues and outages.
    Upgrade systems with new releases. 
    Patch all vulnerabilities. 
    Ensure security through access controls, backups and firewalls.
    Perform or delegate regular backup operations. 
    Implement appropriate processes for data protection.
    Implement appropriate processes for disaster recovery, and failover procedures.
    Ensuring all desktop applications, workstations, and related equipment problems are resolved in a timely manner with limited disruptions.
    Responsible for capacity and storage planning, and database performance.`.split('.').filter(sentence => sentence.trim() !== '');
  
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
          <h1 className='text-4xl lg:text-6xl text-center font-extrabold text-[#852882]'>SYSTEM ADMINISTRATOR</h1>
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
                The DSSL System Administrator will work under the guidance of the IT Technical Lead. They will Maintain the integrity of the organizations IT infrastructure, including operating systems, applications, servers, email systems, laptops, desktops, software, and hardware. Perform highly complex database administration work with respect to planning, development, maintenance, and monitoring integrated database systems; evaluating and reviewing database policies and procedures; and maintaining data integrity.  
              </p>
            </div>
          </li>

          <li className='mt-12'>
            <h3 className='text-3xl'>
              JOB RESPONSIBILITIES
            </h3>
              <ol className='list-[upper-alpha] pt-4'>
                <li className='pt-2'>
                  System Administration
                  <ul className=''>
                    {systemAdmnistration?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>
                <li className='pt-2'>
                  Database Administration
                  <ul className=''>
                    {dbAdministration?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

              </ol>
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
