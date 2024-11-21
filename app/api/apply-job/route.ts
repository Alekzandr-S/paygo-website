import { prisma } from "@/lib/prisma";
import { saveFile } from "@/lib/saveFile";

export async function POST(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed',{ status: 400});
  }

  try {
    const formData = await req.formData();
    const role_applied = formData.get('id');
    const cvFile = formData.get('cv') as File;
    const nrcFile = formData.get('nrc') as File;
    const coverLetterFile = formData.get('coverLetter') as File;

    //Save files to uploads dir
    const cvPath = await saveFile(cvFile, 'uploads');
    const nrcPath = await saveFile(nrcFile, 'uploads');
    const coverLetterPath = await saveFile(coverLetterFile, 'uploads');
    
    const createdDocument = await prisma.documents.create({
      data: {
        cv: cvPath,
        nrc: nrcPath,
        application_letter: coverLetterPath
      }
    })

    await prisma.applicants.create({
      data: {
        first_name: formData.get('first_name')?.toString() || '',
        last_name: formData.get('surname')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        phone: formData.get('phone')?.toString() || '',
        role_applied: role_applied ? parseInt(role_applied.toString(), 10) : null,
        document_id: createdDocument.document_id
      }
    })

    return new Response(JSON.stringify({ message: 'Files uploaded successfully' }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error.', { status: 500 });
  }
}