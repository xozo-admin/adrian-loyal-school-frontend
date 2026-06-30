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
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl text-[#17375D] md:text-6xl">
            Opportunities at Adrian
          </h2>

          <div className="mx-auto mt-5 h-[5px] w-28 bg-[#E11D2E]" />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {opportunities.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-medium leading-tight text-[#17375D] md:text-4xl">
                {item.title}
              </h3>

              <p className="mt-6 text-[15px] leading-8 text-slate-600 md:text-base">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3 text-[15px] leading-7 text-slate-700">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#E11D2E]" />
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
