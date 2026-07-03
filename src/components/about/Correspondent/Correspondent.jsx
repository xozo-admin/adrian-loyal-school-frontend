const Correspondent = () => {
  return (
   <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:rounded-[2rem] lg:p-12">
      {/* Heading */}
      <div className="max-w-5xl">
        <h3 className="text-3xl font-bold leading-tight text-[#17375D] sm:text-4xl lg:text-5xl">
          Correspondent
        </h3>

        <h4 className="mt-3 text-lg font-semibold text-[#D3131A] sm:text-xl lg:text-2xl">
          Ms. Janet Ragupathy
        </h4>

        <h2 className="mt-4 text-2xl font-bold leading-tight text-[#17375D] sm:text-3xl lg:text-4xl">
          Transforming Education with Vision and Passion
        </h2>
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          Our Founder Correspondent, Ms. Janet Ragupathy, brings over 16
          years of exemplary experience in guiding both graduate and
          postgraduate students. Prior to her career in education, she
          honed her expertise in esteemed companies such as Texas
          Instruments Inc. India Pvt. Ltd. and Aptech.
        </p>

        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          A proud native of Karur, Ms. Janet earned her postgraduate degree
          in Computer Applications from Bishop Heber College, Trichy,
          complemented by additional qualifications in Philosophy
          (Computer Science) and English Literature.
        </p>

        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          Ms. Janet exemplifies exceptional leadership, inspiring both
          faculty and students to reach their fullest potential. With a
          profound passion for teaching and a commitment to practical
          application, she fosters holistic development and intellectual
          engagement at Adrian.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

export default Correspondent;
