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
      className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-14"
    >
      {/* Left Image */}
      <div className="overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
        <img
          src={club.image}
          alt={club.title}
          className="h-60 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 lg:h-[480px]"
        />
      </div>

      {/* Right Content */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#D3131A] sm:text-base">
          Clubs & Activities
        </span>

        <h2 className="mt-3 text-3xl font-bold text-[#17375D] sm:mt-5 sm:text-4xl lg:text-5xl">
          {club.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
          {club.description}
        </p>

        {/* Highlights */}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">

          <div className="rounded-xl border border-slate-200 p-3 sm:rounded-2xl sm:p-5">
            <FaLightbulb className="mb-3 text-3xl text-[#17375D]" />
            <h4 className="font-semibold text-[#17375D]">
              Creativity
            </h4>
          </div>

          <div className="rounded-xl border border-slate-200 p-3 sm:rounded-2xl sm:p-5">
            <FaUsers className="mb-3 text-3xl text-[#17375D]" />
            <h4 className="font-semibold text-[#17375D]">
              Teamwork
            </h4>
          </div>

          <div className="rounded-xl border border-slate-200 p-3 sm:rounded-2xl sm:p-5">
            <FaAward className="mb-3 text-3xl text-[#17375D]" />
            <h4 className="font-semibold text-[#17375D]">
              Leadership
            </h4>
          </div>

          <div className="rounded-xl border border-slate-200 p-3 sm:rounded-2xl sm:p-5">
            <FaBookOpen className="mb-3 text-3xl text-[#17375D]" />
            <h4 className="font-semibold text-[#17375D]">
              Skill Development
            </h4>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ClubDetails;
