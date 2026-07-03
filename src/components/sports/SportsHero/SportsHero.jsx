import hero from "../../../assets/images/sports/sports-hero.png";

const SportsHero = () => {
  return (
   <section className="relative h-[320px] overflow-hidden sm:h-[450px] md:h-[550px] lg:h-[65vh]">
  {/* Background Image */}
  <img
    src={hero}
    alt="Sports"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8">
    <div className="max-w-3xl text-center text-white">
      <h1 className="mb-3 text-3xl font-bold leading-tight sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
        Sports & Clubs
      </h1>

      <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8 md:text-lg">
        Building confident, disciplined, and creative students through
        sports, leadership, and extracurricular activities.
      </p>
    </div>
  </div>
</section>
  );
};

export default SportsHero;
