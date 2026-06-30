import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import HomeManagement from "../pages/Home/HomeManagement";
import AdmissionsManagement from "../pages/Admissions/AdmissionsManagement";
import ContactManagement from "../pages/Contact/ContactManagement";
import GalleryManagement from "../pages/Gallery/GalleryManagement";
import AboutManagement from "../pages/About/AboutManagement";
import MandatoryManagement from "../pages/Mandatory/MandatoryManagement";
import { ADMIN_BASE_PATH } from "../adminConfig";

const isAdminAuthenticated = () =>
  localStorage.getItem("adminAuthenticated") === "true";

const ProtectedAdminRoute = ({ children }) =>
  isAdminAuthenticated() ? children : <Navigate to={`${ADMIN_BASE_PATH}/login`} replace />;

const LoginRoute = ({ children }) =>
  isAdminAuthenticated() ? <Navigate to={`${ADMIN_BASE_PATH}/dashboard`} replace /> : children;

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to={isAdminAuthenticated() ? "dashboard" : "login"} replace />}
      />
      <Route path="login" element={<LoginRoute><Login /></LoginRoute>} />
      <Route path="dashboard" element={<ProtectedAdminRoute><Dashboard /></ProtectedAdminRoute>} />
      <Route path="home" element={<ProtectedAdminRoute><HomeManagement /></ProtectedAdminRoute>} />
      <Route path="admissions" element={<ProtectedAdminRoute><AdmissionsManagement /></ProtectedAdminRoute>} />
      <Route path="contact" element={<ProtectedAdminRoute><ContactManagement /></ProtectedAdminRoute>} />
      <Route path="gallery" element={<ProtectedAdminRoute><GalleryManagement /></ProtectedAdminRoute>} />
      <Route path="about" element={<ProtectedAdminRoute><AboutManagement /></ProtectedAdminRoute>} />
      <Route path="mandatory" element={<ProtectedAdminRoute><MandatoryManagement /></ProtectedAdminRoute>} />
    </Routes>
  );
};

export default AdminRoutes;
