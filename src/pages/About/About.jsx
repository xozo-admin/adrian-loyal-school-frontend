import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import SchoolIntroduction from "../../components/about/SchoolIntroduction/SchoolIntroduction";
import Journey from "../../components/about/Journey/Journey";
import Leadership from "../../components/about/Leadership/Leadership";
import Correspondent from "../../components/about/Correspondent/Correspondent";
import SchoolValues from "../../components/about/SchoolValues/SchoolValues";
import FacultyProfiles from "../../components/about/FacultyProfiles/FacultyProfiles";
import CampusTour from "../../components/about/CampusTour/CampusTour";

const About = () => {
  return (
    <>
      <Navbar />

      <SchoolIntroduction />
      <Journey />
      <Leadership />
      <Correspondent />
      <SchoolValues />
      <FacultyProfiles />
      <CampusTour />

      <Footer />
    </>
  );
};

export default About;