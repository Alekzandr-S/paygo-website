import LogQuery from "@/react-email-starter/emails/password-reset";
import { render } from "@react-email/components";

export async function POST(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed',{ status: 405});
  }

  try {
    const {name, email, surname, phone, description} = await req.json();
    const emailURL = process.env.EMAIL_URL_V2;

    if (!emailURL) {
      console.error('Email URL is not defined in environment variables');
      return new Response('Internal Server Error: SMS URL not defined.',{status: 500 });
    }

    const mail = {
      "emailTo": [`${email}`],
      "subject": "QUERY",
      "body": `${render(LogQuery(name, surname))}`,
      "appname": "Website"
    }

    const mailRes = await fetch(emailURL, {
      method: 'POST',
      body: JSON.stringify(mail)
    })

    // console.log('mail response', mailRes);

    const emailRes = await mailRes.json();

    // console.log('json response..........', emailRes);
    
    return new Response(JSON.stringify({ message: 'Query sent successfully' }), {
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