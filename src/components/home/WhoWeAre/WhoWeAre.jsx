import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import whoWeAreData from "./whoWeAreData";

const WhoWeAre = () => {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center"
    >
      {/* Title */}
      <h2
        className="text-3xl font-light leading-tight text-[#16324F] sm:text-4xl lg:text-5xl"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        {whoWeAreData.title}
      </h2>

      {/* Description */}
      <div className="mx-auto mt-6 max-w-4xl space-y-5 sm:mt-8 sm:space-y-6 lg:mt-10 lg:space-y-7">
        {whoWeAreData.description.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 lg:text-lg lg:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Quote */}
      <p
        className="mx-auto mt-8 max-w-4xl text-lg italic font-medium leading-8 text-[#17375D] sm:mt-10 sm:text-xl sm:leading-9 lg:text-2xl"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        Join us in shaping the future, one bright mind at a time.
        <br className="hidden sm:block" />
        Let&apos;s grow, learn, and succeed together!
      </p>

      {/* Button */}
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <Link to="/about">
          <Button>
            View More
          </Button>
        </Link>
      </div>
    </motion.div>
  </div>
</section>
    );
};

export default WhoWeAre;
