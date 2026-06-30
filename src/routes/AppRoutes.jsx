import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Admissions from "../pages/Admissions/Admissions";
import Careers from "../pages/Careers/Careers";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Curriculum from "../pages/Curriculum/Curriculum";
import Infrastructure from "../pages/Infrastructure/Infrastructure";
import MandatoryDisclosure from "../pages/MandatoryDisclosure/MandatoryDisclosure";
import SportsClub from "../pages/SportsClub/SportsClub";
import AdminRoutes from "../admin/routes/AdminRoutes";
import { ADMIN_BASE_PATH } from "../admin/adminConfig";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admissions />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
      <Route path="/sports" element={<SportsClub />} />
      <Route path={`${ADMIN_BASE_PATH}/*`} element={<AdminRoutes />} />

    </Routes>
  );
};

export default AppRoutes;
