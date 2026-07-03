import hero from "../../../assets/images/CAREER.webp";

const CareersHero = () => {
  return (
    <section className="bg-white">
  <div className="mx-auto w-full max-w-7xl overflow-hidden lg:rounded-[2rem]">
    <img
      src={hero}
      alt="Careers"
      className="h-[220px] w-full object-cover object-center sm:h-[320px] md:h-[420px] lg:h-[520px]"
    />
  </div>
</section>
  );
};

export default CareersHero;
