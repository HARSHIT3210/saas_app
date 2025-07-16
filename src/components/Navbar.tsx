import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            className="rounded-3xl"
            alt="logo"
            width={48}
            height={48}
            src="/images/another.png"
          />
          <h1 className="text-2xl font-semibold">Tutor Forge</h1>
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
