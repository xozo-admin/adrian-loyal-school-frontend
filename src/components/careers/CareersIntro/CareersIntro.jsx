const CareersIntro = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-[#17375D] sm:text-4xl lg:text-6xl">
        Careers
      </h1>

      <div className="mt-4 h-[4px] w-20 bg-[#E11D2E] sm:mt-5 sm:h-[5px] sm:w-24" />

      <div className="mt-8 border-l-4 border-[#E11D2E] pl-4 sm:mt-10 sm:pl-6">
        <p className="max-w-5xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
          Join a learning community that values excellence, empathy,
          innovation, and student-centered education. At The Adrian Loyal
          School, we are always looking for passionate educators and
          professionals who want to make a meaningful impact.
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

      {/* Left Card */}
      <div className="rounded-2xl bg-[#17375D] p-6 text-white shadow-sm sm:p-8 lg:rounded-[2rem] lg:p-10">
        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
          Why Work With Us
        </h2>

        <div className="mt-6 space-y-5 text-sm leading-7 text-white/95 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
          <p>
            We believe great schools are built by great teams. Our staff are
            supported through a collaborative culture, modern teaching
            practices, and a strong commitment to continuous growth.
          </p>

          <p>
            Whether you are an experienced educator or an aspiring
            professional, Adrian offers a place where your ideas, care, and
            commitment can shape the future of young learners.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          "Supportive academic environment",
          "Student-first culture",
          "Opportunities for professional growth",
          "Meaningful contribution to education",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:rounded-[2rem]"
          >
            <p className="text-base font-medium leading-7 text-[#17375D] sm:text-lg">
              {item}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
};

export default CareersIntro;
