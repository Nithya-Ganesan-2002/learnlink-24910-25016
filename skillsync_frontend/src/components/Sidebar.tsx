"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserIcon,
  UsersIcon,
  ClipboardIcon,
  PresentationChartBarIcon,
  StarIcon,
  SparklesIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

// Color palette for SkillSync
const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: PresentationChartBarIcon },
  { href: "/profile", label: "Profile", icon: UserIcon },
  { href: "/sessions", label: "Sessions", icon: UsersIcon },
  { href: "/progress", label: "Progress", icon: ClipboardIcon },
  { href: "/feedback", label: "Feedback", icon: StarIcon },
  { href: "/recommendations", label: "Recommendations", icon: SparklesIcon },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-60 bg-[#f8fafd] border-r border-[#e5e7eb] flex flex-col justify-between min-h-screen">
      <div>
        <div className="py-6 px-6 font-bold text-lg flex items-center gap-2 tracking-wide">
          <span className="text-sky-600 font-black text-2xl">⟠</span>
          <span>SkillSync</span>
        </div>
        <nav className="mt-6 flex flex-col gap-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link href={href} key={href}>
              <span
                className={`flex items-center gap-3 px-6 py-2 rounded-md text-base cursor-pointer transition font-medium 
                  ${
                    path.startsWith(href)
                      ? "bg-blue-100 text-blue-700"
                      : "text-neutral-700 hover:bg-blue-50"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-6">
        <button
          className="w-full flex items-center gap-3 px-4 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition font-medium"
          // TODO: connect logout handler
          type="button"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
