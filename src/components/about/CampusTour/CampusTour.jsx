import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const API = "https://arun9361499299.pythonanywhere.com/api/about/campus-tour";
const imageBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const CampusTour = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadCampusImages = async () => {
      try {
        const response = await axios.get(API);
        setImages(response.data);
      } catch (error) {
        console.error("Failed to load campus tour images:", error);
      }
    };

    loadCampusImages();
  }, []);

  if (!images.length) {
    return null;
  }

  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17375D] sm:text-sm sm:tracking-[0.24em]">
              Our Campus
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
              Spaces Designed for Learning, Play, and Discovery
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              A calm, modern environment where classrooms, activity zones, and
              shared spaces come together to support everyday growth.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={3}
          loop={images.length > 3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="campus-tour-slider pb-16"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:rounded-[2rem]">
                <img
                  src={`${imageBaseUrl}${image.image}`}
                  alt={image.title}
                  className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80 lg:h-[380px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CampusTour;
