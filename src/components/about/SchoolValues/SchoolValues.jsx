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
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
            Our Core Values
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#17375D] md:text-5xl">
            The Principles Behind Everyday Learning
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Our values shape the way students learn, collaborate, and grow into
            thoughtful, responsible individuals.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.id}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 sm:rounded-[2rem] sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-[#17375D] shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                {value.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#17375D] sm:mt-6 sm:text-2xl">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
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
