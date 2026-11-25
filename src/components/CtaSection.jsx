import Link from "next/link";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden bg-[#070709] text-white pt-16 sm:pt-24 pb-20 sm:pb-28"
    >
      {/* Background Arc / Grid Image from public/images/cta-bg.png */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-5xl h-[340px] sm:h-[430px] flex items-end justify-center"
      >
        <Image
          src="/images/cta-bg.png"
          alt=""
          width={1100}
          height={480}
          className="w-full h-full object-cover object-top opacity-95 select-none"
        />
        {/* Soft Bottom & Side Fade into Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]"
        >
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/sign-up"
            className="btn h-11 px-6 rounded-xl bg-white hover:bg-gray-200 text-[#0c0c10] border-0 font-medium normal-case shadow-none w-full sm:w-auto"
          >
            Create a free account
          </Link>

          <Link
            href="#pricing"
            className="btn h-11 px-6 rounded-xl bg-[#16161d]/90 hover:bg-[#1f1f29] text-gray-200 hover:text-white border border-white/15 font-medium normal-case shadow-none w-full sm:w-auto"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}