"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "Alex Doe",
    email: "alex@skillsync.com",
    bio: "",
    role: "learner",
    skills: "",
    interests: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for saving profile changes
    alert("Profile updated!");
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-5">My Profile</h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Role</label>
          <select className="w-full border px-3 py-2 rounded-md" name="role" value={form.role} onChange={handleChange}>
            <option value="learner">Learner</option>
            <option value="mentor">Mentor</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Skills (comma separated)</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="e.g., Python, Web Design"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Interests</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            name="interests"
            value={form.interests}
            onChange={handleChange}
            placeholder="e.g., AI, Public Speaking"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            className="w-full border px-3 py-2 rounded-md"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us a little about yourself..."
          />
        </div>
        <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md mt-3 hover:bg-blue-700" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}
