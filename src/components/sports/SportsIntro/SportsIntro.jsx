import { FaRunning, FaUsers, FaTrophy } from "react-icons/fa";

const features = [
  {
    icon: <FaRunning size={28} />,
    title: "Physical Fitness",
    description:
      "Students develop strength, stamina, flexibility, and healthy habits through regular sports activities.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Team Spirit",
    description:
      "Sports teach collaboration, leadership, discipline, and respect for teammates and opponents.",
  },
  {
    icon: <FaTrophy size={28} />,
    title: "Competitive Excellence",
    description:
      "Students participate in inter-school competitions, tournaments, and annual sports events.",
  },
];

const SportsIntro = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-10 text-center sm:mb-14">
      <h2 className="text-3xl font-bold leading-tight text-[#16324F] sm:text-4xl lg:text-5xl">
        Building Champions Beyond the Classroom
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
        At Adrian Loyal School, sports and extracurricular activities are
        an essential part of every student's growth. We encourage every
        child to stay active, build confidence, and develop leadership
        through participation.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6 lg:p-8"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16324F] text-white sm:h-14 sm:w-14 lg:h-16 lg:w-16">
            {item.icon}
          </div>

          <h3 className="mb-3 text-xl font-semibold text-[#16324F] sm:text-2xl">
            {item.title}
          </h3>

          <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default SportsIntro;
