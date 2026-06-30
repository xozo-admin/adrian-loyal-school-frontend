import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "./testimonialsData";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-4">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">

        {/* Heading */}

        <h2
          className="mb-7 text-center text-3xl font-normal text-[#173A67] sm:mb-10 sm:text-[54px] lg:py-5"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Testimonials
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialCard
              testimonial={testimonialsData[current]}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dots */}

        <div className="mt-8 flex justify-center gap-3 sm:mt-12 sm:gap-4">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-[#173A67]"
                  : "bg-[#E11D2E]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
