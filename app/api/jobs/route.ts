import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  if(req.method != 'GET'){
    return Response.json({message: 'Method not allowed', status: 401})
  }

  try {
    const openJobs = await prisma.jobrole.findMany({
      where: {
        status: 'open',
      },
    });
    
    return Response.json({openJobs, status: 200});
  } catch (error) {
    console.error('Error processing request:', error);
    return Response.json({message: 'Internal server error', status: 500})
  }
}
