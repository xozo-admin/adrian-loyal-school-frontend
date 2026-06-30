import { motion } from "framer-motion";
import prePrimary from "../../../assets/images/curriculum/curriculam.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CurriculumIntro = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:w-[90%] lg:px-0">
        <motion.div
          className="max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl text-[#17375D] sm:text-4xl md:text-6xl">Curriculum</h2>

          <div className="mt-5 h-[5px] w-24 bg-[#E11D2E]" />

          <div className="mt-7 border-l-4 border-[#E11D2E] pl-4 sm:mt-10 md:pl-6">
            <p className="max-w-6xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-9 md:text-[1.3rem] md:leading-[1.9]">
              We provide a well-rounded educational experience designed to
              support the holistic development of every student. Our curriculum
              includes a diverse range of sports, performing arts,
              extracurricular activities, and special events that complement our
              academic programs.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid items-stretch gap-6 sm:mt-16 sm:gap-10 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            className="rounded-2xl bg-[#17375D] p-5 text-white shadow-sm sm:rounded-[1.75rem] sm:p-8 md:p-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="space-y-5 text-sm leading-7 text-white/95 sm:space-y-7 sm:text-base sm:leading-8 md:text-[1.08rem]">
              <p>
                Our foundational curriculum emphasizes the development of
                cognitive and metacognitive skills, with a strong focus on
                instilling the values of greatness through Everyday Practices of
                Life (EPL). Under the guidance of our Founder Correspondent, Ms.
                Janet Ragupathy, our dedicated team meticulously designs the
                foundation syllabus, drawing on extensive research and analysis
                of various educational frameworks. This commitment allows us to
                create customized learning materials that address the unique
                needs of our students.
              </p>

              <p>
                We believe in an immersive learning approach that encourages
                students to “Touch, Feel, Sense & Learn,” fostering genuine
                understanding and engagement rather than rote memorization.
                Recognizing the importance of discipline and ethical values, we
                integrate these principles throughout our curriculum.
              </p>

              <p>
                For our Middle to High school, we adhere to the National Council
                of Educational Research and Training (NCERT) curriculum while
                enhancing their educational experience with practical cognitive
                sessions. These sessions nurture a love for learning and prepare
                students for future academic challenges, including entrance
                examinations such as NEET and JEE, utilizing MEDJEE books and
                other competitive resources.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl shadow-sm sm:rounded-[1.75rem]"
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={prePrimary}
              alt="Students engaged in classroom learning"
              className="h-64 w-full object-cover sm:min-h-[420px] lg:h-full"
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
