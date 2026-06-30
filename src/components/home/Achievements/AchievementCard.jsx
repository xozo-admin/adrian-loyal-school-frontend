import { motion } from "framer-motion";

const AchievementCard = ({ achievement }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-xl bg-white shadow-lg"
    >
      <div className="overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title || "School achievement"}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-72"
        />
      </div>

    </motion.div>
  );
};

export default AchievementCard;
