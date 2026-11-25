"use client";

import { useState } from "react";
import Link from "next/link";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    featured: false,
    subtitle: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    href: "/sign-up?plan=starter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-[#e879f9]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5 16L3 6l5.5 4L12 4l3.5 6L21 6l-2 10H5zm0 2h14v2H5v-2z" />
      </svg>
    ),
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 17,
    yearlyPrice: 13,
    featured: true,
    subtitle: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    href: "/sign-up?plan=growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-[#e879f9]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19h16M6 16v-3m4 3V9m4 7v-5m4 5V6"
        />
      </svg>
    ),
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 99,
    yearlyPrice: 74,
    featured: false,
    subtitle: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    href: "/sign-up?plan=premium",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-[#e879f9]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="w-full bg-[#070709] text-white py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Main Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-gray-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
            <span>PRICING</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#665df5]" />
          </p>

          <h2
            id="pricing-heading"
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Monthly / Yearly Toggle Pill */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#16161b] border border-white/10">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-[#0c0c10]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              aria-pressed={billingCycle === "yearly"}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-white text-[#0c0c10]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#d946ef] text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <article
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-colors ${
                  plan.featured
                    ? "bg-gradient-to-b from-[#1a1a20] to-[#111115] border-white/20 shadow-2xl"
                    : "bg-[#0d0d10] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Card Header: Icon + Plan Name (Left) & Price (Right) */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className="w-9 h-9 rounded-xl bg-[#16161c] border border-white/10 flex items-center justify-center shrink-0"
                      >
                        {plan.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        ${displayPrice}
                      </span>
                      <span className="text-xs text-gray-400">/month</span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-7 text-xs sm:text-sm font-medium text-gray-200">
                    {plan.subtitle}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-4 space-y-3.5">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-400"
                      >
                        <span
                          aria-hidden="true"
                          className="w-4 h-4 rounded bg-white/[0.06] border border-white/10 inline-flex items-center justify-center text-[11px] text-gray-300 shrink-0"
                        >
                          +
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-2">
                  <Link
                    href={`${plan.href}&billing=${billingCycle}`}
                    className={`btn w-full h-11 px-5 rounded-xl border-0 font-medium normal-case shadow-none flex items-center justify-between group ${
                      plan.featured
                        ? "bg-white hover:bg-gray-200 text-[#0c0c10]"
                        : "bg-[#1a1a1f] hover:bg-[#24242b] text-gray-200 hover:text-white"
                    }`}
                  >
                    <span>Choose This Plan</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}