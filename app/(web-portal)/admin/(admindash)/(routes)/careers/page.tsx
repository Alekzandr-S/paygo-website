'use client'

import React from 'react'
import { DataTable } from './component/data-table'
import {  Career, columns } from './component/columns'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, Cross } from 'lucide-react'

async function getData(): Promise<Career[]> {
  // Fetch data from your API here.
  return [
    {
      role_id: "728ed52f",
      role_title: "Head Commercial",
      status: "pending",
      date_posted: "",
    },
    // ...
  ]
}

const Careers = async () => {
  const data = await getData();

  return (
    <>
      <div className="mt-8 mx-8 mb-8 flex justify-between">
        <div className="grid gap-1.5 leading-none">
            <label
                htmlFor="terms1"
                className="text-xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Careers
            </label>
            <p className="text-sm text-muted-foreground">
                Manage careers
            </p>
        </div>
        <Button variant='outline' asChild>
          <Link href={`/admin/post-job`}>
            <Cross className="mr-2 h-4 w-4" /> Add
          </Link>
        </Button>
      </div>
      <div className="mx-8">
          <hr/>
      </div>
    <div className='container mx-auto py-4'>
      <DataTable columns={columns} data={data} />
    </div>
    </>
  )
}

export default Careers