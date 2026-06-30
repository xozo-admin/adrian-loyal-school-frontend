import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import ctaImg from "../../../assets/images/curriculum/curriculum-cta.jpg";

const CurriculumCTA = () => {
  return (
    <section className="relative py-32">

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

        <p className="uppercase tracking-[0.35em] font-semibold text-[#D4A017]">
          Admissions Open
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
          Ready to Shape
          <br />
          Your Child's Future?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
          Discover an inspiring learning environment where students
          grow academically, socially, and emotionally every day.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#D4A017] px-9 py-4 text-lg font-semibold text-[#17375D] transition hover:scale-105"
          >
            Schedule a Visit

            <FaArrowRight />

          </Link>

         <Link
  to="/admission"
  className="inline-flex items-center rounded-full border-2 border-white px-9 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-[#17375D] hover:shadow-xl"
>
  Apply Now
</Link>

        </div>

      </div>

    </section>
  );
};

export default CurriculumCTA;