'use client'
import Image from "next/image";
import { Poppins } from "next/font/google";

import {cn} from "@/lib/utils"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
})

export default function Logo (){
  return(
  <div className="hidden md:flex items-center gap-x-2">
      <Image
        src='/logo.svg'
        alt='logo'
        width="40"
        height="40"
        className="dark:hidden"
      />
      <Image
        src='/logo-dark.svg'
        alt='logo'
        width="40"
        height="40"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold",poppins.className)}>Jotion</p>
    </div>
  
  )

}