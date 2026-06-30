import hero from "../../../assets/images/curriculum/curriculum-hero.png";

const CurriculumHero = () => {
  return (
    <section className="relative h-72 overflow-hidden sm:h-[420px] lg:min-h-[500px]">
      <img
        src={hero}
        alt="Curriculum Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </section>
  );
};

export default CurriculumHero;
