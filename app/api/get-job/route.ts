import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  // Parse URL to extract search parameters
  const url = new URL(req.url);
  const idStr = url.searchParams.get("id");

  // Validate the method and handle accordingly
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ message: "Method not allowed", status: 400 }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const id = idStr ? parseInt(idStr, 10) : null;
    if (id === null || isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID format" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const openJob = await prisma.jobrole.findUnique({
      where: {
        role_id: id,
        status: "open",
      },
    });
    return new Response(JSON.stringify({ openJob, status: 200 }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error", status: 500 }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}


// import { prisma } from "@/lib/prisma";

// export async function GET(req: Request, res: Response) {
//   if(req.method != 'GET') {
//     return Response.json({message: 'Method not allowed', status: 400})
//   }
//   try {
//     const {idStr} = await req.json();
//     // const { searchParams } = new URL(req.url)
//     // const idStr = searchParams.get('id')

//     const id = idStr ? parseInt(idStr, 10) : null;
//     if (id === null || isNaN(id)) {
//       return Response.json({ error: "Invalid ID format" });
//     }

//     const openJob = await prisma.jobrole.findUnique({
//       where: {
//         role_id: id,
//         status: 'open',
//       },
//     })

//     return Response.json({openJob, status: 200});
//   } catch (error) {
//     console.error('Error processing request:', error);
//     return Response.json({message:'Internal Server Error.', status: 500});
//   }
// }