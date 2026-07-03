import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import accreditationData from "./accreditationData";

const Accreditation = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Main Content */}
    <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src={accreditationData.image}
          alt="Accreditation"
          className="h-64 w-full rounded-2xl object-cover shadow-xl sm:h-80 md:h-[420px] lg:h-[500px] lg:rounded-[2rem]"
        />
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-[#16324F] p-6 text-white shadow-xl sm:p-8 lg:rounded-[2rem] lg:p-10"
      >
        <h3 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          {accreditationData.subtitle}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-200 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg lg:leading-9">
          {accreditationData.description}
        </p>
      </motion.div>
    </div>

    {/* Commitment */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-10 rounded-2xl border-l-4 border-red-600 bg-slate-50 p-5 shadow-md sm:mt-14 sm:p-6 lg:mt-16 lg:rounded-[2rem] lg:p-8"
    >
      <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
        {accreditationData.commitment}
      </p>
    </motion.div>
  </div>
</section>
  );
};

export default Accreditation;
