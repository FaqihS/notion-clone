'use client'

import useScrollTop from "@/hooks/useScrollTop"
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar(){
  const isScrolled = useScrollTop();


  return(
  <div className={cn(
      "z-50 fixed bg-background dark:bg-[#1f1f1f] top-0 w-full  flex items-center p-4",
      isScrolled && "border-b shadow-sm "
    )}>
      <Logo />
      <div className="flex justify-between w-full items-center gap-x-2 md:ml-auto md:justify-end">
        <ModeToggle />
        <Button>
          Login
        </Button>
      </div>
    </div>
  )
}
