
import React from 'react'
import JobDetails from './job';
import { prisma } from '@/lib/prisma';

export default async function lab({ params }: { params: { slug: string} }) {
  const getJob = async () => {
    try {
      const responseData = await fetch(`http://localhost:3000/api/get-job?id=${params.slug}`, {
        method: 'GET',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json'},
      });
      const response = await responseData.json();
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      return response.openJob
    } catch (error) {
      console.error("Fetching job failed:", error);
      return null
    }
  };
  const data = await getJob();

  if (!data) {
    return <div className="flex justify-center">Job data not found.</div>;
  }

  const getJobResponsibilities = async () => {
    if(!data || !data.role_id) {
      console.error("No valid job data found.");
      return null;
    }

    const jobResponsibilities = await prisma.job_responsibilities.findUnique({
      where:{
         job_role_id: data.role_id,
      }
    })
    return jobResponsibilities;
  }
  
  const jobResponsibilities = await getJobResponsibilities();
  return (
    <div>
      <JobDetails job={data} jobResponsibilities={jobResponsibilities}/>
    </div>
  )
}
