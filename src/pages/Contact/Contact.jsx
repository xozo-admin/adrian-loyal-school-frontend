import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactSection from "../../components/contact/ContactSection/ContactSection";
import GoogleMap from "../../components/contact/GoogleMap/GoogleMap";


const Contact = () => {
  return (
    <>
      <Navbar />

      <ContactHero />
      <ContactSection />
      <GoogleMap />

      <Footer />
    </>
  );
};

export default Contact;