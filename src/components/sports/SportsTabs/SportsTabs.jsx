import { useState } from "react";
import { sportsData } from "../../../data/sportsData";
import SportDetails from "./SportDetails";
import SportGallery from "./SportGallery";
import { clubsData } from "../../../data/clubsData";
import ClubDetails from "./ClubDetails";
import ClubGallery from "./ClubGallery";

const SportsTabs = () => {
  const [selectedSport, setSelectedSport] = useState(sportsData[0]);
  const [selectedClub, setSelectedClub] = useState(clubsData[0]);

 return (
  <>
    {/* Sports */}
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-14">
          <h2 className="text-3xl font-bold text-[#16324F] sm:text-5xl">
            Sports Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Explore the various sports offered at our school.
          </p>
        </div>

        {/* Sports Tabs */}
        <div className="-mx-4 mb-8 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-14 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
          {sportsData.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport)}
              className={`shrink-0 snap-start rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 sm:px-6 sm:py-3 sm:text-base
                ${
                  selectedSport.id === sport.id
                    ? "bg-[#16324F] text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {sport.title}
            </button>
          ))}
        </div>

        <SportDetails sport={selectedSport} />

        <SportGallery images={selectedSport.gallery} />
      </div>
    </section>

    {/* Clubs */}
    <section className="bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="mb-8 text-center sm:mb-14">

          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D3131A] sm:text-base sm:tracking-[5px]">
            Clubs & Activities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#16324F] sm:text-5xl">
            Explore Our Student Clubs
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-normal">
            Beyond academics, students participate in clubs that develop
            creativity, communication, leadership, teamwork and social
            responsibility.
          </p>

        </div>

        {/* Club Buttons */}
        <div className="-mx-4 mb-8 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-14 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
          {clubsData.map((club) => (
            <button
              key={club.id}
              onClick={() => setSelectedClub(club)}
              className={`shrink-0 snap-start rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 sm:px-6 sm:py-3 sm:text-base
                ${
                  selectedClub.id === club.id
                    ? "bg-[#16324F] text-white shadow-lg"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {club.title}
            </button>
          ))}
        </div>

        <ClubDetails club={selectedClub} />

        <ClubGallery images={selectedClub.gallery} />

      </div>
    </section>
  </>
);
};

export default SportsTabs;
