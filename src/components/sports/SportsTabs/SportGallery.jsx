import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const SportGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="mt-12 sm:mt-16 lg:mt-20">
  {/* Heading */}
  <div className="mb-8 flex items-center justify-between sm:mb-10">
    <div>
      <h3 className="text-2xl font-bold leading-tight text-[#16324F] sm:text-3xl lg:text-4xl">
        Gallery
      </h3>

      <div className="mt-3 h-1 w-16 rounded-full bg-red-500 sm:w-20"></div>
    </div>
  </div>

  {/* Gallery */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
    {images.map((image, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8 }}
        className="cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl lg:rounded-3xl"
        onClick={() => setSelectedImage(image)}
      >
        <img
          src={image}
          alt={`Gallery ${index + 1}`}
          className="h-56 w-full object-cover transition duration-500 hover:scale-110 sm:h-64 md:h-72 lg:h-80"
        />
      </motion.div>
    ))}
  </div>
</section>

{/* Lightbox */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        aria-label="Close image preview"
        className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-xl text-white transition hover:bg-black/60 sm:right-6 sm:top-6 sm:text-2xl"
      >
        <FaTimes />
      </button>

      {/* Preview Image */}
      <motion.img
        src={selectedImage}
        alt="Preview"
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
      />
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default SportGallery;
