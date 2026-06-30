import hero from "../../../assets/images/sports/sports-hero.png";

const SportsHero = () => {
  return (
    <section className="relative h-[360px] w-full overflow-hidden sm:h-[500px] lg:h-[65vh]">

      <img
        src={hero}
        alt="Sports"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">

        <div className="text-center text-white">

          <h1 className="mb-4 text-3xl font-bold sm:mb-5 sm:text-4xl lg:text-6xl">
            Sports & Clubs
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-200 sm:text-lg sm:leading-normal">
            Building confident, disciplined and creative students through
            sports, leadership and extracurricular activities.
          </p>

        </div>

      </div>

    </section>
  );
};

export default SportsHero;
