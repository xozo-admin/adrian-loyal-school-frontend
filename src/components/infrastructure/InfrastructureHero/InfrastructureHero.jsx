import hero from "../../../assets/images/infrastructure/infrastructure-hero.png";

const InfrastructureHero = () => {
  return (
    <section className="relative h-[360px] overflow-hidden bg-[#0F2742] sm:h-[500px] lg:h-auto lg:aspect-[3/1]">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Infrastructure"
          className="h-full w-full object-cover object-center"
        />
        
      </div>

      <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6">


      
      </div>
    </section>
  );
};

export default InfrastructureHero;
