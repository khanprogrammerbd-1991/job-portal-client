"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignInForm() {
  const router = useRouter();

  const [role, setRole] = useState("job_seeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: authError } = await authClient.signIn.email({
      email: email.trim(),
      password,
    });

    if (authError) {
      setError(authError.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    console.log(`Signed in as ${role}:`, data?.user?.email || email.trim());

    if (role === "admin") {
      router.push("/admin/dashboard");
    } else if (role === "recruiter") {
      router.push("/recruiter/dashboard");
    } else {
      router.push("/");
    }

    router.refresh();
  }

  async function handleGoogleLogin() {
    setError("");
    setLoading(true);

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {error && (
        <div role="alert" className="alert alert-error text-sm py-2.5 rounded-xl">
          <span>{error}</span>
        </div>
      )}

      <div className="form-control">
        <label htmlFor="role" className="label py-1">
          <span className="label-text text-gray-300">Role</span>
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="select select-bordered w-full bg-[#121214] border-white/15 text-white rounded-xl"
        >
          <option value="job_seeker">Job Seeker</option>
          <option value="recruiter">Recruiter</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label py-1">
          <span className="label-text text-gray-300">Email</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="input input-bordered w-full bg-[#121214] border-white/15 text-white rounded-xl"
        />
      </div>

      <div className="form-control">
        <label htmlFor="password" className="label py-1">
          <span className="label-text text-gray-300">Password</span>
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="input input-bordered w-full bg-[#121214] border-white/15 text-white rounded-xl"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn w-full bg-[#665df5] hover:bg-[#554be8] text-white border-0 rounded-xl normal-case"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="btn btn-outline w-full border-white/15 text-gray-200 hover:bg-white/10 rounded-xl normal-case"
      >
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-400 pt-2">
        New to HireLoop?{" "}
        <Link href="/sign-up" className="text-[#7c6cff] hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}