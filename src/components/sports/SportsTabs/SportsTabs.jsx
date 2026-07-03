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
   {/* Sports */}
<section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-10 text-center sm:mb-14">
      <h2 className="text-3xl font-bold leading-tight text-[#16324F] sm:text-4xl lg:text-5xl">
        Sports Excellence
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        Explore the various sports offered at our school.
      </p>
    </div>

    {/* Sports Tabs */}
    <div className="-mx-5 mb-8 flex snap-x gap-3 overflow-x-auto px-5 pb-2 scrollbar-hide sm:mx-0 sm:mb-14 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0">
      {sportsData.map((sport) => (
        <button
          key={sport.id}
          onClick={() => setSelectedSport(sport)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
            selectedSport.id === sport.id
              ? "bg-[#16324F] text-white shadow-lg"
              : "bg-gray-100 text-[#16324F] hover:bg-gray-200"
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
<section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-10 text-center sm:mb-14">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.3em] lg:text-base">
        Clubs & Activities
      </span>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#16324F] sm:mt-4 sm:text-4xl lg:text-5xl">
        Explore Our Student Clubs
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        Beyond academics, students participate in clubs that develop
        creativity, communication, leadership, teamwork, and social
        responsibility.
      </p>
    </div>

    {/* Club Buttons */}
    <div className="-mx-5 mb-8 flex snap-x gap-3 overflow-x-auto px-5 pb-2 scrollbar-hide sm:mx-0 sm:mb-14 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0">
      {clubsData.map((club) => (
        <button
          key={club.id}
          onClick={() => setSelectedClub(club)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
            selectedClub.id === club.id
              ? "bg-[#16324F] text-white shadow-lg"
              : "bg-white text-[#16324F] hover:bg-gray-100"
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
