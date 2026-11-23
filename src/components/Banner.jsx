"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const trendingPositions = [
    "Product Designer",
    "AI Engineering",
    "Dev-ops Engineer",
  ];

  const stats = [
    {
      id: "jobs",
      value: "50K",
      label: "Active Jobs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          />
        </svg>
      ),
    },
    {
      id: "companies",
      value: "12K",
      label: "Companies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"
          />
        </svg>
      ),
    },
    {
      id: "seekers",
      value: "2M",
      label: "Job Seekers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "satisfaction",
      value: "97%",
      label: "Satisfication Rate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    const queryString = params.toString();
    router.push(queryString ? `/jobs?${queryString}` : "/jobs");
  };

  const handleTrendingClick = (position) => {
    setKeyword(position);
    router.push(`/jobs?q=${encodeURIComponent(position)}`);
  };

  return (
    <section
      aria-label="Job Search Hero Banner"
      className="relative overflow-hidden bg-[#0c0c10] text-white"
    >
      {/* Violet / Indigo Ambient Glow Behind Globe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-12 mx-auto h-[380px] sm:h-[480px] w-[700px] sm:w-[980px] rounded-full bg-[#4f46e5]/25 blur-[130px]"
      />

      {/* Top & Bottom Dark Vignette Blending */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0e] via-transparent to-[#0b0b0e]"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-medium tracking-wider uppercase text-gray-300">
            <span aria-hidden="true">💼</span>
            <span>50,000+ NEW JOBS THIS MONTH</span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.12]">
            Find Your Dream Job Today
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role – faster.
          </p>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 max-w-3xl mx-auto bg-[#14141a]/95 border border-white/10 rounded-xl p-1.5 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center">
            {/* Keyword Input */}
            <div className="flex items-center gap-3 flex-1 px-3.5 py-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, skill or company"
                aria-label="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Divider (Desktop) */}
            <span
              aria-hidden="true"
              className="hidden md:block h-6 w-px bg-white/10"
            />
            <span
              aria-hidden="true"
              className="block md:hidden h-px w-full bg-white/10"
            />

            {/* Location Input */}
            <div className="flex items-center gap-3 flex-1 px-3.5 py-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                />
              </svg>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or Remote"
                aria-label="Location or Remote"
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              aria-label="Search jobs"
              className="btn h-10 md:h-10 w-full md:w-11 min-h-0 px-0 rounded-lg border-0 bg-[#665df5] hover:bg-[#554be8] text-white shadow-none shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Trending Positions */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-gray-400 mr-1">Trending Position</span>
          {trendingPositions.map((position) => (
            <button
              key={position}
              type="button"
              onClick={() => handleTrendingClick(position)}
              className="px-3 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {position}
            </button>
          ))}
        </div>

        {/* Globe Section + Overlay Text + Stats Cards */}
        <div className="relative mt-10 sm:mt-12">
          {/* Globe Image from public/images/globe.png */}
          <div className="relative mx-auto w-full max-w-4xl h-[230px] sm:h-[310px] lg:h-[350px] flex items-center justify-center">
            <Image
              src="/images/globe.png"
              alt="Global talent network"
              width={900}
              height={450}
              priority
              className="w-full h-full object-cover object-top rounded-t-full opacity-85 select-none pointer-events-none"
            />
            {/* Smooth bottom fade so cards sit cleanly */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-[#0c0c10]/35 to-transparent"
            />

            {/* Centered Text Over Globe */}
            <div className="relative z-10 text-center px-4 -mt-6 sm:-mt-10">
              <p className="text-lg sm:text-2xl lg:text-[28px] font-semibold text-white leading-snug">
                Assisting over{" "}
                <span className="text-[#8b7eff]">15,000</span> job seekers
              </p>
              <p className="text-lg sm:text-2xl lg:text-[28px] font-semibold text-white leading-snug">
                find their dream positions.
              </p>
            </div>
          </div>

          {/* 4 Stats Cards */}
          <div className="relative z-20 -mt-4 sm:-mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl bg-gradient-to-b from-[#17171d] to-[#0f0f13] border border-white/10 p-5 sm:p-6 min-h-[135px] sm:min-h-[155px] flex flex-col justify-between shadow-lg"
              >
                <div>{stat.icon}</div>
                <div className="mt-6">
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}