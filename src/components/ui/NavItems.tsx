"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Companions", href: "/companions" },
  { label: "Sign In", href: "/sign-in" },
];
export const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link href={href} key={label} className={cn(pathname === href && "text-primary cursor-pointer font-semibold")}>
          {label}
        </Link>
      ))}
    </nav>
  );
};
