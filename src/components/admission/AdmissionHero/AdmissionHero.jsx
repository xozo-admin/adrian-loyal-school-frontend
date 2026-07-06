import hero from "../../../assets/images/admission/admission-hero.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AdmissionHero = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden sm:h-[65vh] lg:h-[70vh]">
      {/* Background Image */}
      <img
        src={hero}
        alt="Admissions"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#17375D]/45"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-xl text-white lg:max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#D3131A] sm:mb-4 sm:text-sm sm:tracking-[5px] lg:tracking-[6px]">
            ADMISSIONS 2026–27
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Begin Your Child's
            <br />
            Learning Journey
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-200 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
            Join The Adrian Loyal School and provide your child
            with a nurturing environment that inspires academic
            excellence, creativity, leadership, and lifelong learning.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D3131A] hover:bg-[#D3131A] hover:text-white sm:px-8 sm:py-4 sm:text-base"
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