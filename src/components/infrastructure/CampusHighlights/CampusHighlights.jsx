import {
  FaBookReader,
  FaDesktop,
  FaFlask,
  FaSchool,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaSchool />,
    number: "40+",
    title: "Spacious classrooms",
  },
  {
    icon: <FaDesktop />,
    number: "10+",
    title: "Smart learning zones",
  },
  {
    icon: <FaFlask />,
    number: "5+",
    title: "Specialist laboratories",
  },
  {
    icon: <FaBookReader />,
    number: "5000+",
    title: "Library resources",
  },
];

const CampusHighlights = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* <div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17375D] sm:text-sm sm:tracking-[0.24em]">
              At A Glance
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
              A campus experience built with scale, structure, and care.
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 md:text-lg md:leading-9">
            These numbers reflect the strength of the environment students learn
            in every day, from classroom capacity to specialist facilities and
            academic resources.
          </p>
        </div> */}

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
              At A Glance
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
              A campus experience built with scale, structure, and care.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 md:text-lg md:leading-9 lg:justify-self-end">
            These numbers reflect the strength of the environment students learn in
            every day, from classroom capacity to specialist facilities and academic
            resources.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 xl:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300 sm:rounded-[2rem] sm:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg text-[#17375D] shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[#17375D] sm:mt-8 sm:text-4xl">
                {item.number}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                {item.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusHighlights;
