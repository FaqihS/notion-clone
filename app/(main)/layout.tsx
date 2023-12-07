'use client'
import { Spinner } from "@/components/provider/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation"
import { ReactNode } from "react";

export default function MainLayout({children}:{children:ReactNode}){
  const {isAuthenticated,isLoading} = useConvexAuth()
  if(!isAuthenticated){
    return redirect('/')
  }

  if(isLoading){
    return (
    <div className="w-full h-full flex justify-center items-center">
        <Spinner size="icon"/>
      </div>
    )
  }



  return (
  <div className="h-full flex dark:bg-[#1f1f1f]">
      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
