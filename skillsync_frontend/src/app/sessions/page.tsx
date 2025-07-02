"use client";
import { useState } from "react";

export default function SessionsPage() {
  const [form, setForm] = useState({
    name: "",
    topic: "",
    type: "group",
    as: "learner",
  });
  const [joinCode, setJoinCode] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSessionCreate(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: API integration goes here
    alert("Session created!");
  }
  function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: session join logic
    alert("Joined session!");
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-5">Sessions</h1>

      <section className="mb-10">
        <h2 className="font-semibold text-lg mb-3">Create a Session</h2>
        <form className="space-y-4" onSubmit={handleSessionCreate}>
          <div>
            <label className="block font-medium mb-1">Session Name</label>
            <input
              className="w-full border rounded-md px-3 py-2"
              name="name"
              placeholder="Ex: 'AI Bootcamp'"
              value={form.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Topic</label>
            <input
              className="w-full border rounded-md px-3 py-2"
              name="topic"
              placeholder="Ex: Introduction to AI"
              value={form.topic}
              onChange={handleInput}
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block font-medium mb-1">Session Type</label>
              <select className="w-full border rounded-md px-3 py-2" name="type" value={form.type} onChange={handleInput}>
                <option value="group">Group</option>
                <option value="1on1">1-on-1</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">I am a...</label>
              <select className="w-full border rounded-md px-3 py-2" name="as" value={form.as} onChange={handleInput}>
                <option value="learner">Learner</option>
                <option value="mentor">Mentor</option>
              </select>
            </div>
          </div>
          <button className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-600 mt-2" type="submit">
            Create Session
          </button>
        </form>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-3">Join Session</h2>
        <form className="flex gap-3 items-end" onSubmit={handleJoin}>
          <input
            className="border rounded-md px-3 py-2 flex-1"
            placeholder="Enter session code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700" type="submit">
            Join
          </button>
        </form>
      </section>
    </div>
  );
}
