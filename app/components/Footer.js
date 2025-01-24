"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-violet-400 text-white p-5 bottom-0 w-full fixed'>
      <div className='flex items-center justify-center gap-1' >
       <p>Created By Zade Coding. </p> <Image
                    className="dark:invert"
                    src="/heart.gif"
                    alt="love"
                    width={30}
                    height={30}
                    priority
                  />
      </div>
    </div>
  )
}

export default Footer
