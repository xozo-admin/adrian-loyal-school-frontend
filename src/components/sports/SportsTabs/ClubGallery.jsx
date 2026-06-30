import { motion } from "framer-motion";

const ClubGallery = ({ images }) => {
  return (
    <section className="mt-10 sm:mt-16">

      <div className="mb-6 sm:mb-8">

        <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4A017] sm:text-base sm:tracking-[4px]">
          Gallery
        </span>

        <h3 className="mt-2 text-2xl font-bold text-[#17375D] sm:text-3xl">
          Club Activities
        </h3>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl"
          >
            <img
              src={image}
              alt={`Club activity ${index + 1}`}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-72"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default ClubGallery;
