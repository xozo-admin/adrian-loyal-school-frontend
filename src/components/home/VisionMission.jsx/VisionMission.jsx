import { motion } from "framer-motion";
import { PiBookOpenTextFill } from "react-icons/pi";
import visionMissionData from "./visionMissionData";

import visionImage from "../../../assets/images/Vision.webp";
import missionImage from "../../../assets/images/Mission.webp";

const VisionMission = () => {
    return (
      <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <div className="overflow-hidden rounded-2xl shadow-sm lg:rounded-[2rem]">

      <div className="grid lg:grid-cols-2">

        {/* Vision Image */}
        <img
          src={visionImage}
          alt="Vision"
          className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-[480px]"
        />

        {/* Vision */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center bg-[#163A68] p-6 text-white sm:p-8 lg:h-[480px] lg:p-12"
        >
          <h2 className="mb-6 text-3xl font-light sm:text-4xl lg:mb-8 lg:text-5xl">
            Vision
          </h2>

          <div className="space-y-4">
            {visionMissionData.vision.content.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <PiBookOpenTextFill className="mt-1 shrink-0 text-lg text-[#D3131A]" />

                <p className="text-sm leading-7 sm:text-base sm:leading-8 lg:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-4 flex flex-col justify-center bg-[#163A68] p-6 text-white sm:p-8 lg:order-none lg:h-[480px] lg:p-12"
        >
          <h2 className="mb-6 text-3xl font-light sm:text-4xl lg:mb-8 lg:text-5xl">
            Mission
          </h2>

          <div className="space-y-4">
            {visionMissionData.mission.content.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <PiBookOpenTextFill className="mt-1 shrink-0 text-lg text-[#D3131A]" />

                <p className="text-sm leading-7 sm:text-base sm:leading-8 lg:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission Image */}
        <img
          src={missionImage}
          alt="Mission"
          className="order-3 h-64 w-full object-cover sm:h-80 md:h-[420px] lg:order-none lg:h-[480px]"
        />

      </div>

    </div>
  </div>
</section>
    );
};

export default VisionMission;
