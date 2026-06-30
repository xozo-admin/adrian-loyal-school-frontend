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
    <section className="pb-24">
      <div className="mx-auto grid w-[90%] max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            <img
              src={`https://arun9361499299.pythonanywhere.com/uploads/${image.image}`}
              alt={image.title}
              className="h-80 w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default GalleryGrid;
