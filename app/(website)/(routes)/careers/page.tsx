import React from 'react'
import JobsPage, { JobOffer } from './careers-page'
import { jobOportunities } from './utils'

const page = async () => {
  const jobs: JobOffer[] = [];
  return (
    <div>
      <JobsPage jobOportunities={jobs} />
    </div>
  )
}

export default page