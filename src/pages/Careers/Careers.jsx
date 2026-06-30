import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import CareersHero from "../../components/careers/CareersHero/CareersHero";
import CareersIntro from "../../components/careers/CareersIntro/CareersIntro";
import CareersOpportunities from "../../components/careers/CareersOpportunities/CareersOpportunities";
import CareersApply from "../../components/careers/CareersApply/CareersApply";

const Careers = () => {
  return (
    <>
      <Navbar />

      <CareersHero />
      <CareersIntro />
      <CareersOpportunities />
      <CareersApply />

      <Footer />
    </>
  );
};

export default Careers;
