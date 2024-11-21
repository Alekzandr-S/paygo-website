import { NextResponse } from "next/server";
// import bcrypt from 'bcryptjs';
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed',{ status: 200});
  }

  try {
    const{firstName, surname, email, password, role} = await req.json();

    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        first_name: firstName,
        surname: surname,
        email: email,
        password: hashedPassword,
        role: role,
      }
    })

    const emailURL = process.env.EMAIL_URL;

    if (!emailURL) {
      console.error('Email URL is not defined in environment variables');
      return new Response('Internal Server Error: SMS URL not defined.',{status: 500 });
    }
     
    const emailResponse = await fetch(emailURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        appname: 'Digital Paygo Website',
        to: email,
        subject: 'Account Creation Successful!', 
        body: 
        `Hello ${firstName} ${surname},

        Welcome to Digital Paygo! We're excited to have you on board. Your account has been successfully created
        
        If you have any questions or need assistance, feel free to reach out to our support team.
        
        Best Regards,
        The Digital Paygo Team`
      })
    })

    return NextResponse.json({ message: 'Success' });
  }catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error.', { status: 500 });
  }
  
}