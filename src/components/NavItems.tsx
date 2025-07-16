"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href && "text-primary font-semibold hover:underline",
            "hover:text-primary hover:font-semibold hover:underline"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
