import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import ctaImg from "../../../assets/images/curriculum/curriculum-cta.jpg";

const CurriculumCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
  {/* Background */}
  <img
    src={ctaImg}
    alt="Students"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#17375D]/75"></div>

  {/* Content */}
  <div className="relative mx-auto w-[90%] max-w-5xl text-center text-white">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017] sm:text-sm sm:tracking-[0.3em]">
      Admissions Open
    </p>

    <h2 className="mt-4 text-3xl font-bold leading-tight sm:mt-5 sm:text-4xl lg:mt-6 lg:text-6xl">
      Ready to Shape
      <br />
      Your Child's Future?
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-200 sm:mt-6 sm:text-base sm:leading-8 lg:mt-8 lg:text-lg">
      Discover an inspiring learning environment where students
      grow academically, socially, and emotionally every day.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 lg:mt-12">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A017] px-5 py-2.5 text-sm font-semibold text-[#17375D] transition hover:scale-105 sm:gap-3 sm:px-9 sm:py-4 sm:text-lg"
      >
        Schedule a Visit
        <FaArrowRight />
      </Link>

      <Link
        to="/admission"
        className="inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-[#17375D] hover:shadow-xl sm:px-9 sm:py-4 sm:text-lg"
      >
        Apply Now
      </Link>
    </div>
  </div>
</section>
  );
};

export default CurriculumCTA;