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
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-9 text-center sm:mb-16">
          <h2 className="text-3xl font-bold text-[#16324F] sm:text-5xl">
            Achievements & Accolades
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center text-lg text-slate-500">
            No achievements uploaded yet.
          </div>
        )}
      </div>

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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90dvh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white"
            >
              <img
                src={selected.image}
                alt={selected.title || "Achievement"}
                className="max-h-[80vh] w-full object-contain"
              />

              {selected.title || selected.description ? (
                <div className="p-4 sm:p-6">
                  {selected.title ? (
                    <h3 className="text-xl font-bold sm:text-2xl">{selected.title}</h3>
                  ) : null}
                  {selected.description ? (
                    <p className={`${selected.title ? "mt-3" : ""} text-gray-600`}>
                      {selected.description}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
