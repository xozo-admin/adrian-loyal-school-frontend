const opportunities = [
  {
    title: "Teaching Roles",
    description:
      "We welcome educators with strong subject knowledge, a love for children, and a passion for creating engaging classroom experiences.",
    points: ["Pre-Primary Teachers", "Primary Teachers", "Middle & High School Teachers"],
  },
  {
    title: "Administrative Roles",
    description:
      "Our non-teaching team plays a vital role in ensuring smooth daily operations and strong support for students, parents, and staff.",
    points: ["Front Office", "Academic Coordinators", "Administrative Support"],
  },
  {
    title: "Specialized Support Roles",
    description:
      "We also value professionals who can enrich school life through student welfare, extracurricular guidance, and operational excellence.",
    points: ["Sports & Activity Instructors", "Transport / Operations Support", "Student Care & Coordination"],
  },
];

const CareersOpportunities = () => {
  return (
  <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#17375D] sm:text-4xl lg:text-5xl">
        Opportunities at Adrian
      </h2>

      <div className="mx-auto mt-4 h-[4px] w-20 bg-[#E11D2E] sm:mt-5 sm:h-[5px] sm:w-28" />

      <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
        Explore rewarding career opportunities where you can inspire young
        minds, grow professionally, and become part of a passionate educational
        community.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {opportunities.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:rounded-[2rem]"
        >
          <h3 className="text-2xl font-semibold leading-tight text-[#17375D] sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {item.description}
          </p>

          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E11D2E]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>

  </div>
</section>
  );
};

export default CareersOpportunities;
