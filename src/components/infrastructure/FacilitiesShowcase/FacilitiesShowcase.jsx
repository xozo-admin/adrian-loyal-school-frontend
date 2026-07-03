import activity from "../../../assets/images/infrastructure/activity.webp";
import computerLab from "../../../assets/images/infrastructure/computer-lab.webp";
import library from "../../../assets/images/infrastructure/library.webp";
import playground from "../../../assets/images/infrastructure/play-area.webp";
import scienceLab from "../../../assets/images/infrastructure/science-lab.webp";
import smartClass from "../../../assets/images/infrastructure/smart-class.webp";
import { PiBookOpenTextFill } from "react-icons/pi";

const facilities = [
  {
    id: 1,
    title: "Smart and Spacious Classrooms",
    description:
      `Ventilated, spacious classrooms designed for comfort, focus, and collaboration. 
      Equipped with digital technology for dynamic learning that bridges traditional and modern teaching methods.`,
    image: smartClass,
  },
  {
    id: 2,
    title: "Advanced Composite Labs",
    description:
      `State-of-the-art facilities for Physics, Chemistry, and Biology. 
      Hands-on exploration, and practical experiments that brings scientific concepts to life under expert supervision.`,
    image: scienceLab,
  },
  {
    id: 3,
    title: "AI-Powered Computer Labs",
    description:
      `Cutting-edge labs that prepare students for future innovations in artificial intelligence and computing. 
      Practical learning in coding, robotics, and computational thinking.`,
    image: computerLab,
  },
  {
    id: 4,
    title: "Library",
    description:
      `Our school takes pride in a well-stocked library that offers a wide variety of books to inspire and engage young minds. 
      From fiction and non-fiction to reference materials and periodicals, our collection caters to diverse reading interests and academic needs.`,
    image: library,
  },
  {
    id: 5,
    title: "Sensorial Learning Arena",
    description:
      `A thoughtfully crafted space encouraging sensory engagement and intellectual curiosity. 
     Hands-on materials and engaging activities encourage cognitive development, strengthen critical thinking, and enhance problem-solving skills.`,
    image: activity,
  },
  {
    id: 6,
    title: "Spacious Play Area",
    description:
      `Designed to inspire unstructured play, enhancing creativity, imagination, and social interaction.`,
    image: playground,
  },
];

const FacilitiesShowcase = () => {
  return (
    <section
      id="facilities-showcase"
      className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
            Featured Facilities
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
            Carefully designed spaces for academic and personal growth.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            A modern school experience depends on thoughtful spaces. These are
            some of the environments that shape everyday campus life at Adrian.
          </p>
        </div>

        {/* Facilities */}
        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8">
          {facilities.map((facility, index) => (
            <article
              key={facility.id}
              className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-[2rem] ${index === 0 || index === 5 ? "lg:col-span-2" : ""
                }`}
            >
              <div
                className={`grid ${index === 0 || index === 5
                    ? "lg:grid-cols-[1.1fr_0.9fr]"
                    : "md:grid-cols-[280px_1fr]"
                  }`}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className={`w-full object-cover transition duration-700 hover:scale-105 ${index === 0 || index === 5
                        ? "h-60 sm:h-72 md:h-80 lg:h-[380px]"
                        : "h-56 sm:h-64 md:h-full"
                      }`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm">
                    Infrastructure
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#17375D] sm:text-3xl">
                    {facility.title}
                  </h3>

                  <div className="mt-4 space-y-4">
                    {facility.description.split("\n").map((line, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="mt-1 text-[#D3131A]">
                          <PiBookOpenTextFill className="text-lg" />
                        </span>

                        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
                          {line.trim()}
                        </p>
                      </div>
                    ))}
                  </div>
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
