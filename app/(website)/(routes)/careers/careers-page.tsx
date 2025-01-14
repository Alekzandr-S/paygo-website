'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedTextWord from '@/components/AnimatedTextWord';
import { Input } from '@/components/ui/input';

export type JobOffer = {
  role_id: number;
  role_title: string;
}

const JobsPage: React.FC<any> = ({jobOportunities = []}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<JobOffer[]>(jobOportunities);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = jobOportunities.filter((job: { role_title: string; }) =>
      job.role_title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 px-8 mb-8">
      <div className=' pb-4 mt-8'>
        <h2 className="font-bold text-[28px]/[30px] lg:text-[56px]/[66px] md:text-4xl text-center pb-8 w-full lg:max-w-lg mx-auto">
          <AnimatedTextWord text='Job Openings' />
        </h2>
      </div>
      <div className='pb-8'>
        <div className='flex justify-between items-start w-ful pb-8'>
          <p className='font-bold text-xl'>{filteredJobs.length} job(s) available</p>
          <Input
            type="text"
            placeholder="Search jobs..."
            className="px-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className={`grid ${filteredJobs.length !== 0 ?'grid-cols-3' : 'grid-cols-1'} gap-4 items-center`}>
          {filteredJobs.length === 0 ? (
            <p className="items-center">No job openings available at the moment. Please check back later.</p>
          ) : (
            filteredJobs.map((job) => (
                <Link key={job.role_id} href={`/careers/${job.role_id}`} passHref>
                  <div className=' rounded-3xl h-[50px]'>
                    <Image
                      src={'/images/jobs-1.svg'}
                      width="216"
                      height="417"
                      className={"object-contain"}
                      alt={job.role_title}
                      loading="eager"
                    />
                    <h3 className='p-4 w-[200px] text-center'>{job.role_title}</h3>
                  </div>
                </Link>
              ))
          )} 
        </div>
      </div>
    </main>
  );
};

export default JobsPage;
