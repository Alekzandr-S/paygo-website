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

  // if (!jobRole) {
  //   return <div className='flex justify-center'>Job role not found.</div>; 
  // } 
  // console.log('jobrole', jobRole);
  // const internalExternaContacts = jobRole?.internal_external_contacts?.split('.').filter(sentence => sentence.trim() !== '');
  const internalExternaContacts = `Internal-All departments.
External-Vendors, partners, customers and regulators.`.split('.').filter(sentence => sentence.trim() !== '');
  // const qualificationsSentences = jobRole?.qualifications?.split('.').filter(sentence => sentence.trim() !== '');
  const qualificationsSentences = `Bachelor’s degree in Business Administration, Marketing, Finance, or related field; Master’s degree is a plus.
5+ years of experience in a sales role, with at least 2 years in a leadership position, preferably within fintech, digital payments, or financial services sectors.
Proven experience in managing client accounts and hitting/exceeding sales targets in a competitive environment.
Digital Finance Services (DFS) is an added advantage.`.split('.').filter(sentence => sentence.trim() !== '');
  // const skillsAndCompetencies = jobRole?.skills_and_competencies?.split('.').filter(sentence => sentence.trim() !== '');
  const skillsAndCompetencies = `Industry Knowledge: In-depth understanding of fintech, digital payments, or electronic banking.
Sales Expertise: Strong negotiation, consultative selling, and closing skills.
Client Relationship Management: Ability to foster and maintain strong relationships with clients and partners.
Analytical Skills: Ability to analyse data and make informed decisions; familiarity with CRM and analytics tools.
Communication Skills: Excellent presentation and communication skills; proficiency in English and local languages an asset.
Tech-Savviness: Comfortable using digital platforms and presentation software.
Willingness to travel within Zambia as needed.
Proven adaptability and openness to working in a fast-paced fintech environment.`.split('.').filter(sentence => sentence.trim() !== '');

  // const sales_strategy_and_planning = jobRes?.sales_forecasting_and_reporting?.split('.').filter(sentence => sentence.trim() !== '');
  const sales_strategy_and_planning = `Develop and execute sales strategies to meet revenue targets for Digital PayGo’s products and services.
Analyse market trends and competitor activities to adapt sales strategies.
Identify and target new business opportunities in the fintech and digital payments space.`.split('.').filter(sentence => sentence.trim() !== '');
  // const client_acquisiion = jobRes?.client_acquisition_and_account_management?.split('.').filter(sentence => sentence.trim() !== '');
  const client_acquisiion = `Identify, prospect, and acquire new business clients for Digital PayGo’s solutions.
Manage existing client relationships, ensuring high satisfaction and retention rates.
Conduct client presentations and product demonstrations to showcase Digital PayGo’s offerings.`.split('.').filter(sentence => sentence.trim() !== '');
  // const market_research = jobRes?.market_research_and_product_feedback?.split('.').filter(sentence => sentence.trim() !== '');
  const market_research = `Gather market intelligence and customer feedback to share with product teams for continual product improvement.
Stay informed on fintech trends and provide insights on how Digital PayGo can innovate to stay competitive.`.split('.').filter(sentence => sentence.trim() !== '');
  // const sales_forecasting_and_reporting = jobRes?.sales_forecasting_and_reporting?.split('.').filter(sentence => sentence.trim() !== '');
  const sales_forecasting_and_reporting = `Create and present sales forecasts, pipeline reports, and performance metrics.
Monitor leads, opportunities, and sales conversions effectively.`.split('.').filter(sentence => sentence.trim() !== '');
  // const team_collaboration = jobRes?.team_collaboration_and_leadership?.split('.').filter(sentence => sentence.trim() !== '');
  const team_collaboration = `Work closely with marketing, product development, and customer support teams to ensure seamless customer experience.
Coach and guide junior sales staff to enhance their selling skills and performance`.split('.').filter(sentence => sentence.trim() !== '');

  // const jobResHeadings = Object.keys(jobRes as {});
  
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
          <h1 className='text-4xl lg:text-6xl text-center font-extrabold text-[#852882]'>Sales Manager</h1>
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
              <p> The Sales Manager role reports to the Head Commercial and is responsible for driving growth, acquiring and managing client accounts, and ensuring Digital PayGo’s digital solutions gain increased market penetration. This role requires a strategic approach to sales, understanding customer needs, fostering strong client relationships, and working closely with product teams to deliver and enhance fintech solutions tailored to the market. </p>
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
            <span className='font-bold'> no later than Saturday, 21st December, 2024.</span>
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