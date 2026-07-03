import { motion } from "framer-motion";

const SportDetails = ({ sport }) => {
  return (
   <motion.div
  key={sport.id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mb-12 grid items-center gap-8 sm:mb-16 sm:gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-14"
>
  {/* Image */}
  <div className="overflow-hidden rounded-2xl shadow-xl lg:rounded-3xl">
    <img
      src={sport.image}
      alt={sport.title}
      className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-72 md:h-80 lg:h-[450px]"
    />
  </div>

  {/* Content */}
  <div>
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm lg:text-base">
      Sports Activity
    </span>

    <h2 className="mt-3 text-3xl font-bold leading-tight text-[#16324F] sm:text-4xl lg:text-5xl">
      {sport.title}
    </h2>

    <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
      {sport.description}
    </p>

    {/* Highlights */}
    <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10">
      <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm lg:rounded-2xl lg:p-5">
        <h4 className="mb-2 text-base font-semibold text-[#16324F] lg:text-lg">
          Professional Coaching
        </h4>

        <p className="text-sm leading-6 text-gray-500 lg:text-base">
          Experienced trainers guide students at every level.
        </p>
      </div>

      <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm lg:rounded-2xl lg:p-5">
        <h4 className="mb-2 text-base font-semibold text-[#16324F] lg:text-lg">
          Regular Practice
        </h4>

        <p className="text-sm leading-6 text-gray-500 lg:text-base">
          Weekly sessions improve confidence and skills.
        </p>
      </div>

      <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm lg:rounded-2xl lg:p-5">
        <h4 className="mb-2 text-base font-semibold text-[#16324F] lg:text-lg">
          Team Spirit
        </h4>

        <p className="text-sm leading-6 text-gray-500 lg:text-base">
          Students learn discipline, leadership, and teamwork.
        </p>
      </div>

      <div className="rounded-xl bg-[#F8FAFC] p-4 shadow-sm lg:rounded-2xl lg:p-5">
        <h4 className="mb-2 text-base font-semibold text-[#16324F] lg:text-lg">
          Competitions
        </h4>

        <p className="text-sm leading-6 text-gray-500 lg:text-base">
          Inter-school events encourage excellence.
        </p>
      </div>
    </div>
  </div>
</motion.div>
  );
};

export default SportDetails;
