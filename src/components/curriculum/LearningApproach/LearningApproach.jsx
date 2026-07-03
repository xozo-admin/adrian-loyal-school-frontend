import {
  FaSearch,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discover",
    description:
      "Students develop curiosity through observation, storytelling and exploration.",
  },
  {
    icon: <FaUsers />,
    title: "Collaborate",
    description:
      "Group activities and discussions improve communication and teamwork.",
  },
  {
    icon: <FaLightbulb />,
    title: "Apply",
    description:
      "Hands-on learning helps students connect concepts with real-life situations.",
  },
  {
    icon: <FaRocket />,
    title: "Achieve",
    description:
      "Continuous guidance builds confidence and prepares students for future success.",
  },
];

const LearningApproach = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:w-[90%] lg:px-0">

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D3131A] sm:text-base sm:tracking-[0.3em]">
            Our Learning Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#17375D] sm:text-4xl lg:text-5xl">
            How Students Learn
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Every lesson is designed to encourage curiosity, collaboration,
            creativity, and confidence through meaningful learning experiences.
          </p>
        </div>

        <div className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-16 sm:gap-10 md:grid-cols-2 xl:mt-20 xl:grid-cols-4">

          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-[#D3131A] xl:block"></div>

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#17375D] text-xl text-white shadow-lg transition hover:scale-110 hover:bg-[#D4A017] sm:h-20 sm:w-20 sm:text-3xl">
                {step.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#17375D] sm:mt-8 sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LearningApproach;
