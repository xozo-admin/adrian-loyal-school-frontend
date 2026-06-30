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
          })),
        );
      } catch (error) {
        console.error(error);
      }
    };

    loadUpdates();
  }, []);

  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-9 text-center sm:mb-16"
        >
          <h2 className="mt-3 text-3xl font-bold text-[#16324F] sm:text-4xl lg:text-5xl">
            Latest Updates
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4A017]" />
        </motion.div>

        {updates.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={18}
            slidesPerView={4}
            slidesPerGroup={1}
            loop={updates.length > 1}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-8"
          >
            {updates.map((update) => (
              <SwiperSlide key={update.id} className="h-auto">
                <UpdateCard update={update} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-lg text-slate-500">
            No latest updates uploaded yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestUpdates;
