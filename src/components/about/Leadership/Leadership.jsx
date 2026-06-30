import founder from "../../../assets/images/about/founder.webp";
import correspondent from "../../../assets/images/about/correspodent.webp";
import ceo from "../../../assets/images/about/ceo.webp";
import secretary from "../../../assets/images/about/as.webp";

const leaders = [
  {
    id: 1,
    name: "Mr. K. P. Ragupathy",
    role: "Founder & Chairman",
    image: founder,
  },
  {
    id: 2,
    name: "Ms. Janet Ragupathy",
    role: "Founder & Correspondent",
    image: correspondent,
  },
  {
    id: 3,
    name: "Ms. Rajeswari R P",
    role: "Chief Executive Officer",
    image: ceo,
  },
  {
    id: 4,
    name: "Ms. Dheepthi Rahul",
    role: "Administrative Secretary",
    image: secretary,
  },
];

const Leadership = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17375D] sm:text-sm sm:tracking-[0.24em]">
            Leadership Team
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
            The People Guiding Adrian&apos;s Vision
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {leaders.map((leader) => (
            <article
              key={leader.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:rounded-[2rem]"
            >
              <div className="overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[340px]"
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4A017]">
                  {leader.role}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#17375D]">
                  {leader.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
