const DisclosureIntro = () => {
  return (
    <section className="bg-white pb-10 pt-20 md:pb-16 md:pt-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h1 className="text-4xl  text-[#17375D] md:text-6xl">
          Mandatory Disclosure
        </h1>

        <div className="mt-10 h-[6px] w-32 bg-[#E11D2E]" />

        <div className="mt-12 max-w-6xl border-l-[5px] border-[#E11D2E] pl-6 md:pl-8">
          <p className="text-lg leading-[1.8] text-slate-700 md:text-[18px]">
            The school fees cover a range of essential services and activities,
            including Books & Stationery, Uniforms, Tuition, Administration &
            Facilities, Sports, Lunch, Van Services, and Extracurricular
            Activities, for each academic period
            <span className="font-semibold text-slate-900">
              {" "}
              (First Term, Second Term, and Third Term)
            </span>{" "}
            of the year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclosureIntro;
