const Journey = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="max-w-5xl">
      <h2 className="text-3xl font-bold leading-tight text-[#17375D] sm:text-4xl lg:text-5xl">
        Our Journey
      </h2>

      <h3 className="mt-3 text-2xl font-bold leading-tight text-[#17375D] sm:text-3xl lg:mt-4 lg:text-5xl">
        Legacy of Greatness Through Education
      </h3>
    </div>

    {/* Content */}
    <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-8">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:rounded-[2rem] lg:p-8">
        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
          In 2014, we embarked on our mission to provide exceptional
          education grounded in the philosophy of
          <strong> "Sowing the Seeds of Greatness."</strong>
          This vision, initiated by
          <strong> Mr. K. P. Ragupathy </strong>
          and supported by
          <strong> Ms. Janet Ragupathy</strong>, began as a modest venture
          known as
          <strong> The Adrian Kids Nursery & Primary School.</strong>
          Today, we have grown into a vibrant institution, now called
          <strong> The Adrian Loyal School</strong>, with an expanded campus
          along the Madurai Bypass Road.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:rounded-[2rem] lg:p-8">
        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
          We offer a comprehensive educational journey from early years
          through Grade X, delivering an authentic, values-based learning
          experience in Karur. Starting from the academic year 2014–15, our
          city campus caters to children aged 2 to 6, with programs ranging
          from Adrian Playgroup to Adrian Senior. Since 2018, Adrian Loyal
          Campus has served students from Adrian Preschool through Grade X,
          reaffirming our commitment to nurturing greatness at every stage
          of development.
        </p>
      </article>
    </div>
  </div>
</section>
  );
};

export default Journey;
