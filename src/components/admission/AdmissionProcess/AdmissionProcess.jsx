import {
  FaClipboardList,
  FaSchool,
  FaComments,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaClipboardList />,
    title: "Submit Enquiry",
    description:
      "Complete the admission enquiry form online or visit the school office.",
  },
  {
    id: "02",
    icon: <FaSchool />,
    title: "Campus Visit",
    description:
      "Explore our classrooms, facilities, and meet our admission team.",
  },
  {
    id: "03",
    icon: <FaComments />,
    title: "Interaction",
    description:
      "Parents and students attend a friendly interaction with our educators.",
  },
  {
    id: "04",
    icon: <FaFileAlt />,
    title: "Document Verification",
    description:
      "Submit the required documents for verification and eligibility.",
  },
  {
    id: "05",
    icon: <FaCheckCircle />,
    title: "Admission Confirmed",
    description:
      "Complete the fee payment and begin your child's learning journey.",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.3em]">
        Admission Process
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        Your Journey Starts Here
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
        Our admission process is simple and transparent. Follow these
        easy steps to become a part of The Adrian Loyal School family.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-14 sm:mt-16 lg:mt-20">
      {/* Desktop Timeline Line */}
      <div className="absolute left-0 right-0 top-12 hidden h-1 bg-[#D3131A]/30 lg:block"></div>

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative text-center"
          >
            {/* Circle */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#17375D] text-3xl text-white shadow-lg sm:h-24 sm:w-24 sm:text-4xl">
              {step.icon}
            </div>

            {/* Step */}
            <div className="mt-5 sm:mt-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#D3131A] sm:text-sm">
                STEP {step.id}
              </span>

              <h3 className="mt-2 text-xl font-bold text-[#17375D] sm:mt-3 sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default AdmissionProcess;