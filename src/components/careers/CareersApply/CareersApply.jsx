const CareersApply = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#17375D]">
              Apply With Us
            </p>

            <h2 className="mt-4 text-3xl text-[#17375D] md:text-5xl">
              Ready to Join Our Team?
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-lg">
              If you are passionate about education and would like to grow with
              Adrian, we would love to hear from you. Share your resume and a
              short introduction with our team through WhatsApp.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 md:p-10">
            <div className="space-y-6 text-[15px] leading-8 text-slate-700 md:text-base">
              <div>
                <h3 className="text-lg font-semibold text-[#17375D]">WhatsApp</h3>
                <a
                  href="https://api.whatsapp.com/send/?phone=9600422277&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5b]"
                >
                  Send Resume on WhatsApp
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#17375D]">What to Send</h3>
                <ul className="mt-3 space-y-2 pl-5">
                  <li>Updated resume / CV</li>
                  <li>Role you are applying for</li>
                  <li>Relevant experience and qualifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#17375D]">Contact</h3>
                <p className="mt-2">+91 96004 22277</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersApply;
