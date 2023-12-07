'use client'

import { Spinner } from "@/components/provider/spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Heading (){
  const {isAuthenticated,isLoading} = useConvexAuth()
  return(
  <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold animate-fade-in-up [animation-delay:.6s]">
        Your Ideas, Documents & Plans. Unified. Welcome to <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium animate-fade-in-up [animation-delay:1s]">Jotion is connected workspace where <br/>
        better, faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size='icon'/>
        </div>
      )}
      { !isAuthenticated && !isLoading && (
      <div>
            <SignInButton mode="modal">
              <Button>
                Join Jotion<ArrowRight className="h-4 w-4 ml-2"/>
              </Button>
            </SignInButton>
        </div>
      )

      }
      { isAuthenticated && !isLoading && (

      <Button className="animate-fade-in-up [animation-delay:1.4s]" asChild>
          <Link href="/documents">
            Enter Jotion <ArrowRight className="h-4 w-4 ml-2"/>
          </Link>
      </Button>
      )

      }

    </div>
  )

} 
