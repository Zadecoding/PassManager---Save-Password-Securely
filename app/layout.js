import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PassManager",
  description: "Passmanager which saves your passwords.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID"
     crossorigin="anonymous"></script>
      </head>
      <SessionWrapper>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        
      </body>
      </SessionWrapper>
    </html>
  );
}
