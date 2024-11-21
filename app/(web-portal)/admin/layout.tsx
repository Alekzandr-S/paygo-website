"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
// import "../styles/index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import HeaderDesktop from "../components/header-desktop";
// import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({children,}: {children: React.ReactNode;}) {
  // const session = await auth();
  //   const firstname = session?.user?.firstname ?? '';
  //   const lastname = session?.user?.lastname ?? '';
    
  //   const getUserInitials = () => {

  //       if (firstname && lastname) {
  //           const initials = `${firstname.charAt(0)}${lastname.charAt(0)}`;
  //           return initials.toUpperCase();
  //       }
  //       return "";
  //   };
  return (
    <html  suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={` ${inter.className}`}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


