const CareersIntro = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="max-w-6xl">
          <h1 className="text-4xl text-[#17375D] md:text-6xl">Careers</h1>

          <div className="mt-5 h-[5px] w-24 bg-[#E11D2E]" />

          <div className="mt-10 border-l-4 border-[#E11D2E] pl-4 md:pl-6">
            <p className="max-w-6xl text-lg leading-9 text-slate-700 md:text-[1.3rem] md:leading-[1.9]">
              Join a learning community that values excellence, empathy,
              innovation, and student-centered education. At The Adrian Loyal
              School, we are always looking for passionate educators and
              professionals who want to make a meaningful impact.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] bg-[#17375D] p-8 text-white shadow-sm md:p-10">
            <h2 className="text-2xl font-medium leading-tight md:text-4xl">
              Why Work With Us
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-white/95 md:text-[1.05rem]">
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

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Supportive academic environment",
              "Student-first culture",
              "Opportunities for professional growth",
              "Meaningful contribution to education",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
              >
                <p className="text-lg leading-8 text-[#17375D]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersIntro;
