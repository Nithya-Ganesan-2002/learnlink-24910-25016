"use client";
export default function RecommendationsPage() {
  // Sample recommendations
  const recs = [
    {
      title: "Mentor: Jane Smith",
      desc: "Expert in JavaScript, available for 1on1 sessions.",
    },
    {
      title: "Topic: Introduction to AI",
      desc: "Suggested based on your recent progress.",
    },
    {
      title: "Mentor: Rahul G.",
      desc: "Data Science | Machine Learning workshops",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Recommendations</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recs.map((r, i) => (
          <div key={i} className="rounded-md shadow border bg-white px-5 py-6 flex flex-col gap-2">
            <div className="font-semibold text-blue-700">{r.title}</div>
            <div className="text-neutral-600 text-sm">{r.desc}</div>
            <button className="w-fit mt-3 px-4 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-neutral-400">More recommendations coming soon!</div>
    </div>
  );
}
