import CompanionForm from "@/components/CompanionForm";
import React from "react";

const NewCompanion = () => {
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
