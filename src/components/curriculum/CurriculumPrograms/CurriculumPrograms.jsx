import { motion } from "framer-motion";
import prePrimary from "../../../assets/images/curriculum/pre-primary.png";
import primary from "../../../assets/images/curriculum/primary.png";
import middle from "../../../assets/images/curriculum/middle-school.png";
import secondary from "../../../assets/images/curriculum/secondary.png";
import experientialImage from "../../../assets/images/curriculum/assessment.png";

const academicStages = [
  {
    title: "Early Childhood Education",
    image: prePrimary,
    body: [
      {
        label: "Focus",
        text: "Building foundational skills in literacy, numeracy, and social interactions.",
      },
      {
        label: "Methodology",
        text: "We employ play-based learning, storytelling, hands-on activities, and inquiry-based approaches to engage young learners.",
      },
      {
        label: "Pedagogies",
        text: "Inspired by WALDORF, Montessori, and Reggio Emilia philosophies, children are encouraged to choose their activities within a structured environment, fostering independence and creativity.",
      },
    ],
  },
  {
    title: "Primary Education (Grades 1-5)",
    image: primary,
    body: [
      {
        label: "Subjects",
        text: "Core subjects include English, Hindi, Mathematics, Environmental Studies, and Physical Education.",
      },
      {
        label: "Approach",
        text: "Our interactive lessons, project-based learning, and experiential activities promote critical thinking and creativity, ensuring an engaging learning experience.",
      },
    ],
  },
  {
    title: "Middle School (Grades 6-8)",
    image: middle,
    body: [
      {
        label: "Subjects",
        text: "The curriculum encompasses English, Hindi, Mathematics, Science, Social Science, and Computer Science.",
      },
      {
        label: "Focus Areas",
        text: "We emphasize the development of analytical skills, independent research, and collaborative projects to prepare students for future academic challenges.",
      },
    ],
  },
  {
    title: "Secondary Education (Grades 9-10)",
    image: secondary,
    body: [
      {
        label: "Core Subjects",
        text: "Students study English, Mathematics, Science, Social Science, and Physical Education.",
      },
      {
        label: "Electives",
        text: "Additional options include Computer Science, Artificial Intelligence, and foreign languages.",
      },
      {
        label: "Assessment",
        text: "Our continuous and comprehensive evaluation methods provide a holistic view of student progress.",
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CurriculumPrograms = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <motion.div
      className="mb-12 text-center sm:mb-16 lg:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold leading-tight text-[#17375D] sm:text-4xl lg:text-6xl">
        Academic Structure
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 bg-[#E11D2E] sm:mt-5 sm:h-[5px] sm:w-28"></div>
    </motion.div>

    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {academicStages.map((stage, index) => (
        <motion.div
          key={stage.title}
          className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            delay: index * 0.08,
            ease: "easeOut",
          }}
        >
          {/* Content */}
          <motion.div
            className={index % 2 === 0 ? "lg:pr-6" : "lg:pl-6"}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold leading-tight text-[#17375D] sm:text-3xl lg:text-4xl">
              {stage.title}
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:mt-6 sm:text-base sm:leading-8 lg:mt-8 lg:space-y-5 lg:text-lg">
              {stage.body.map((item) => (
                <p key={item.label}>
                  <span className="font-semibold text-[#E11D2E]">
                    {item.label}:
                  </span>{" "}
                  {item.text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-sm lg:rounded-[1.5rem]"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 30 : -30,
              scale: 0.98,
            }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <motion.img
              src={stage.image}
              alt={stage.title}
              className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-[450px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* Experiential Learning */}
    <motion.div
      className="mt-16 grid items-center gap-10 sm:mt-20 lg:mt-28 lg:grid-cols-[1.02fr_1fr] lg:gap-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {/* Content */}
      <div className="max-w-3xl">
        <h3 className="text-2xl font-semibold leading-tight text-[#17375D] sm:text-3xl lg:text-4xl">
          Experiential Learning
          <br />
          Thursdays at The Adrian
        </h3>

        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:mt-8 sm:text-base sm:leading-8 lg:mt-10 lg:text-lg">
          <p>
            We believe in bridging the gap between classroom learning and
            real-world experiences. Every Thursday, students immerse
            themselves in the{" "}
            <strong className="font-semibold text-slate-800">
              Exercises of Practical Life (EPL)
            </strong>
            , where theory meets practice.
          </p>

          <p>
            This hands-on approach inspires curiosity, creativity, and
            critical thinking through engaging activities and interactive
            sessions.
          </p>

          <p>
            From making milk dumplings to preparing sandwiches and juices,
            pegging clothes, and folding them, children learn valuable
            everyday life skills.
          </p>

          <p>
            Experiential Learning Thursdays provide an engaging environment
            where students learn, grow, and thrive.
          </p>

          <p className="font-semibold text-[#17375D]">
            Join us in redefining education, one Thursday at a time.
          </p>
        </div>
      </div>

      {/* Image */}
      <motion.div
        className="overflow-hidden rounded-2xl shadow-sm lg:rounded-[1.5rem]"
        initial={{ opacity: 0, x: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={experientialImage}
          alt="Students during experiential learning activities"
          className="h-64 w-full object-cover sm:h-96 md:h-[480px] lg:h-[640px]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45 }}
        />
      </motion.div>
    </motion.div>
  </div>
</section>
  );
};

export default CurriculumPrograms;
