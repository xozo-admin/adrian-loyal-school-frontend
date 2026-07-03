import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

const ClubDetails = ({ club }) => {
  return (
    <motion.div
  key={club.id}
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14"
>
  {/* Left Image */}
  <div className="overflow-hidden rounded-2xl shadow-xl lg:rounded-3xl">
    <img
      src={club.image}
      alt={club.title}
      className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-72 md:h-80 lg:h-[480px]"
    />
  </div>

  {/* Right Content */}
  <div>
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm lg:text-base">
      Clubs & Activities
    </span>

    <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
      {club.title}
    </h2>

    <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 lg:mt-8 lg:text-lg">
      {club.description}
    </p>

    {/* Highlights */}
    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:mt-10 lg:gap-5">
      <div className="rounded-xl border border-slate-200 p-3 sm:p-4 lg:rounded-2xl lg:p-5">
        <FaLightbulb className="mb-2 text-2xl text-[#17375D] sm:mb-3 sm:text-3xl" />
        <h4 className="text-sm font-semibold text-[#17375D] sm:text-base">
          Creativity
        </h4>
      </div>

      <div className="rounded-xl border border-slate-200 p-3 sm:p-4 lg:rounded-2xl lg:p-5">
        <FaUsers className="mb-2 text-2xl text-[#17375D] sm:mb-3 sm:text-3xl" />
        <h4 className="text-sm font-semibold text-[#17375D] sm:text-base">
          Teamwork
        </h4>
      </div>

      <div className="rounded-xl border border-slate-200 p-3 sm:p-4 lg:rounded-2xl lg:p-5">
        <FaAward className="mb-2 text-2xl text-[#17375D] sm:mb-3 sm:text-3xl" />
        <h4 className="text-sm font-semibold text-[#17375D] sm:text-base">
          Leadership
        </h4>
      </div>

      <div className="rounded-xl border border-slate-200 p-3 sm:p-4 lg:rounded-2xl lg:p-5">
        <FaBookOpen className="mb-2 text-2xl text-[#17375D] sm:mb-3 sm:text-3xl" />
        <h4 className="text-sm font-semibold text-[#17375D] sm:text-base">
          Skill Development
        </h4>
      </div>
    </div>
  </div>
</motion.div>
  );
};

export default ClubDetails;
