import { motion } from "framer-motion";

const AchievementCard = ({ achievement }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl lg:rounded-[2rem]"
    >

      <div className="flex h-72 items-center justify-center bg-[#F8FAFC] p-3">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

    </motion.div>
  );
};

export default AchievementCard;

