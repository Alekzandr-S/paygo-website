import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed',{ status: 400});
  }
  try {
    const {roleTitle, roleDescription, status} = await req.json();
    const currentDate = new Date();
    const createJob = await prisma.jobrole.create({
      data: {
        role_title: roleTitle,
        about_role: '',
        qualifications: '',
        skills_and_competencies: '',
        
        expectations: roleDescription,
        date_posted: currentDate.toISOString(),
        status: status,
      }
    })
    return NextResponse.json({message: 'Success', status: 203});
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error.', {status: 500});
  }
} 