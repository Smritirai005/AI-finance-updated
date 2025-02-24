import React from 'react'
import { SignedIn, SignedOut,SignInButton,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="fealth Logo"
            width={400}
            height={150}
            className="h-12 w-auto object-contain"
          />
        </Link>
      
      </nav>
  
       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      
    </div>
  )
}

export default Header
