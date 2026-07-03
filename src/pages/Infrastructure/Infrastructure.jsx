import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import InfrastructureHero from "../../components/infrastructure/InfrastructureHero/InfrastructureHero";
import InfrastructureIntro from "../../components/infrastructure/InfrastructureIntro/InfrastructureIntro";
import FacilitiesShowcase from "../../components/infrastructure/FacilitiesShowcase/FacilitiesShowcase";
import CampusHighlights from "../../components/infrastructure/CampusHighlights/CampusHighlights";

const Infrastructure = () => {
  return (
    <>
      <Navbar />

      <InfrastructureHero />
      <InfrastructureIntro />
      <FacilitiesShowcase />
      <CampusHighlights />

      <Footer />
    </>
  );
};

export default Infrastructure;