import { auth } from "@/auth";
// import { logActivity } from "@/lib/activityLog";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed',{ status: 200});
  }

  try {
    const {roleTitle, aboutRole, expectations, qualifications} = await req.json();
    const currentDate = new Date();
    await prisma.jobrole.create({
      data: {
        role_title: roleTitle,
        about_role: aboutRole,
        expectations: expectations,
        skills_and_competencies: '',
        qualifications: qualifications,
        date_posted: currentDate.toISOString()
      }
    })
    // logActivity({
    //   userId: session.user?.name,
    //   action: 'job_post',
    //   details: { jobId: createdJob.role_id, title: createdJob.role_title }, // Assuming newJob contains job details
    // });
    return new Response(JSON.stringify({ message: 'Job created successfully.' }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error.', {status: 500});
  }
} 