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
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-14">
          <h2 className="text-3xl font-bold text-[#16324F] sm:text-4xl">
            Building Champions Beyond the Classroom
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            At Adrian Loyal School, sports and extracurricular activities are
            an essential part of every student's growth. We encourage every
            child to stay active, build confidence, and develop leadership
            through participation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16324F] text-white sm:mb-5 sm:h-16 sm:w-16">
                {item.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold text-[#16324F] sm:mb-3 sm:text-2xl">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
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
