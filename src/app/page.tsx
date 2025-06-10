import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-4xl font-semibold">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="AI Study Buddy"
          topic="Mathematics"
          subject="Algebra"
          duration="30"
          color="#fa877b"
        />
        <CompanionCard
          id="2"
          name="Language Coach"
          topic="Languages"
          subject="Spanish"
          duration="45"
          color="#81fa7b"
        />
        <CompanionCard
          id="3"
          name="Fitness Partner"
          topic="Health"
          subject="Workout"
          duration="20"
          color="#7bb7fa"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title={"Recently Completed Sessions"}
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
