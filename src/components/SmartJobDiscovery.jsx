import Link from "next/link";

const roles = [
  {
    id: "1",
    title: "Frontend Developer",
    summary: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    rate: "€25–€40/hour",
    href: "/jobs/1",
  },
  {
    id: "2",
    title: "Frontend Developer",
    summary: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    rate: "€25–€40/hour",
    href: "/jobs/2",
  },
  {
    id: "3",
    title: "Frontend Developer",
    summary: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    rate: "€25–€40/hour",
    href: "/jobs/3",
  },
  {
    id: "4",
    title: "Frontend Developer",
    summary: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    rate: "€25–€40/hour",
    href: "/jobs/4",
  },
  {
    id: "5",
    title: "Frontend Developer",
    summary: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    rate: "€25–€40/hour",
    href: "/jobs/5",
  },
  {
    id: "6",
    title: "Frontend Developer",
    summary: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    rate: "€25–€40/hour",
    href: "/jobs/6",
  },
];

export default function SmartJobDiscovery() {
  return (
    <section
      aria-labelledby="smart-discovery-title"
      className="w-full bg-[#070709] text-white py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-gray-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
            <span>SMART JOB DISCOVERY</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
          </p>

          <h2
            id="smart-discovery-title"
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            The roles you&apos;d never
            <br />
            find by searching
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <article
              key={role.id}
              className="rounded-3xl bg-[#111114] border border-white/10 p-6 sm:p-7 flex flex-col justify-between transition-colors hover:border-white/20"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {role.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-gray-200">
                    <span aria-hidden="true" className="text-[#f0abfc]">●</span>
                    <span>{role.location}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-gray-200">
                    <span aria-hidden="true" className="text-[#f0abfc]">💼</span>
                    <span>{role.workType}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-gray-200">
                    <span aria-hidden="true" className="text-[#f0abfc] font-bold">$</span>
                    <span>{role.rate}</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href={role.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-white transition-colors group"
                >
                  <span>Apply Now</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/jobs"
            className="btn h-11 px-6 rounded-xl bg-white hover:bg-gray-200 text-[#0c0c10] border-0 font-medium normal-case shadow-none"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
}