import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import MandatoryHero from "../../components/mandatoryDisclosure/MandatoryHero/MandatoryHero";
import DisclosureIntro from "../../components/mandatoryDisclosure/DisclosureIntro/DisclosureIntro";
import DocumentGrid from "../../components/mandatoryDisclosure/Documents/DocumentGrid";

const MandatoryDisclosure = () => {
    return (
        <>
            <Navbar />

            <MandatoryHero />
            <DisclosureIntro />
            <DocumentGrid />

            <Footer />
        </>
    );
};

export default MandatoryDisclosure;