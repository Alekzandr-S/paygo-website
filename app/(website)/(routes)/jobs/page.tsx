import React from 'react'
import JobsPage, { JobOffer } from './components/jobsPage/page'

const getJobs = async (): Promise<JobOffer[]> =>  {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/jobs';

  try {
    const responseData = await fetch( apiUrl, {
      method: 'GET',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json'},
    });
    const response = await responseData.json();
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return response.openJobs as JobOffer[];
  } catch (error) {
    console.error("Fetching jobs failed:", error);
    return [];
  }
};

export default async function Page() {
  const jobs: JobOffer[] = await getJobs();
  return (
    <div>
      <JobsPage jobs={jobs}/> 
    </div>
  );
}
