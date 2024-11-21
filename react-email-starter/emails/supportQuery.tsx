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

export const LogQuery = (discription: string) => (
  <Html>
    <Head />
    <Preview>
      Ticket
    </Preview>
    <Tailwind>
      <Body style={main} className="bg={#ffffff}">
        <Container style={container}>
          <Img
            src={'/static/zanaco_gear.png'}
            width="170"
            height="50"
            alt="Website"
            style={logo}
          />
          <Text style={paragraph}>Hello Support</Text>
          <Text style={paragraph}>
            Kindly find for your attention below.
          </Text>
          <Text style={paragraph}>
            {discription}
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
