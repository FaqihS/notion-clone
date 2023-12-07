"use client";

import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/provider/spinner";
import Link from "next/link";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const isScrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 fixed bg-background dark:bg-[#1f1f1f] top-0 w-full  flex items-center p-4",
        isScrolled && "border-b shadow-sm "
      )}
    >
      <Logo />
      <div className="flex justify-between w-full items-center gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner/>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button  size="sm">
                Get Jotion Free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
        <Button variant="ghost" size="sm" asChild>
            <Link href='/documents'>Enter Jotion</Link>
          </Button>
            <UserButton  afterSignOutUrl="/"/>
            </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
