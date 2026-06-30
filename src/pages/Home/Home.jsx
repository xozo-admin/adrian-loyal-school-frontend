import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import WhoWeAre from "../../components/home/WhoWeAre/WhoWeAre";
import VisionMission from "../../components/home/VisionMission.jsx/VisionMission";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import LatestUpdates from "../../components/home/LatestUpdates/LatestUpdates";
import Accreditation from "../../components/home/Accreditation/Accreditation";
import Achievements from "../../components/home/Achievements/Achievements";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <Testimonials />
      <LatestUpdates />
      <Accreditation />
      <Achievements />
      <Footer />
    </>
  );
};

export default Home;