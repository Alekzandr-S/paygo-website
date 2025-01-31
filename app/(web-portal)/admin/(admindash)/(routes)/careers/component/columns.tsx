"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

export type Career = {
  role_id: string
  role_title: string
  date_posted: string
  status: string
  about_role?: string
  deadline?: string
  expections?: string
  qualifications?: string
}

const UserActionCell = ({row}: {row: any}) => {
  const router = useRouter();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/")}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/")}>Delete</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/")}>Post</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <SearchTransactionDialog transaction={selectedTransaction} open={dialogOpen} onClose={() => setDialogOpen(false)} /> */}
    </>
  );
}
export const columns: ColumnDef<Career>[] = [
  { accessorKey: "role_id", header: "ID",},
  { accessorKey: "role_title", header: "Role Name",},
  { accessorKey: "status", header: "Status",},
  { accessorKey: "date_posted", header: "Date Posted",},
  { accessorKey: "deadline", header: "Deadline",},
  {
    id: 'actions',
    header: 'Actions',
    cell: UserActionCell
  }
]
