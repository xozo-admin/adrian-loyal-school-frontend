import { useEffect, useState } from "react";
import { getGallery } from "../../../api/galleryApi";

const GalleryGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const response = await getGallery();
      console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
  <div className="mx-auto grid w-[90%] max-w-7xl gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    {images.map((image) => (
      <div
        key={image.id}
        className="overflow-hidden rounded-2xl shadow-lg lg:rounded-3xl"
      >
        <img
          src={`https://arun9361499299.pythonanywhere.com/uploads/${image.image}`}
          alt={image.title}
          className="h-56 w-full object-cover transition duration-500 hover:scale-110 sm:h-64 md:h-72 lg:h-80"
        />
      </div>
    ))}
  </div>
</section>
  );
};

export default GalleryGrid;
