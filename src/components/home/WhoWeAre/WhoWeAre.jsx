import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import whoWeAreData from "./whoWeAreData";

const WhoWeAre = () => {
    return (
//        

<section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center">
        <h2
          className="text-3xl font-light text-[#16324F] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {whoWeAreData.title}
        </h2>
      </div>

      {/* Content */}
      <div className="mx-auto mt-8 max-w-5xl border-l-4 border-[#D3131A] pl-5 sm:mt-10 sm:pl-6 lg:mt-12 lg:pl-8">
        <div className="space-y-5 sm:space-y-6">
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
        <blockquote
          className="mt-8 border-l-2 border-[#17375D] pl-4 italic text-[#17375D] sm:mt-10 sm:pl-5"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          <p className="text-lg font-medium leading-8 sm:text-xl sm:leading-9 lg:text-2xl">
            "Join us in shaping the future, one bright mind at a time.
            Let's grow, learn, and succeed together!"
          </p>
        </blockquote>

        {/* Button */}
        <div className="mt-8 sm:mt-10">
          <Link to="/about">
            <Button>View More</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    );
};

export default WhoWeAre;
