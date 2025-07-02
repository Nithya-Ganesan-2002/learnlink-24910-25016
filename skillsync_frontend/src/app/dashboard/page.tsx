"use client";
import Link from "next/link";

const cardLinks = [
  {
    href: "/profile",
    label: "Manage your Profile",
    description: "View and update your info, role, and interests.",
  },
  {
    href: "/sessions",
    label: "Learning Sessions",
    description: "Create or join sessions as learner or mentor.",
  },
  {
    href: "/progress",
    label: "Track your Progress",
    description: "Check learning history, achievements, and streaks.",
  },
  {
    href: "/feedback",
    label: "Feedback",
    description: "View & give feedback on mentors or learning.",
  },
  {
    href: "/recommendations",
    label: "Recommendations",
    description: "Personalized mentor and topic recommendations.",
  },
];

export default function DashboardPage() {
  // placeholder name for now
  const username = "Alex";
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Welcome back, {username}!</h1>
      <p className="text-neutral-500 mb-8">Your learning journey at a glance.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardLinks.map((link) => (
          <Link href={link.href} key={link.href} className="block group">
            <div className="rounded-xl border shadow px-6 py-6 bg-white hover:bg-blue-50 hover:border-blue-300 transition">
              <div className="text-lg font-semibold mb-2 group-hover:text-blue-700">{link.label}</div>
              <div className="text-neutral-500 text-sm">{link.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
