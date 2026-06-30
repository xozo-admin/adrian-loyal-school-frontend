import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api/about/faculty";
const imageBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const FacultyProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadFacultyProfiles = async () => {
      try {
        const response = await axios.get(API);
        setProfiles(response.data);
      } catch (error) {
        console.error("Failed to load faculty profiles:", error);
      }
    };

    loadFacultyProfiles();
  }, []);

  if (!profiles.length) {
    return null;
  }

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17375D] sm:text-sm sm:tracking-[0.24em]">
            Our Faculty
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17375D] md:text-5xl">
            Meet the Educators Behind the Learning Experience
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Thoughtful mentors, strong academic guidance, and a shared
            commitment to helping every child grow with confidence.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {profiles.map((profile) => (
            <article
              key={profile.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:rounded-[2rem]"
            >
              <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="overflow-hidden">
                  <img
                    src={`${imageBaseUrl}${profile.image}`}
                    alt={profile.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 md:h-full"
                  />
                </div>

                <div className="flex h-full flex-col p-5 sm:p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A017] sm:tracking-[0.24em]">
                        {profile.role}
                      </p>

                      <h3 className="mt-3 text-xl font-bold text-[#17375D] sm:text-2xl">
                        {profile.name}
                      </h3>
                    </div>

                    <span className="hidden h-3 w-3 shrink-0 rounded-full bg-[#D4A017] md:block" />
                  </div>

                  <p className="mt-4 inline-flex max-w-full w-fit rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 sm:px-4 sm:text-sm">
                    {profile.qualification}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-[15px] sm:leading-8 md:text-base">
                    {profile.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    Adrian Loyal School
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyProfiles;
