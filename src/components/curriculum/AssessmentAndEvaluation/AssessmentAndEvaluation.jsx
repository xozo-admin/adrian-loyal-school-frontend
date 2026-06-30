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
    <section className="bg-white py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}

        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={assessmentImg}
            alt="Assessment"
            className="h-[550px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#17375D]/80 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 p-6 backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-[#17375D]">
              360°
            </h3>

            <p className="mt-2 text-gray-700">
              Continuous Student Evaluation
            </p>
          </div>
        </div>

        {/* Content */}

        <div>

          <p className="uppercase tracking-[0.3em] font-semibold text-[#D4A017]">
            Assessment & Evaluation
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#17375D]">
            Measuring Growth,
            <br />
            Not Just Marks
          </h2>

          <div className="mt-10 space-y-5">

            {assessments.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition hover:bg-[#17375D] hover:text-white"
              >
                <FaCheckCircle className="text-[#D4A017]" />

                <span className="font-medium">
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