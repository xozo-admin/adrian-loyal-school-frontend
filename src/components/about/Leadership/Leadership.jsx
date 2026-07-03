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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
        Leadership Team
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        The People Guiding Adrian&apos;s Vision
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        Meet the dedicated leaders whose vision, experience, and commitment
        inspire excellence and shape the future of every student at Adrian
        Loyal School.
      </p>
    </div>

    {/* Leadership Cards */}
    <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
      {leaders.map((leader) => (
        <article
          key={leader.id}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl lg:rounded-[2rem]"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={leader.image}
              alt={leader.name}
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72 md:h-80 lg:h-[340px]"
            />
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 lg:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm">
              {leader.role}
            </p>

            <h3 className="mt-3 text-xl font-bold text-[#17375D] sm:text-2xl">
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
