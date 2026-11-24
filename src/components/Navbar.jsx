import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="w-full bg-[#121214] text-gray-200 border-b border-white/10">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-16">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2 focus:outline-none">
            {/* Swap /images/logo.png with your file in public/images/ */}
            <Image
              src="/images/logo.png"
              alt="HireLoop Logo"
              width={128}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right / Desktop Nav + Mobile Dropdown */}
        <div className="navbar-end gap-2 sm:gap-4">
          {/* Desktop Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Vertical Divider (Desktop) */}
          <span
            aria-hidden="true"
            className="hidden md:inline-block h-5 w-px bg-white/15 mx-1"
          />

          {/* Auth Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-[#7c6cff] hover:text-[#988bff] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="btn btn-sm h-10 px-5 rounded-xl border-0 bg-[#665df5] hover:bg-[#554be8] text-white font-medium normal-case shadow-none"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className="dropdown dropdown-end md:hidden">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open menu"
              className="btn btn-ghost btn-square text-gray-200 hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow-xl bg-[#1a1a1f] border border-white/10 rounded-2xl w-56 gap-1"
            >
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <div className="divider my-1 before:bg-white/10 after:bg-white/10" />

              <li className="sm:hidden">
                <Link
                  href="/sign-in"
                  className="py-2.5 text-sm font-medium text-[#7c6cff] hover:bg-white/5 rounded-lg"
                >
                  Sign In
                </Link>
              </li>
              <li className="sm:hidden mt-1">
                <Link
                  href="/sign-up"
                  className="btn btn-sm h-10 bg-[#665df5] hover:bg-[#554be8] text-white border-0 rounded-xl justify-center"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}