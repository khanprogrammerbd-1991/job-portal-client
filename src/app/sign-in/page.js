import SignInForm from "@/components/SignInForm";

export const metadata = {
  title: "Sign In | HireLoop",
  description: "Sign in to your HireLoop account as a Job Seeker, Recruiter, or Admin.",
};

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#121214] text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#18181d] border border-white/10 rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <p className="text-sm text-gray-400 text-center mt-1">
          Welcome back to HireLoop
        </p>

        <SignInForm />
      </div>
    </main>
  );
}