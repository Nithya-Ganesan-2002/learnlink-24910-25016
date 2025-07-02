"use client";
import { useState } from "react";

export default function FeedbackPage() {
  const [form, setForm] = useState({
    recipient: "",
    type: "session",
    rating: 5,
    text: "",
  });

  // Placeholder for sample received feedback
  const feedbackList = [
    {
      by: "Sara",
      type: "mentor",
      rating: 5,
      text: "Insightful session on web dev, thanks!",
    },
    {
      by: "Mentor John",
      type: "session",
      rating: 4,
      text: "Great participation, keep practicing!",
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for feedback submission
    alert("Feedback sent!");
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-5">Feedback</h1>
      <form className="space-y-4 mb-8" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Feedback for</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            name="recipient"
            placeholder="Mentor/Learner Name"
            value={form.recipient}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block font-medium mb-1">Type</label>
            <select className="w-full border px-3 py-2 rounded-md" name="type" value={form.type} onChange={handleChange}>
              <option value="session">Session</option>
              <option value="mentor">Mentor</option>
              <option value="learner">Learner</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">Rating</label>
            <input
              type="number"
              min={1}
              max={5}
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Feedback</label>
          <textarea
            className="w-full border rounded-md px-3 py-2"
            name="text"
            rows={3}
            value={form.text}
            onChange={handleChange}
            placeholder="Write your feedback here..."
          />
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700" type="submit">
          Submit Feedback
        </button>
      </form>
      <h2 className="font-semibold text-lg mb-3">Received Feedback</h2>
      <div className="space-y-3">
        {feedbackList.map((f, i) => (
          <div key={i} className="border rounded-md shadow-sm p-4 bg-blue-50 flex flex-col gap-1">
            <span className="font-bold text-blue-800">{f.by}</span>
            <span className="text-sm text-neutral-500">({f.type} – {f.rating} stars)</span>
            <span>{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
