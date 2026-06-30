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
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:w-[90%] lg:grid-cols-2 lg:gap-16 lg:px-0">

        {/* Left Content */}

        <div>

          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4A017] sm:text-base sm:tracking-[5px]">
            Student Leadership
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#17375D] sm:text-5xl">
            Student Council
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            The Student Council provides opportunities for students to
            develop leadership qualities while serving as a bridge
            between students and the school administration. Members
            organize events, encourage teamwork, and promote a positive
            school environment.
          </p>

          {/* Feature Cards */}

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 p-3 transition hover:-translate-y-2 hover:shadow-lg sm:rounded-2xl sm:p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#17375D] text-sm text-white sm:mb-4 sm:h-12 sm:w-12 sm:text-base">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-[#17375D]">
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

        <div className="overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">

          <img
            src={councilImg}
            alt="Student Council"
            className="h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px] lg:h-[600px]"
          />

        </div>

      </div>
    </section>
  );
};

export default StudentCouncil;
