const features = [
  {
    id: "smart-search",
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: "salary-insights",
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5v14h16M7 15l4-4 3 3 5-6"
        />
      </svg>
    ),
  },
  {
    id: "top-companies",
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20h16M6 20v-7h3v7m4 0V9h3v11m4 0v-5h-2"
        />
      </svg>
    ),
  },
  {
    id: "saved-jobs",
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 4h12a1 1 0 011 1v15l-7-4-7 4V5a1 1 0 011-1z"
        />
      </svg>
    ),
  },
  {
    id: "one-click-apply",
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10 4-4 2-2 4-4-10zM6 5v2M4 9h2M9 4v2"
        />
      </svg>
    ),
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm5 6a2 2 0 100 4 2 2 0 000-4zm-3 8h6"
        />
      </svg>
    ),
  },
  {
    id: "skill-matching",
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4l7 4v8l-7 4-7-4V8l7-4z"
        />
      </svg>
    ),
  },
  {
    id: "career-growth",
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 16l5-5 3 3 6-6m0 0h-4m4 0v4"
        />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="w-full bg-[#121214] text-white py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Main Heading */}
        <div className="text-center max-w-xl mx-auto">
          <p className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-gray-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
            <span>FEATURES JOB</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
          </p>

          <h2
            id="features-heading"
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* 4x2 Responsive Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((item) => (
            <article key={item.id} className="flex items-start gap-4">
              {/* Left Rounded Icon Box */}
              <div
                aria-hidden="true"
                className="w-12 h-12 rounded-xl bg-[#0b0b0e] border border-white/10 flex items-center justify-center shrink-0"
              >
                {item.icon}
              </div>

              {/* Right Title & Description */}
              <div>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}