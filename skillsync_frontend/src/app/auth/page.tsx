"use client";
import { useState } from "react";

//... minimal form validation, real integration to be handled later
const tabData = [
  { key: "login", label: "Login" },
  { key: "register", label: "Register" },
];

export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirm: "",
    role: "learner",
  });
  const [error, setError] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleTabChange(key: string) {
    setError("");
    setTab(key);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!formState.email.includes("@") || formState.password.length < 6) {
      setError("Please enter a valid email & password.");
      return;
    }
    if (tab === "register" && formState.password !== formState.confirm) {
      setError("Passwords do not match.");
      return;
    }
    // Placeholder for integration
    alert(tab === "login" ? "Welcome back!" : "Account created!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12">
      <div className="w-full max-w-md shadow-lg rounded-xl border p-8 bg-white space-y-6">
        <div className="flex justify-center gap-1 mb-8">
          {tabData.map(({ key, label }) => (
            <button
              key={key}
              className={`flex-1 px-4 py-2 rounded-t-md font-medium transition-colors duration-150 ${
                tab === key
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
              onClick={() => handleTabChange(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="font-medium text-sm mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={formState.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="font-medium text-sm mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={formState.password}
              onChange={handleInput}
            />
          </div>
          {tab === "register" && (
            <>
              <div>
                <label className="font-medium text-sm mb-1 block">Confirm Password</label>
                <input
                  type="password"
                  name="confirm"
                  required
                  minLength={6}
                  className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition"
                  value={formState.confirm}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="font-medium text-sm mb-1 block">Register as</label>
                <select
                  className="w-full border px-3 py-2 rounded-md"
                  name="role"
                  value={formState.role}
                  onChange={handleInput}
                >
                  <option value="learner">Learner</option>
                  <option value="mentor">Mentor</option>
                </select>
              </div>
            </>
          )}
          {error && <div className="text-red-600 text-sm pt-1">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold mt-3 hover:bg-blue-700 transition"
          >
            {tab === "login" ? "Login" : "Register"}
          </button>
        </form>
        <div className="text-center text-xs text-neutral-500 mt-6">
          {tab === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button className="text-blue-600 hover:underline" onClick={() => handleTabChange("register")}>
                Register
              </button>
            </>
          ) : (
            <>
              Already registered?{" "}
              <button className="text-blue-600 hover:underline" onClick={() => handleTabChange("login")}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
