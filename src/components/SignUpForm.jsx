"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMsg(error.message || "Could not create account. Please try again.");
        setIsLoading(false);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error("Sign up error:", err);
      setErrorMsg("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setErrorMsg("");
    setIsLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("Google sign up error:", err);
      setErrorMsg("Google sign-up failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6">
      {errorMsg && (
        <div
          role="alert"
          className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-300"
        >
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleEmailSignUp} className="space-y-4">
        <div>
          <label
            htmlFor="full-name"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Full Name
          </label>
          <input
            id="full-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jamal Uddin"
            className="input input-bordered w-full bg-[#17171d] border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-[#665df5] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email-address"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Email Address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input input-bordered w-full bg-[#17171d] border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-[#665df5] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className="input input-bordered w-full bg-[#17171d] border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-[#665df5] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn w-full h-11 rounded-xl border-0 bg-[#665df5] hover:bg-[#554be8] text-white font-medium normal-case shadow-none mt-2"
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <div className="divider my-6 text-xs text-gray-500 before:bg-white/10 after:bg-white/10">
        OR
      </div>

      <button
        type="button"
        onClick={handleGoogleSignUp}
        disabled={isLoading}
        className="btn btn-outline w-full h-11 rounded-xl border-white/15 text-gray-200 hover:bg-white/10 hover:border-white/25 hover:text-white font-medium normal-case"
      >
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-[#7c6cff] hover:text-[#988bff] transition-colors"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}