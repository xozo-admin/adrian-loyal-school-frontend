import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaFlask,
  FaLeaf,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Focused Learning Spaces",
    description:
      "Bright, structured classrooms built to support concentration, collaboration, and teacher-led learning.",
  },
  {
    icon: <FaFlask />,
    title: "Hands-on Exploration",
    description:
      "Science and activity spaces give students room to experiment, observe, and learn through doing.",
  },
  {
    icon: <FaBookOpen />,
    title: "Academic Support",
    description:
      "Libraries and resource zones extend learning beyond the classroom with quiet, well-curated spaces.",
  },
  {
    icon: <FaWifi />,
    title: "Technology Integration",
    description:
      "Digital tools and smart learning environments make everyday teaching more engaging and effective.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Care",
    description:
      "Campus planning prioritizes security, comfort, supervision, and a dependable student experience.",
  },
  {
    icon: <FaLeaf />,
    title: "Healthy Environment",
    description:
      "Open areas, greenery, and thoughtful circulation make the campus feel calm, breathable, and student-friendly.",
  },
];

const InfrastructureIntro = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
              Built Around Students
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
              Infrastructure that supports attention, movement, and discovery.
            </h2>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm sm:mt-8 sm:rounded-[2rem] sm:p-8">
            <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 md:text-lg md:leading-9">
              We see infrastructure as more than buildings. It is the everyday
              environment students rely on to think clearly, feel safe, stay
              active, and develop confidence. Every space on campus is planned
              to serve learning with purpose and simplicity.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:rounded-[2rem] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-[#17375D] shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#17375D] sm:mt-6 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureIntro;
