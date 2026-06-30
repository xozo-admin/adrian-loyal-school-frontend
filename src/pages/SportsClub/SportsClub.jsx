import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SportsHero from "../../components/sports/SportsHero/SportsHero";
import SportsIntro from "../../components/sports/SportsIntro/SportsIntro";
import SportsTabs from "../../components/sports/SportsTabs/SportsTabs";
import StudentCouncil from "../../components/sports/StudentCouncil/StudentCouncil";



const SportsClub = () => {
    return (
        <>
            <Navbar />

            <SportsHero />
            <SportsIntro />
            <SportsTabs />
            <StudentCouncil />

            <Footer />
        </>
    );
};

export default SportsClub;