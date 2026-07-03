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
   <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="mb-10 text-center sm:mb-14 lg:mb-16">
      <h2
        className="text-3xl font-normal text-[#173A67] sm:text-4xl lg:text-[54px]"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        Testimonials
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
        Hear from our parents and students about their experiences, growth,
        and memorable journey at The Adrian Loyal School.
      </p>
    </div>

    {/* Testimonial */}
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5 }}
      >
        <TestimonialCard
          testimonial={testimonialsData[current]}
        />
      </motion.div>
    </AnimatePresence>

    {/* Dots */}
    <div className="mt-10 flex justify-center gap-3 sm:mt-12 sm:gap-4">
      {testimonialsData.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          aria-label={`Show testimonial ${index + 1}`}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            current === index
              ? "scale-125 bg-[#173A67]"
              : "bg-[#E11D2E]/60 hover:bg-[#E11D2E]"
          }`}
        />
      ))}
    </div>
  </div>
</section>
  );
};

export default Testimonials;
