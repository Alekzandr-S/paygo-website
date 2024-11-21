import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const LogQuery = (name : string, surname: string) => (
  <Html>
    <Head />
    <Preview>
      Ticket
    </Preview>
    <Tailwind>
      <Body style={main} className="bg={#ffffff}">
        <Container style={container}>
          <Container className="ml-0 flex">
            <Img
              className="flex items-start justify-start ml-0 pl-0 "
              src={'/static/logo_purple.png'}
              width="170"
              height="80"
              alt="DSSL Logo"
              style={logo}
            />
          </Container>
          {/* <Text >Hello {name} {surname}</Text> */}
          <Text className="text-start">
            Thank you for reaching out to us. We've successfully received your query and are currently reviewing the details you've provided.
            Our team is on it, and we aim to get back to you with a response or further questions within  2 business days. Your patience during this period is greatly appreciated.
          <Text className="text-start">
            Thank you for choosing Digital Paygo. We value your trust and are committed to providing you with the best service.
          </Text>
          <Text className="text-start">
            Best regards,
          </Text>
          <Text className="text-start">
            The Digital Paygo Support Team`
          </Text>
          </Text>
          <Hr style={hr} />
          <Text style={footer} className="text-center">
            Need help? Ask at support@digitalpaygo.com
          </Text>
          <Text style={footer} className="text-center">
            Or contact
          </Text>
          <Text style={footer} className="text-center">
            +260 95 0 551 919, +260 77 9 292 198, +260 76 1 000 528.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default LogQuery;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  // textAlign: 'center' as const,
};
