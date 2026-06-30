import { motion } from "framer-motion";

const SportDetails = ({ sport }) => {
  return (
    <motion.div
      key={sport.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 grid items-center gap-6 sm:mb-16 sm:gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-14"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
        <img
          src={sport.image}
          alt={sport.title}
          className="h-60 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 lg:h-[450px]"
        />
      </div>

      {/* Content */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#D4A017] sm:text-base">
          Sports Activity
        </span>

        <h2 className="mt-3 text-3xl font-bold text-[#16324F] sm:text-4xl lg:text-5xl">
          {sport.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mt-0">
          {sport.description}
        </p>

        {/* Highlights */}
        <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm sm:rounded-2xl sm:p-5">
            <h4 className="text-[#16324F] font-semibold mb-2">
              Professional Coaching
            </h4>

            <p className="text-sm text-gray-500">
              Experienced trainers guide students at every level.
            </p>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm sm:rounded-2xl sm:p-5">
            <h4 className="text-[#16324F] font-semibold mb-2">
              Regular Practice
            </h4>

            <p className="text-sm text-gray-500">
              Weekly sessions improve confidence and skills.
            </p>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm sm:rounded-2xl sm:p-5">
            <h4 className="text-[#16324F] font-semibold mb-2">
              Team Spirit
            </h4>

            <p className="text-sm text-gray-500">
              Students learn discipline, leadership and teamwork.
            </p>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm sm:rounded-2xl sm:p-5">
            <h4 className="text-[#16324F] font-semibold mb-2">
              Competitions
            </h4>

            <p className="text-sm text-gray-500">
              Inter-school events encourage excellence.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SportDetails;
