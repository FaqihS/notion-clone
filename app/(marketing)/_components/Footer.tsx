'use client'
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Footer(){
  return(
  <div className="flex items-center w-full animate-fade-in  p-6 bg-background dark:bg-[#1f1f1f] z-50">
      <Logo />
      <div className="md:ml-auto w-full  justify-between flex md:justify-end items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>

        <Button variant="ghost" size="sm">
          Terms & Condition
        </Button>
      </div>

    </div>
  )
}
