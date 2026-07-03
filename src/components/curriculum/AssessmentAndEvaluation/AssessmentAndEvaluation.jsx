import assessmentImg from "../../../assets/images/curriculum/assessment.png";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaTasks,
  FaComments,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

const assessments = [
  "Regular Class Assessments",
  "Project-Based Learning",
  "Practical & Laboratory Activities",
  "Assignments & Worksheets",
  "Continuous Teacher Feedback",
  "Parent-Teacher Interaction",
];

const AssessmentAndEvaluation = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
    {/* Image */}
    <div className="relative overflow-hidden rounded-2xl shadow-2xl lg:rounded-3xl">
      <img
        src={assessmentImg}
        alt="Assessment"
        className="h-64 w-full object-cover sm:h-80 md:h-[450px] lg:h-[550px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#17375D]/80 via-transparent to-transparent" />

      {/* Badge */}
      <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 p-4 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:rounded-2xl sm:p-5 lg:bottom-8 lg:left-8 lg:p-6">
        <h3 className="text-2xl font-bold text-[#17375D] sm:text-3xl lg:text-4xl">
          360°
        </h3>

        <p className="mt-1 text-xs text-gray-700 sm:mt-2 sm:text-sm lg:text-base">
          Continuous Student Evaluation
        </p>
      </div>
    </div>

    {/* Content */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017] sm:text-sm sm:tracking-[0.3em]">
        Assessment & Evaluation
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        Measuring Growth,
        <br />
        Not Just Marks
      </h2>

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        {assessments.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 transition duration-300 hover:bg-[#17375D] hover:text-white sm:gap-4"
          >
            <FaCheckCircle className="shrink-0 text-lg text-[#D4A017]" />

            <span className="text-sm font-medium sm:text-base lg:text-lg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default AssessmentAndEvaluation;