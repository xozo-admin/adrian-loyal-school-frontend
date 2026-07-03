const DisclosureIntro = () => {
  return (
    <section className="bg-white pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <h1 className="text-3xl font-bold leading-tight text-[#17375D] sm:text-4xl lg:text-6xl">
      Mandatory Disclosure
    </h1>

    <div className="mt-6 h-1.5 w-20 bg-[#E11D2E] sm:mt-8 sm:w-24 lg:mt-10 lg:h-[6px] lg:w-32" />

    <div className="mt-8 max-w-6xl border-l-4 border-[#E11D2E] pl-4 sm:mt-10 sm:pl-6 lg:mt-12 lg:border-l-[5px] lg:pl-8">
      <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 lg:text-lg lg:leading-[1.8]">
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
