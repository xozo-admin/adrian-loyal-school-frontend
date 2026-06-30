import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import CurriculumHero from "../../components/curriculum/CurriculumHero/CurriculumHero";
import CurriculumIntro from "../../components/curriculum/CurriculumIntro/CurriculumIntro";
import CurriculumPrograms from "../../components/curriculum/CurriculumPrograms/CurriculumPrograms";
import LearningApproach from "../../components/curriculum/LearningApproach/LearningApproach";
import CurriculumHighlights from "../../components/curriculum/CurriculumHighlights/CurriculumHighlights";

const Curriculum = () => {
  return (
    <>
      <Navbar />

      <CurriculumHero />
      <CurriculumIntro />
      <CurriculumPrograms />
      <LearningApproach />
      <CurriculumHighlights />

      <Footer />
    </>
  );
};

export default Curriculum;
