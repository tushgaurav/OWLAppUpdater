import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RiSettings5Fill } from "react-icons/ri";
import { TbAppsFilled } from "react-icons/tb";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orangewood Labs Application Update Utility",
  description: "Update and manage applications deployed on Orangewood Labs' platform.",
};

function TopNav() {
  return (
    <nav className="bg-gradient-to-r from-[#4E144F] to-[#C6494B] p-2 sticky top-0">
      <div className="flex justify-between px-2">
        <img
          className="h-6 mt-1"
          src="/owl_logo.png"
          alt="Orangewood Labs"
        />

        <div className="font-medium text-xl">Update Utility</div>
      </div>
    </nav>
  );
}

function SideNav() {
  return (
    <div className="fixed h-full bg-gradient-to-b from-[#50154F] to-[#C64A4B] p-4 w-min ">
      <div className="flex flex-col gap-4 text-xl">
        <Link href="/">
          <RxHamburgerMenu />
        </Link>
        <Link href="/apps">
          <TbAppsFilled />
        </Link>
        <Link href="/settings">
          <RiSettings5Fill />
        </Link>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <TopNav />
        <SideNav />
        <div className="ml-14 p-4">
          {children}
        </div>

      </body>
    </html>
  );
}
