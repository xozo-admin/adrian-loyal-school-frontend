import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import accreditationData from "./accreditationData";

const Accreditation = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

       
        {/* Main Content */}

        <div className="grid items-center gap-6 sm:gap-12 lg:grid-cols-2">

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
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#16324F] p-6 text-white shadow-xl sm:p-10"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              {accreditationData.subtitle}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-9">
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
          className="mt-8 rounded-2xl border-l-4 border-red-600 bg-slate-50 p-5 shadow-md sm:mt-16 sm:rounded-3xl sm:p-8"
        >
          <p className="text-sm leading-7 text-slate-700 sm:text-lg sm:leading-9">
            {accreditationData.commitment}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Accreditation;
