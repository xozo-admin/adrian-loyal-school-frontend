import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import activity from "../../../assets/images/infrastructure/activity.webp";
import campus from "../../../assets/images/infrastructure/green-campus.webp";
import library from "../../../assets/images/infrastructure/library.webp";
import lab from "../../../assets/images/infrastructure/science-lab.webp";
import classroom from "../../../assets/images/infrastructure/smart-class.webp";
import swimming from "../../../assets/images/infrastructure/swimming.webp";
import tennis from "../../../assets/images/infrastructure/tennis.webp";
import playground from "../../../assets/images/infrastructure/play-area.webp";

const campusImages = [
  {
    image: classroom,
    title: "Smart Classrooms",
  },
  {
    image: library,
    title: "Library",
  },
  {
    image: lab,
    title: "Science Laboratory",
  },
  {
    image: activity,
    title: "Activity Hall",
  },
  {
    image: playground,
    title: "Play Area",
  },
  {
    image: campus,
    title: "Green Campus",
  },
  {
    image: swimming,
    title: "Swimming Area",
  },
  {
    image: tennis,
    title: "Sports Courts",
  },
];

const VirtualCampusTour = () => {
  return (
    <section className="bg-[#0F2742] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="mb-10 max-w-4xl sm:mb-14 lg:mb-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.24em]">
        Visual Tour
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
        A closer look at the spaces students experience every day.
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        Browse key campus environments through a clean visual tour designed
        to showcase the atmosphere, scale, and quality of our facilities.
      </p>
    </div>

    {/* Swiper */}
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      loop={campusImages.length > 3}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      className="pb-14"
    >
      {campusImages.map((item) => (
        <SwiperSlide key={item.title}>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-[2rem]">
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-cover sm:h-72 md:h-80 lg:h-[420px]"
            />

            <div className="border-t border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
                Campus Space
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {item.title}
              </h3>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
};

export default VirtualCampusTour;
