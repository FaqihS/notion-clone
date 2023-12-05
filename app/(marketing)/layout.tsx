import React from "react";
import Navbar from "./_components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
  <div className="dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="pt-40">
        {children}

      </main>

    </div>
  )
}
