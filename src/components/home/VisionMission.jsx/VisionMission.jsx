import { motion } from "framer-motion";
import { PiBookOpenTextFill } from "react-icons/pi";
import visionMissionData from "./visionMissionData";

import visionImage from "../../../assets/images/Vision.webp";
import missionImage from "../../../assets/images/Mission.webp";

const VisionMission = () => {
    return (
       <section className="bg-white py-14 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-xl">

            {/* Image */}
            <img
                src={visionImage}
                alt=""
                className="h-56 w-full object-cover sm:h-72 lg:h-[430px]"
            />

            {/* Vision */}
            <motion.div
               
                whileInView={{ opacity: 1, x: 0 }}
               
                className="bg-[#163A68] p-6 text-white sm:p-10 lg:h-[430px]"
            >
                <h2 className="mb-5 font-heading text-3xl font-light sm:mb-10 sm:text-5xl">
                    Vision
                </h2>

                <div className="space-y-2">
                    {visionMissionData.vision.content.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <PiBookOpenTextFill className="text-red-500 mt-1 text-lg flex-shrink-0" />
                            <p className="text-sm leading-6 sm:text-lg sm:leading-8">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Mission */}
            <motion.div
                
                whileInView={{ opacity: 1, x: 0 }}
                
                className="order-4 bg-[#163A68] p-6 text-white sm:p-10 lg:order-none lg:h-[430px] lg:p-14"
            >
                
                <h2 className="mb-5 font-heading text-3xl font-light sm:mb-10 sm:text-5xl">
                    Mission
                </h2>

                <div className="space-y-3">
                    {visionMissionData.mission.content.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <PiBookOpenTextFill className="text-red-500 mt-1 text-lg flex-shrink-0" />
                            <p className="text-sm leading-6 sm:text-lg sm:leading-8">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Image */}
            <img
                src={missionImage}
                alt=""
                className="order-3 h-56 w-full object-cover sm:h-72 lg:order-none lg:h-[430px]"
            />

        </div>

    </div>
</section>
    );
};

export default VisionMission;
