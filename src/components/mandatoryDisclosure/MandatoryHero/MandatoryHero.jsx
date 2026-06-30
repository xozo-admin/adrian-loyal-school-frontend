import hero from "../../../assets/images/mandatory/mandatory-hero.png";

const MandatoryHero = () => {
  return (
    <section className="bg-white">
      <img
        src={hero}
        alt="Mandatory Disclosure"
        className="h-[240px] w-full object-cover md:h-[520px]"
      />
    </section>
  );
};

export default MandatoryHero;
