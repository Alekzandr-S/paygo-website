import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { prisma } from "./lib/prisma";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
     email: {label: "Email",},
     password: {label: "Password",type: "password",},
  },
  async authorize(credentials) {
    const {email, password} = credentials as {email: string, password: string};

    if (!email || !password) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: {email},
      select: {
        email: true,
        password: true,
      }
    })

    if(!user || !user.password) {
      return null;
    }
    
    const isPasswordValid = bcrypt.compare(password, user?.password);

    if (!isPasswordValid) {
      return null;
    }
    // if(email === "alexander@digitalpaygo.com" && password === "password123")
    //   return {
    //     name: "L",
    // };
    // else return null;

    return {
      name: "Administrator"
    }
  }
});

const config = {
  providers: [credentialsConfig],
  pages: { signIn: '/admin'},
  session: {strategy: 'jwt'}

} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(config);