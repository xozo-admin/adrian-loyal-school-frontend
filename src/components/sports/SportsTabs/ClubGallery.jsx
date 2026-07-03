import { motion } from "framer-motion";

const ClubGallery = ({ images }) => {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
  {/* Heading */}
  <div className="mb-8 sm:mb-10">
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.25em] lg:text-base lg:tracking-[0.3em]">
      Gallery
    </span>

    <h3 className="mt-2 text-2xl font-bold leading-tight text-[#17375D] sm:text-3xl lg:text-4xl">
      Club Activities
    </h3>
  </div>

  {/* Gallery */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
    {images.map((image, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-2xl shadow-lg lg:rounded-3xl"
      >
        <img
          src={image}
          alt={`Club activity ${index + 1}`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64 md:h-72 lg:h-80"
        />
      </motion.div>
    ))}
  </div>
</section>
  );
};

export default ClubGallery;
