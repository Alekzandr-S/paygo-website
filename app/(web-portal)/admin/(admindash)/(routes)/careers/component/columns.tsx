"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type Career = {
  role_id: string
  role_title: string
  date_posted: string
  status: string
  about_role?: string
  expections?: string
  qualifications?: string
}

export const columns: ColumnDef<Career>[] = [
  { accessorKey: "role_id", header: "ID",},
  { accessorKey: "role_title", header: "Role Name",},
  { accessorKey: "status", header: "Status",},
  { accessorKey: "date_posted", header: "Date Posted",},
]
