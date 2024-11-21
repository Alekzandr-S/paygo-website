// import AnimatedTextWord from '@/components/AnimatedTextWord';
// import { Card } from '@/components/ui/card';
// import { fadeIn } from '@/hooks/variants';
// import { motion, useInView } from 'framer-motion';
// import Image from 'next/image';
// import React, { useRef } from 'react'

// const Values = () => {
//   const values = [
//     {
//       title: 'Passion',
//       description: 'Passion is a core part of the our company culture. It\'s the enthusiasm that team members bring to their work, often fueled by the belief that they are part of something transformative in the financial industry.',
//     },
//     {
//       title: 'Resilience',
//       description: 'The financial market can be unpredictable. Our resilience is what drives us to withstand economic downturns, market fluctuations, and shifts in consumer behaviour while maintaining service continuity and reliability.',
//     },
//     {
//       title: 'Innovation',
//       description: 'Innovation is at the heart of our company. We leverage technology to improve financial services and creating new opportunities is what sets us apart.',
//     },
//     {
//       title: 'Teamwork',
//       description: 'Teamwork is essential in our environment. We collaborate across our departments to allow for the exchange of ideas and drive the company toward its goals.',
//     },
//     {
//       title: 'Ethics',
//       description: 'Ethics are fundamental. As we handle sensitive financial data, maintaining high ethical standards is crucial for trust and compliance.',
//     },
//   ];
  
//   return (
//     <div className='flex flex-col gap-4'>
//       <div className='grid grid-cols-2'>
//         <div className='flex flex-col items-start justify-center pt px-16'>
//           <div className='pb-7'>
//             <h3 className=' text-[30px]/[32px] text-test-foreground lg:text-[56px]/[66px] font-bold'>
//               <AnimatedTextWord text='Our' />
//               <span className='text-[#85288]'>
//                 <AnimatedTextWord text='Values'/>
//               </span>
//             </h3>
//           </div>
//           <div >
//             <p className=' '>We approach each day with purpose, dedicated to embodying our values in all facets of our collaborative efforts. We are guided by 5 core values:</p>
//           </div>
//         </div>
//         <motion.div 
//           className='pt-16'
//           variants={fadeIn('right', 0.3)}
//           initial="hidden"
//           whileInView="show"
//           exit="hidden"
//         >
//           <Image 
//             src='/images/team-page/undraw_social_interaction_re_dyjh.svg' 
//             alt='Values illustration' 
//             width={450} 
//             height={450}
//           >
//           </Image>
//         </motion.div>
//       </div>
//         <div className='grid grid-rows-5 gap-4 pt-12 p-16'>
//         {values.map((value, index) => {
//             const ref = useRef(null);
//             const inView = useInView(ref, { once: true });

//             return (
//               <Card className='p-8'>
//                 <motion.div
//                   key={index}
//                   ref={ref}
//                   initial="hidden"
//                   animate={inView ? "show" : "hidden"}
//                   exit="hidden"
//                   variants={fadeIn('up', index * 0.2)}
//                 >
//                   <h3 className='text-2xl font-bold'>{value.title}</h3>
//                   <p className=''>{value.description}</p>
//                 </motion.div>
//               </Card>
//             );
//           })}
//         </div>
//     </div>
//   )
// }

// export default Values

// Values.tsx
import React from 'react';
import AnimatedTextWord from '@/components/AnimatedTextWord';
import { fadeIn } from '@/hooks/variants';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import ValueCard from './components/ValueCard';  // <-- Import the ValueCard component

// Define the Value type
interface Value {
  title: string;
  description: string;
}

const Values: React.FC = () => {
  const values: Value[] = [
    {
      title: 'Passion',
      description: 'Passion is a core part of our company culture. It\'s the enthusiasm that team members bring to their work, often fueled by the belief that they are part of something transformative in the financial industry.',
    },
    {
      title: 'Resilience',
      description: 'The financial market can be unpredictable. Our resilience is what drives us to withstand economic downturns, market fluctuations, and shifts in consumer behaviour while maintaining service continuity and reliability.',
    },
    {
      title: 'Innovation',
      description: 'Innovation is at the heart of our company. We leverage technology to improve financial services and creating new opportunities is what sets us apart.',
    },
    {
      title: 'Teamwork',
      description: 'Teamwork is essential in our environment. We collaborate across our departments to allow for the exchange of ideas and drive the company toward its goals.',
    },
    {
      title: 'Ethics',
      description: 'Ethics are fundamental. As we handle sensitive financial data, maintaining high ethical standards is crucial for trust and compliance.',
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className='flex flex-col gap-4 pb-24 pt-16 lg:pt-0'>
      <div className='flex flex-col-reverse lg:grid lg:grid-cols-2'>
        <motion.div
          className='pt-16'
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: true }} // Ensure animation triggers only once
        >
          <Image
            src='/images/team-page/undraw_social_interaction_re_dyjh.svg'
            alt='Values illustration'
            width={450}
            height={450}
            // Ensure Image is self-closing
          />
        </motion.div>
        <div className='flex flex-col items-start justify-center px-16'>
          <div className='pb-4'>
            <h3 className='font-bold text-3xl lg:leading-tight xl:text-4xl xl:leading-tight text-center lg:max-w-lg mx-auto '>
              <AnimatedTextWord className='flex flex-wrap' text='Our Values' />
              
            </h3>
          </div>
          <div>
            <p>
              We approach each day with purpose, dedicated to embodying our values in all facets of our collaborative efforts. We are guided by 5 core values:
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className='grid grid-rows-5 gap-4 pt-12 px-16'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // Ensure animation triggers only once
      >
        {values.map((value, index) => (
          <ValueCard
            key={value.title} // <-- Use a unique key
            title={value.title}
            description={value.description}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Values;
