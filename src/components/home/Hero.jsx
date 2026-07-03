import { motion } from "framer-motion";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
   <section className="relative h-[60vh] min-h-[450px] overflow-hidden sm:h-[70vh] lg:h-[85vh]">
  {/* Background Image */}
  <img
    src={heroImage}
    alt="Adrian Loyal School students"
    className="absolute inset-0 h-full w-full object-cover object-center lg:object-top"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-6">
    <div className="max-w-5xl text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Empowering{" "}
        <span className="text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl">
          Lives
        </span>

        <br />

        Inspiring{" "}
        <span className="text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl">
          Greatness
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="mt-8 flex justify-center sm:mt-10"
      >
        <Button to="/admission#admission-form">
          Apply Now
        </Button>
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-xl text-white sm:bottom-8 sm:text-2xl">
    ↓
  </div>
</section>
  );
};

export default Hero;
