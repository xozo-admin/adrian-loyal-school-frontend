import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import UpdateCard from "./UpdateCard";

const API = "https://arun9361499299.pythonanywhere.com/api/home/updates";
const fileBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const LatestUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const loadUpdates = async () => {
      try {
        const response = await axios.get(API);

        setUpdates(
          (response.data || []).map((item) => ({
            ...item,
            image: item.image?.startsWith("http")
              ? item.image
              : `${fileBaseUrl}${item.image}`,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    loadUpdates();
  }, []);

  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl font-bold text-[#16324F] sm:text-4xl lg:text-5xl">
            Latest Updates
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            Stay informed with the latest announcements, events, and important
            updates from The Adrian Loyal School.
          </p>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#D4A017]" />
        </motion.div>

        {updates.length > 0 ? (
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={updates.length > 1}
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
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
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="pb-8"
            >
              {updates.map((update) => (
                <SwiperSlide key={update.id}>
                  <UpdateCard update={update} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-base text-slate-500 lg:rounded-[2rem] lg:text-lg">
            No latest updates uploaded yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestUpdates;