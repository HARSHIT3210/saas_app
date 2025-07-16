import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-purple-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">TutorForge</h1>
        <p className="text-xl text-gray-600 mb-6">
          Forge your own AI tutor. Learn your own way.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            <Link href={"/home"}>Explore More</Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "🛠️",
              title: "Pick a Subject",
              desc: "Choose from coding, math, science, and more.",
            },
            {
              icon: "🧠",
              title: "Customize Tutor",
              desc: "Set the voice, teaching style, and personality.",
            },
            {
              icon: "📚",
              title: "Start Learning!",
              desc: "Begin interactive lessons with your AI tutor.",
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Companions */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Companions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Coding Tutor", desc: "Learn programming fundamentals 💻" },
            {
              name: "Math Tutor",
              desc: "Master algebra, calculus, and more ➕",
            },
            {
              name: "Language Tutor",
              desc: "Practice Spanish, French, and more 🈯",
            },
          ].map((companion, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{companion.name}</h3>
              <p className="text-gray-600">{companion.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Feature Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🎓",
              title: "Personalized Teaching Style",
              desc: "Tailor lessons to suit your needs.",
            },
            {
              icon: "💬",
              title: "Voice + Text Support",
              desc: "Choose your preferred mode of interaction.",
            },
            {
              icon: "📊",
              title: "Progress Tracking",
              desc: "Track your learning journey.",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-10">
        © {new Date().getFullYear()} TutorForge. All rights reserved.
      </footer>
    </main>
  );
}
