import hero from "../../../assets/images/curriculum/curriculum-hero.png";

const CurriculumHero = () => {
  return (
   <section className="relative h-[250px] overflow-hidden sm:h-[350px] md:h-[450px] lg:h-[550px]">
  <img
    src={hero}
    alt="Curriculum Hero"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />
</section>
  );
};

export default CurriculumHero;
