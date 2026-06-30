import hero from "../../../assets/images/CAREER.webp";

const CareersHero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1700px]">
        <img
          src={hero}
          alt="Careers"
          className="h-[220px] w-full object-cover object-[center_25%] md:h-[280px] lg:h-[500px]"
        />
      </div>
    </section>
  );
};

export default CareersHero;
