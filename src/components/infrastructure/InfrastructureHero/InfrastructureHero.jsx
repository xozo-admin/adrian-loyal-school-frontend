import hero from "../../../assets/images/infrastructure/infrastructure-hero.png";

const InfrastructureHero = () => {
  return (
    <section className="relative h-[250px] overflow-hidden bg-[#0F2742] sm:h-[350px] md:h-[450px] lg:h-[550px]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={hero}
      alt="Infrastructure"
      className="h-full w-full object-cover object-center"
    />

    {/* Optional Overlay */}
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* Content Container */}
  <div className="relative mx-auto flex h-full w-[90%] max-w-7xl items-center">
    {/* Add your heading/content here */}
  </div>
</section>
  );
};

export default InfrastructureHero;
