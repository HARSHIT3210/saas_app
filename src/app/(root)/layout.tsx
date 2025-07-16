import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const bricolage = Poppins({
  weight: "300",
});

export const metadata: Metadata = {
  title: "TutorForge",
  description: "Create your own AI tutors from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} bg-[#e3a1fd] antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          <Navbar />
          <Toaster />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
