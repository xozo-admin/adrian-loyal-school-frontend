import {
  FaAward,
  FaGlobeAsia,
  FaHandshake,
  FaLeaf,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Excellence",
    description:
      "We inspire every student to strive for excellence in academics, sports, and personal development.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "Honesty, responsibility, and ethical behavior are at the heart of everything we do.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Respect",
    description:
      "We cultivate an inclusive environment where every individual is valued and respected.",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Responsibility",
    description:
      "Students learn to become accountable leaders who positively contribute to society.",
  },
  {
    id: 5,
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "Creativity and critical thinking empower our students to solve real-world challenges.",
  },
  {
    id: 6,
    icon: <FaGlobeAsia />,
    title: "Global Citizenship",
    description:
      "We prepare students to become compassionate citizens capable of thriving in a global community.",
  },
];

const SchoolValues = () => {
  return (
   <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
        Our Core Values
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        The Principles Behind Everyday Learning
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        Our values shape the way students learn, collaborate, and grow into
        thoughtful, responsible individuals.
      </p>
    </div>

    {/* Value Cards */}
    <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      {values.map((value) => (
        <article
          key={value.id}
          className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-6 lg:rounded-[2rem] lg:p-8"
        >
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-[#17375D] shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
            {value.icon}
          </div>

          {/* Title */}
          <h3 className="mt-4 text-xl font-bold text-[#17375D] sm:mt-5 sm:text-2xl">
            {value.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {value.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
  );
};

export default SchoolValues;
