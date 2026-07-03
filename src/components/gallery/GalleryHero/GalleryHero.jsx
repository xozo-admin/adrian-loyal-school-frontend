import heroImg from "../../../assets/images/gallery/gallery-hero.png";

const GalleryHero = () => {
  return (
   <section className="relative h-[50vh] sm:h-[60vh] lg:h-[65vh] w-full overflow-hidden">
  {/* Background Image */}
  <img
    src={heroImg}
    alt="Gallery"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8">
    <div className="max-w-4xl text-center text-white">
      <p className="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
        Memories • Moments • Achievements
      </p>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-200 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
        Explore the memorable moments, achievements, campus life,
        cultural celebrations, sports events, and academic excellence
        of The Adrian Loyal School.
      </p>
    </div>
  </div>
</section>
  );
};

export default GalleryHero;