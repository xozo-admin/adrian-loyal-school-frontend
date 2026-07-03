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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.3em]">
        Our Learning Approach
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        How Students Learn
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
        Every lesson is designed to encourage curiosity, collaboration,
        creativity, and confidence through meaningful learning experiences.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 xl:mt-20 xl:grid-cols-4 xl:gap-8">
      {/* Connecting Line (Desktop Only) */}
      <div className="absolute left-0 right-0 top-10 hidden h-1 bg-[#D3131A] xl:block"></div>

      {steps.map((step) => (
        <div
          key={step.title}
          className="relative z-10 flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#17375D] text-2xl text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#D4A017] sm:h-20 sm:w-20 sm:text-3xl">
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="mt-5 text-xl font-bold text-[#17375D] sm:mt-6 sm:text-2xl">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:leading-8">
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
