const CareersApply = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto grid w-[90%] max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

    {/* Left Content */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#17375D] sm:text-sm">
        Apply With Us
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:text-4xl lg:text-5xl">
        Ready to Join Our Team?
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
        If you are passionate about education and would like to grow with
        Adrian, we would love to hear from you. Share your resume and a
        short introduction with our team through WhatsApp.
      </p>
    </div>

    {/* Right Card */}
    <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8 lg:rounded-[2rem] lg:p-10">

      <div className="space-y-8">

        {/* WhatsApp */}
        <div>
          <h3 className="text-lg font-semibold text-[#17375D] sm:text-xl">
            WhatsApp
          </h3>

          <a
            href="https://api.whatsapp.com/send/?phone=9600422277&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5b] sm:px-7 sm:py-3.5 sm:text-base"
          >
            Send Resume on WhatsApp
          </a>
        </div>

        {/* What to Send */}
        <div>
          <h3 className="text-lg font-semibold text-[#17375D] sm:text-xl">
            What to Send
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <li>Updated Resume / CV</li>
            <li>Role you are applying for</li>
            <li>Relevant experience and qualifications</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#17375D] sm:text-xl">
            Contact
          </h3>

          <p className="mt-3 text-sm font-medium text-slate-700 sm:text-base">
            +91 96004 22277
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
  );
};

export default CareersApply;
