"use client"
import React from 'react'
import { signOut } from "next-auth/react";
import Image from 'next/image';


const Navbar = () => {
  const handleSignOut = () => {
    // Perform sign-out and redirect to the main page
    signOut({ callbackUrl: '/' }); // Redirects to the main page (page.js)
  };
  return (
    <div>
      <header className="bg-violet-100 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between" bis_skin_checked="1">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image
             className="dark:invert"
             src="/dash-logo.png"
             alt="Security"
             width={50}
             height={50}
             priority
           />
      <span className="ml-3 text-xl">PassManager</span>
    </a>

    <button className="inline-flex items-center bg-violet-50 border-0 py-1 px-3 focus:outline-none hover:bg-violet-900 hover:text-white rounded text-base mt-4 md:mt-0" onClick={handleSignOut}>Sign out
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}



export default Navbar
