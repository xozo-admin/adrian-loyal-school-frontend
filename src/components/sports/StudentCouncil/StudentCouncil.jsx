import councilImg from "../../../assets/images/sports/student-council.png";
import {
  FaUsers,
  FaHandshake,
  FaBullhorn,
  FaMedal,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Leadership",
    description: "Students develop confidence and decision-making skills.",
  },
  {
    icon: <FaHandshake />,
    title: "Teamwork",
    description: "Work together to organize and support school activities.",
  },
  {
    icon: <FaBullhorn />,
    title: "Communication",
    description: "Represent student voices and communicate effectively.",
  },
  {
    icon: <FaMedal />,
    title: "Responsibility",
    description: "Promote discipline and lead by example.",
  },
];

const StudentCouncil = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
    {/* Left Content */}
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.3em] lg:text-base">
        Student Leadership
      </span>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        Student Council
      </h2>

      <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
        The Student Council provides opportunities for students to
        develop leadership qualities while serving as a bridge
        between students and the school administration. Members
        organize events, encourage teamwork, and promote a positive
        school environment.
      </p>

      {/* Feature Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5">
        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:rounded-2xl lg:p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#17375D] text-sm text-white sm:h-12 sm:w-12 sm:text-base">
              {item.icon}
            </div>

            <h4 className="text-sm font-semibold text-[#17375D] sm:text-base">
              {item.title}
            </h4>

            <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="overflow-hidden rounded-2xl shadow-xl lg:rounded-3xl">
      <img
        src={councilImg}
        alt="Student Council"
        className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 md:h-[420px] lg:h-[600px]"
      />
    </div>
  </div>
</section>
  );
};

export default StudentCouncil;
