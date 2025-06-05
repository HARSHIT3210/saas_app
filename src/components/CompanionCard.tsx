import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: string;
  color: string;
}

export default function CompanionCard({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center p-4">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="Companion Icon"
            width={20}
            height={20}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          className="bg-white rounded-full"
          src={"/icons/clock.svg"}
          alt="duration"
          width={14.5}
          height={14.5}
        />
        <p className="text-sm"> {duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
}
