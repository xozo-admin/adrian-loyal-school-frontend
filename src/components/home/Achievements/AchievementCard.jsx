import { motion } from "framer-motion";

const AchievementCard = ({ achievement }) => {
  return (
    <motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl lg:rounded-[2rem]"
>
  <div className="overflow-hidden">
    <img
      src={achievement.image}
      alt={achievement.title || "School achievement"}
      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 md:h-72 lg:h-80"
    />
  </div>
</motion.div>
  );
};

export default AchievementCard;
