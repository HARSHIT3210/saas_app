import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <main className="flex w-1/2 items-start justify-start">
      <article className="w-full gap-4 flex flex-col mb-20">
        <h1>Build Your Own Companion</h1>
        <CompanionForm />
      </article>
    </main>
  );
};
export default NewCompanion;
