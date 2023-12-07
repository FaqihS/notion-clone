import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poison",
  description: "Notion-Clone",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const className =inter.className + " dark:animate-fade-in-light animate-fade-in"
  console.log(className)
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={className}>
        {/* <div className=""> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
          storageKey="jotion-theme"
        >
          {children}
        </ThemeProvider>
        {/* </div> */}
      </body>
    </html>
  );
}
