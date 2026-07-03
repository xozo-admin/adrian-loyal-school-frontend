import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import AchievementCard from "./AchievementCard";

const API = "https://arun9361499299.pythonanywhere.com/api/home/achievements";
const fileBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const Achievements = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        const response = await axios.get(API);
        setItems(
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

    loadAchievements();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="mb-10 text-center sm:mb-14 lg:mb-16">
      <h2 className="text-3xl font-bold text-[#16324F] sm:text-4xl lg:text-5xl">
        Achievements & Accolades
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
        Celebrating the accomplishments and milestones that reflect our
        students' dedication, talent, and pursuit of excellence.
      </p>
    </div>

    {/* Achievement Cards */}
    {items.length > 0 ? (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((achievement) => (
          <div
            key={achievement.id}
            onClick={() => setSelected(achievement)}
            className="cursor-pointer"
          >
            <AchievementCard achievement={achievement} />
          </div>
        ))}
      </div>
    ) : (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center text-base text-slate-500 lg:rounded-[2rem] lg:text-lg">
        No achievements uploaded yet.
      </div>
    )}
  </div>

  {/* Lightbox */}
  <AnimatePresence>
    {selected && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl lg:rounded-[2rem]"
        >
          <img
            src={selected.image}
            alt={selected.title || "Achievement"}
            className="max-h-[75vh] w-full object-contain bg-slate-50"
          />

          {(selected.title || selected.description) && (
            <div className="p-5 sm:p-6 lg:p-8">
              {selected.title && (
                <h3 className="text-2xl font-bold text-[#16324F]">
                  {selected.title}
                </h3>
              )}

              {selected.description && (
                <p
                  className={`${
                    selected.title ? "mt-4" : ""
                  } text-sm leading-7 text-slate-600 sm:text-base sm:leading-8`}
                >
                  {selected.description}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>
  );
};

export default Achievements;
