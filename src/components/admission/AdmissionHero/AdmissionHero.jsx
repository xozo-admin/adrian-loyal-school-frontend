import hero from "../../../assets/images/admission/admission-hero.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AdmissionHero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      {/* Background Image */}

      <img
        src={hero}
        alt="Admissions"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#17375D]/45"></div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-2xl text-white">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-[#D3131A]">
            ADMISSIONS 2026–27
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Begin Your Child's
            <br />
            Learning Journey
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            Join The Adrian Loyal School and provide your child
            with a nurturing environment that inspires academic
            excellence, creativity, leadership, and lifelong learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="#admission-form"
              className="inline-flex items-center gap-3 rounded-full bg-[#D3131A] px-8 py-4 font-semibold text-[#17375D] transition hover:scale-105"
            >
              Apply Now
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-[#D3131A] hover:text-[#17375D]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AdmissionHero;