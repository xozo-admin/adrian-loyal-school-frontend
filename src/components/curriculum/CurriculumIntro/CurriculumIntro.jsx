import { motion } from "framer-motion";
import prePrimary from "../../../assets/images/curriculum/curriculam.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CurriculumIntro = () => {
  return (
   <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <motion.div
      className="max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold leading-tight text-[#17375D] sm:text-4xl lg:text-6xl">
        Curriculum
      </h2>

      <div className="mt-4 h-1 w-20 bg-[#E11D2E] sm:mt-5 sm:h-[5px] sm:w-24"></div>

      <div className="mt-6 border-l-4 border-[#E11D2E] pl-4 sm:mt-8 sm:pl-5 lg:mt-10 lg:pl-6">
        <p className="max-w-6xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
          We provide a well-rounded educational experience designed to
          support the holistic development of every student. Our curriculum
          includes a diverse range of sports, performing arts,
          extracurricular activities, and special events that complement our
          academic programs.
        </p>
      </div>
    </motion.div>

    <div className="mt-10 grid items-stretch gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      {/* Left Card */}
      <motion.div
        className="rounded-2xl bg-[#17375D] p-5 text-white shadow-sm sm:p-7 lg:rounded-[1.75rem] lg:p-10"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="space-y-5 text-sm leading-7 text-white/95 sm:text-base sm:leading-8 lg:space-y-7 lg:text-[1.05rem]">
          <p>
            Our foundational curriculum emphasizes the development of
            cognitive and metacognitive skills, with a strong focus on
            instilling the values of greatness through Everyday Practices of
            Life (EPL). Under the guidance of our Founder Correspondent,
            Ms. Janet Ragupathy, our dedicated team meticulously designs the
            foundation syllabus, drawing on extensive research and analysis
            of various educational frameworks.
          </p>

          <p>
            We believe in an immersive learning approach that encourages
            students to "Touch, Feel, Sense & Learn," fostering genuine
            understanding and engagement rather than rote memorization.
            Discipline and ethical values are integrated throughout our
            curriculum.
          </p>

          <p>
            For our Middle and High School, we follow the NCERT curriculum
            while enriching learning with practical cognitive sessions.
            Students are also prepared for competitive examinations such as
            NEET and JEE using MEDJEE books and other advanced resources.
          </p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="overflow-hidden rounded-2xl shadow-sm lg:rounded-[1.75rem]"
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={prePrimary}
          alt="Students engaged in classroom learning"
          className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default CurriculumIntro;
