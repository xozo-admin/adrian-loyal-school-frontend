import hero from "../../../assets/images/contact/contact-hero.jpg";

const ContactHero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1700px]">
        <img
          src={hero}
          alt="Contact"
          className="h-[220px] w-full object-cover object-[center_18%] md:h-[280px] lg:h-[500px]"
        />
      </div>
    </section>
  );
};

export default ContactHero;
