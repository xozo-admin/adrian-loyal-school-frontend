import activity from "../../../assets/images/infrastructure/activity.webp";
import computerLab from "../../../assets/images/infrastructure/computer-lab.webp";
import library from "../../../assets/images/infrastructure/library.webp";
import playground from "../../../assets/images/infrastructure/play-area.webp";
import scienceLab from "../../../assets/images/infrastructure/science-lab.webp";
import smartClass from "../../../assets/images/infrastructure/smart-class.webp";

const facilities = [
  {
    id: 1,
    title: "Smart Classrooms",
    description:
      "Daily teaching spaces designed for clarity, structure, and digital support.",
    image: smartClass,
  },
  {
    id: 2,
    title: "Science Laboratory",
    description:
      "Practical, curiosity-led learning supported by safe and modern lab facilities.",
    image: scienceLab,
  },
  {
    id: 3,
    title: "Computer Laboratory",
    description:
      "Technology-enabled environments where students build confidence with digital tools.",
    image: computerLab,
  },
  {
    id: 4,
    title: "Library",
    description:
      "A calm academic zone that encourages reading, independent study, and exploration.",
    image: library,
  },
  {
    id: 5,
    title: "Activity Hall",
    description:
      "Flexible spaces for co-curricular learning, events, and student expression.",
    image: activity,
  },
  {
    id: 6,
    title: "Play Area",
    description:
      "Open, active zones that support movement, play, and social development.",
    image: playground,
  },
];

const FacilitiesShowcase = () => {
  return (
    <section id="facilities-showcase" className="bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17375D] sm:text-sm sm:tracking-[0.24em]">
            Featured Facilities
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
            Carefully designed spaces for academic and personal growth.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            A modern school experience depends on thoughtful spaces. These are
            some of the environments that shape everyday campus life at Adrian.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {facilities.map((facility, index) => (
            <article
              key={facility.id}
              className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem] ${
                index === 0 || index === 5 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`grid ${
                  index === 0 || index === 5
                    ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]"
                    : "md:grid-cols-[300px_minmax(0,1fr)]"
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className={`w-full object-cover transition duration-700 hover:scale-105 ${
                      index === 0 || index === 5
                        ? "h-56 sm:h-[320px] md:h-[380px]"
                        : "h-56 sm:h-[280px] md:h-full"
                    }`}
                  />
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A017]">
                    Infrastructure
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#17375D] sm:mt-4 sm:text-3xl">
                    {facility.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-[15px] sm:leading-8 md:text-base">
                    {facility.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesShowcase;
