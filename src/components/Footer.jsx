import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/worker-ai" },
      { label: "Companies", href: "/company" },
      { label: "Salary data", href: "/salary-data" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/career-library" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand-guideline" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#070709] text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        {/* Top Row: Brand Info (Left) + 3 Navigation Columns (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center focus:outline-none">
              <Image
                src="/images/logo.png"
                alt="HireLoop Logo"
                width={128}
                height={32}
                style={{ width: "auto" }}
                className="h-8 object-contain"
              />
            </Link>

            <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="text-sm font-medium text-[#5246e5]">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-200 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom Row: Social Icons + Copyright & Legal Links */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HireLoop on Facebook"
              className="w-9 h-9 rounded-lg bg-[#141418] hover:bg-[#1e1e24] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3z" />
              </svg>
            </a>

            {/* Pinterest (Highlighted Indigo Square) */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HireLoop on Pinterest"
              className="w-9 h-9 rounded-lg bg-[#5246e5] hover:bg-[#665df5] text-white flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.18-5.01 1.18-5.01s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.78.75 2.28.08.1.09.19.07.29-.08.31-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.25-.58-2.03-2.41-2.03-3.87 0-3.15 2.29-6.05 6.6-6.05 3.47 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HireLoop on LinkedIn"
              className="w-9 h-9 rounded-lg bg-[#141418] hover:bg-[#1e1e24] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
            </a>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <p>Copyright 2024 — Programming Hero</p>
            <div className="flex items-center gap-1.5">
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms &amp; Policy
              </Link>
              <span aria-hidden="true">-</span>
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}