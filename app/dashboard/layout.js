import React from 'react'
import Navbar from '../components/Navbar'
import { Geist, Geist_Mono } from "next/font/google";
import Manager from '../components/Manager';
import Footer from '../components/Footer';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export const metadata = {
    title: "Dashoard- Passmanager",
    description: "The Dashboard of Passmanger which prevents your passwords from hacker or crackers and Yaah! you do not need to remeber your password.",
  };

export default function DashboardLayout({ children }) {
    return (
      <html lang="en">
        
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <Navbar/>
            <div className='min-h-[80vh]  bg-violet-100'>
            <Manager/>

            </div>
            <Footer/>
          {children}
        
        </body>
        
      </html> 
    )
}

