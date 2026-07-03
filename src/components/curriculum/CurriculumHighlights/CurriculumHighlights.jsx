import { useState } from "react";

const detailSections = [
  {
    title: "Cambridge English Assessments",
    content: [
      "We offer Cambridge English assessments to enhance students’ language skills and provide internationally recognized qualifications. Catering to various proficiency levels, these assessments help students demonstrate their English abilities effectively.",
      "Our dedicated teachers provide personalized support to prepare students for these assessments, fostering confidence in their communication skills. Achieving a Cambridge English qualification not only enhances academic prospects but also opens doors to travel, work, and further education worldwide.",
    ],
  },
  {
    title: "Field Trips",
    content: [
      "At Adrian, we believe learning extends beyond the classroom. Our thoughtfully planned field trips offer hands-on experiences that enrich education and ignite curiosity. From local museums and nature reserves to science centres and historical sites, each excursion is designed to reinforce classroom learning while promoting teamwork, critical thinking, and a deeper appreciation for the world around us.",
    ],
  },
  {
    title: "UN Activities at Our School",
    content: [
      "We actively engage with United Nations initiatives to promote global awareness and social responsibility among our students. By addressing pressing issues such as climate change, human rights, and poverty, we encourage collaboration that fosters critical thinking and diplomatic skills. Our commitment to the UN’s mission empowers students to become informed global citizens, inspiring them to create meaningful change locally and internationally. Join us in our journey toward a more sustainable and equitable world!",
    ],
  },
  {
    title: "Co-Curricular Activities",
    content: [
      "Education at Adrian extends beyond academics. Our curriculum incorporates a wide range of co-curricular activities designed to promote overall development. We integrate values education and life skills to foster responsible citizenship and personal growth.",
    ],
    bullets: [
      "Critical Thinking and Problem-Solving",
      "Communication and Collaboration",
      "Ethics and Social Responsibility",
    ],
    footer:
      "By blending academic rigor with co-curricular opportunities, we aim to develop well-rounded individuals equipped to thrive in an ever-changing world.",
  },
];

const CurriculumHighlights = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <div className="max-w-5xl">
      <div className="divide-y divide-[#17375D] border-y border-[#17375D]">
        {detailSections.map((section) => {
          const isOpen = openSection === section.title;

          return (
            <div key={section.title} className="py-4 sm:py-6 lg:py-7">
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span
                  className={`text-xl font-medium leading-tight transition-colors sm:text-2xl lg:text-4xl ${
                    isOpen ? "text-[#E11D2E]" : "text-[#17375D]"
                  }`}
                >
                  {section.title}
                </span>

                <span
                  className={`shrink-0 text-xl text-slate-500 transition-transform duration-300 sm:text-2xl lg:text-3xl ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ›
                </span>
              </button>

              {isOpen && (
                <div className="pt-4 text-sm leading-7 text-slate-600 sm:pt-5 sm:text-base sm:leading-8 lg:pt-6 lg:text-lg lg:leading-9">
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-5 list-disc space-y-2 pl-5 sm:mt-6 sm:space-y-3 lg:pl-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="mt-5 sm:mt-6">
                      {section.footer}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
  );
};

export default CurriculumHighlights;
