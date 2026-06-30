import {
  FaTachometerAlt,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaUserGraduate,
  FaEnvelope,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { ADMIN_BASE_PATH } from "../adminConfig";

const menus = [
  {
    name: "Dashboard",
    path: `${ADMIN_BASE_PATH}/dashboard`,
    icon: <FaTachometerAlt />,
  },
  {
    name: "Home Content",
    path: `${ADMIN_BASE_PATH}/home`,
    icon: <FaHome />,
  },
  {
    name: "Gallery",
    path: `${ADMIN_BASE_PATH}/gallery`,
    icon: <FaImages />,
  },
  {
    name: "About",
    path: `${ADMIN_BASE_PATH}/about`,
    icon: <FaInfoCircle />,
  },
  {
    name: "Admissions",
    path: `${ADMIN_BASE_PATH}/admissions`,
    icon: <FaUserGraduate />,
  },
  {
    name: "Contact",
    path: `${ADMIN_BASE_PATH}/contact`,
    icon: <FaEnvelope />,
  },
  {
    name: "Mandatory",
    path: `${ADMIN_BASE_PATH}/mandatory`,
    icon: <FaFileAlt />,
  },
];

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminUser");
    navigate(`${ADMIN_BASE_PATH}/login`);
  };

  return (
    <>
      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-dvh w-64 max-w-[85vw] flex-col overflow-hidden bg-[#16324F]
        text-white shadow-xl transition-all duration-300

        ${
          open ? "translate-x-0" : "-translate-x-full"
        }

        lg:h-screen lg:w-72 lg:translate-x-0`}
      >
        {/* Logo */}

        <div className="flex items-center gap-3 border-b border-white/10 p-4 lg:p-6">

          <img
            src={logo}
            alt=""
            className="h-10 w-10 rounded-full bg-white p-1 lg:h-12 lg:w-12"
          />

          <div>
            <h2 className="text-base font-bold lg:text-lg">
              Adrian Loyal
            </h2>

            <p className="text-xs text-gray-300 lg:text-sm">
              Admin Panel
            </p>
          </div>

        </div>

        {/* Menu */}

        <nav className="mt-4 min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain px-3 lg:mt-6 lg:space-y-2 lg:px-4">

          {menus.map((menu) => (
            <NavLink
              key={menu.name}
              to={menu.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition lg:gap-4 lg:rounded-xl lg:px-4 lg:py-3 lg:text-base

                ${
                  isActive
                    ? "bg-[#D4A017] !text-white lg:!text-[#16324F]"
                    : "hover:bg-white/10"
                }`
              }
            >
              {menu.icon}

              {menu.name}
            </NavLink>
          ))}

        </nav>

        {/* Logout */}

        <div className="w-full shrink-0 px-3 pb-4 pt-2 lg:px-4 lg:pb-6">

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-red-500 lg:gap-4 lg:rounded-xl lg:px-4 lg:py-3 lg:text-base"
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
