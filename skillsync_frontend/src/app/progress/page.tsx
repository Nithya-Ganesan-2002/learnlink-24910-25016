"use client";
export default function ProgressPage() {
  // Sample stats
  const stats = [
    { label: "Sessions Completed", value: 12 },
    { label: "Active Streak", value: "6 days" },
    { label: "Total Hours", value: 24.5 },
    { label: "Skills Mastered", value: 3 },
  ];
  // Placeholder for chart
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Progress Overview</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg shadow border px-5 py-4 bg-white text-center">
            <div className="text-3xl font-semibold text-blue-600 mb-1">{s.value}</div>
            <div className="text-sm text-neutral-600">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="font-semibold mb-2">Learning Progress (Chart coming soon)</h2>
        <div className="w-full h-48 bg-blue-50 rounded-xl flex items-center justify-center text-neutral-400 text-xl font-mono">
          [Progress chart placeholder]
        </div>
      </div>
    </div>
  );
}
