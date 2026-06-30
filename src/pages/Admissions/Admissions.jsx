import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AdmissionHero from "../../components/admission/AdmissionHero/AdmissionHero";
import AdmissionProcess from "../../components/admission/AdmissionProcess/AdmissionProcess";
import InformationSession from "../../components/admission/InformationSession/InformationSession";
import AdmissionForm from "../../components/admission/AdmissionForm/AdmissionForm";


const Admissions = () => {
  return (
    <>
      <Navbar />

      <AdmissionHero />
      <AdmissionProcess />
      <InformationSession />
      <AdmissionForm />

      <Footer />
    </>
  );
};

export default Admissions;