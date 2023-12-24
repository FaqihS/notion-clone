'use client'
import { Spinner } from "@/components/provider/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation"
import { ReactNode } from "react";
import Navigation from "./_components/Navigation";
import SearchCommand from "@/components/SearchCommand";

export default function MainLayout({children}:{children:ReactNode}){
  const {isAuthenticated,isLoading} = useConvexAuth()

  if(isLoading){
    return (
    <div className="w-full h-full flex justify-center items-center">
        <Spinner size="lg"/>
      </div>
    )
  }
  if(!isAuthenticated){
    return redirect('/')
  }



  return (
  <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation/>
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand  />
        {children}
      </main>
    </div>
  )
}
