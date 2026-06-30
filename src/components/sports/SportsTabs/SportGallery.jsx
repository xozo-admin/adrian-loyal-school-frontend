import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const SportGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="mt-10 sm:mt-16">

        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#16324F] sm:text-3xl">
              Gallery
            </h3>

            <div className="w-20 h-1 bg-red-500 mt-3 rounded-full"></div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-56 w-full object-cover transition duration-500 hover:scale-110 sm:h-72"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute right-4 top-4 text-2xl text-white sm:right-8 sm:top-8 sm:text-3xl"
            >
              <FaTimes />
            </button>

            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-h-[85dvh] max-w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SportGallery;
