import SignUpForm from "@/components/SignUpForm";

export const metadata = {
  title: "Get Started | HireLoop",
  description:
    "Create your HireLoop account to discover curated roles, connect with top companies, and land your next job.",
};

export default function SignUpPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#0c0c10] text-white px-4 py-12 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-[#111114] border border-white/10 p-6 sm:p-8 shadow-2xl">
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#8b7eff]">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
            <span>CREATE ACCOUNT</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Join HireLoop Today
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Start exploring roles and building your career in minutes.
          </p>
        </div>

        <SignUpForm />
      </div>
    </main>
  );
}