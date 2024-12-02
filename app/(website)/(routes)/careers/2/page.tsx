'use client'

import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { motion, startOptimizedAppearAnimation } from 'framer-motion';
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

  const internalExternaContacts = 
    ` Internal-All departments.
      External-Vendors, partners, customers and regulators.
    `.split('.').filter(sentence => sentence.trim() !== '');
  // const qualificationsSentences = jobRole?.qualifications?.split('.').filter(sentence => sentence.trim() !== '');
  const qualificationsSentences = 
    `
      Grade 12 School Certificate with 5 credits including English and Mathematics.
      Bachelor’s Degree in Accountancy/Finance or Business related course.
      Full ACCA/CIMA qualification and membership with ZICA.
      MBA or equivalent qualification, preferably in Finance or Business Administration would be an added advantage.
      Minimum Five (5) years of experience in a senior finance or operations role, ideally within the Fintech industry.
      Proven track record of success in leading and managing teams, developing and implementing strategies, and driving results.
      Deep understanding of relevant financial and regulatory frameworks.
      Experience with financial modelling and forecasting tools.
      Proficiency in various finance and operations software (e.g., ERP systems, data analytics platforms).
      Digital Finance Services (DFS) knowledge is an added advantage.
  `.split('.').filter(sentence => sentence.trim() !== '');
  // const skillsAndCompetencies = jobRole?.skills_and_competencies?.split('.').filter(sentence => sentence.trim() !== '');
  const skillsAndCompetencies = 
    `
      Leadership.
      Self-starter and self-motivated.
      Interpersonal skills.
      Communication skills, verbal and written.
      Attention to detail.
      Analytical skills.
      Drive for results.
      Innovativeness.
    `.split('.').filter(sentence => sentence.trim() !== '');

  // const sales_strategy_and_planning = jobRes?.sales_forecasting_and_reporting?.split('.').filter(sentence => sentence.trim() !== '');
  const finance = 
    `
      Develop the company and departmental strategic plans and budgets.
      Lead and manage the entire finance function, including accounting, financial reporting, reconciliation, budgeting, forecasting, and cash flow management.
      Ensure accurate and timely financial reporting in accordance with relevant accounting standards and regulatory requirements.
      Control of the Company’ s expenditure and identification and implementation of cost saving measures.
      Ensure financial records and systems are maintained in accordance with the Companies Act requirements and International Financial Reporting Standards.
      Oversee the approval and processing of revenue, revenue expenditure, capital expenditure, departmental budgets, salary updates, ledger and account maintenance and data entry.
      Board pack preparation and presentation.
      Compliance and Tax planning.
      Capital raising to meet the company’s’ funding requirements.
      Develop and implement financial strategies to achieve business objectives, optimize capital allocation, and manage risk.
      Conduct financial analysis and provide insights to inform strategic decision-making.
      Oversee the implementation and maintenance of finance systems and technologies.
      Build and lead a high-performing finance & administration team.
    `.split('.').filter(sentence => sentence.trim() !== '');
  // const client_acquisiion = jobRes?.client_acquisition_and_account_management?.split('.').filter(sentence => sentence.trim() !== '');
  const operations = 
    `
      Developing and implementing operational policies and procedures that align with the company's overall strategy.
      Optimize operational processes and drive efficiency through automation and continuous improvement initiatives.
      Develop and implement policies and procedures for managing vendor relationships, procurement, and risk management.
      Oversee the implementation and maintenance of operational systems and technologies.
    `.split('.').filter(sentence => sentence.trim() !== '');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-24 lg:px-0 p-24">
      <div className='flex flex-col items-center mt-8 lg:mt-0'>
        <motion.div  
          className='flex justify-start mt-4 mb-20'
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
        >
          <h1 className='text-4xl leading-snug tracking-wide lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center font-extrabold text-[#852882]'>
            Head Finance <br className='hide lg:block'/> and Administration
          </h1>
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
                The Head-Finance and Administration reports to the Chief Executive Officer. The role holder is responsible for all for shaping Digital Shared Services Limited’s financial matters, optimizing the Company’s internal day-today processes, and ensuring that the company operates with agility and efficiency. S/He controls the flow of cash through the organization and maintains the integrity of funds, securities and other valuable documents; S/he manages the organization’s finances and is responsible for the soundness of the organization’s financial controls and financial reporting; and manages and provides leadership across finance, administration and operations teams.
              </p>
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
                    {finance?.map((sentence, index) => (
                      <li className='list-disc ml-6 ' key={index}> {sentence}</li>
                    ))}
                  </ul>
                </li>

                <li className='pt-2'>
                  Client Acquisition and Account Management
                  <ul className=''>
                    {operations?.map((sentence, index) => (
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
          <p className='mx-8 lg:mx-24 xl:mx-28'>
            If you are interested in this role and meet the qualifications set out in 4 above, please submit your application indicating the position being applied for in the subject line by email <span>
              <a
                href="mailto: HR@digitalpaygo.com"
                className='underline'>
                HR@digitalpaygo.com
                </a>
              </span> 
            <span className='font-bold'> no later than Friday, 13th December, 2024.</span>
          </p>

          <p className='pt-4 mx-8 lg:mx-28'>ALL application must have the following documents:</p>
          <ol className='list-[lower-alpha] mx-16 lg:mx-32'>
            <li>Application/cover letter;</li>
            <li>Copies of qualifications; and</li>
            <li>Detailed Curriculum Vitae.</li>
          </ol>

          <p className='mx-8 lg:mx-24 xl:mx-28 pt-4'>Applications sent without these attachments <span  className='font-bold'>WILL NOT</span> be considered.</p>
          <p className='mx-8 lg:mx-24 xl:mx-28 pt-4 font-extrabold'>ONLY SHORTLISTED CANDIDATES WILL BE CONTACTED.</p>
          <p className='mx-8 lg:mx-28 pt-4'>Seniority Level</p>
          <p className='mx-8 lg:mx-28'>Senior Management	Employment Type & Location</p>
          <p className='mx-8 lg:mx-28'>Fixed-Term, Full-time</p>
          <p className='mx-8 lg:mx-28'>Lusaka, Zambia</p>

          <p className='mx-8 lg:mx-28 pt-4 font-bold'>Industry</p>
          <ul className='list-disc mx-16 lg:mx-32'>
            <li>Fintech	Job Functions</li>
            <li>Strategy Implementation</li>
            <li>Company Leadership</li>
          </ul>
        </div>
      </div> 
    </main> 
  )
}

export default JobDetails