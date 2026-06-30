import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import GalleryHero from "../../components/gallery/GalleryHero/GalleryHero";
import GalleryFilter from "../../components/gallery/GalleryFilter/GalleryFilter";
import GalleryGrid from "../../components/gallery/GalleryGrid/GalleryGrid";

const Gallery = () => {
  return (
    <>
      <Navbar />

      <GalleryHero />
      <GalleryFilter />
      <GalleryGrid />

      <Footer />

    </>
  );
};

export default Gallery;