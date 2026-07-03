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
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-[#D3131A]">
            Admission Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#17375D] md:text-5xl">
            Your Journey Starts Here
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our admission process is simple and transparent. Follow these
            easy steps to become a part of The Adrian Loyal School family.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-[#D3131A]/30 lg:block"></div>

          <div className="grid gap-8 lg:grid-cols-5">

            {steps.map((step) => (

              <div
                key={step.id}
                className="relative text-center"
              >

                {/* Circle */}

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#17375D] text-4xl text-white shadow-lg">
                  {step.icon}
                </div>

                {/* Step */}

                <div className="mt-6">

                  <span className="text-sm font-bold tracking-widest text-[#D3131A]">
                    STEP {step.id}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-[#17375D]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
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