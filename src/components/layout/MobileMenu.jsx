import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaTimes, FaChevronRight } from "react-icons/fa";

import { navLinks } from "../../constants/navigation";
import logo from "../../assets/images/logo.svg";

const MobileMenu = ({ isOpen, closeMenu }) => {
  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          {/* Drawer */}

          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex h-dvh w-64 max-w-[85vw] flex-col overflow-hidden bg-white shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">

              <img
                src={logo}
                alt="School Logo"
                className="h-10 object-contain"
              />

              <button
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
              >
                <FaTimes size={20} />
              </button>

            </div>

            {/* Navigation */}

            <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">

              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.title} className="mb-4">

                    <h3 className="mb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-[#17375D]/70">
                      {item.title}
                    </h3>

                    <div className="space-y-1">

                      {item.children.map((child) => (
                        <NavLink
                          key={child.title}
                          to={child.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `
                            flex items-center justify-between
                            rounded-lg
                            px-3 py-2.5 text-sm
                            transition

                            ${isActive
                              ? "bg-[#17375D] !text-white"
                              : "bg-slate-50 text-slate-700 hover:bg-[#17375D]/10"
                            }
                          `
                          }
                        >
                          <span>{child.title}</span>

                          <FaChevronRight className="text-xs" />
                        </NavLink>
                      ))}

                    </div>

                  </div>
                ) : (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `
                      mb-1 flex items-center justify-between
                      rounded-lg
                      px-3 py-2.5
                      text-sm
                      font-medium
                      transition

                      ${isActive
                        ? "bg-[#17375D] !text-white"
                        : "text-slate-700 hover:bg-slate-100"
                      }
                    `
                    }
                  >
                    <span>{item.title}</span>

                    <FaChevronRight className="text-xs" />
                  </NavLink>
                )
              )}

            </nav>

            {/* Footer */}

            <div className="border-t border-slate-100 p-3">

              <NavLink
                to="/admission"
                onClick={closeMenu}
                className="
    block
    w-full
    rounded-lg
    bg-[#17375D]
    py-2.5
    text-center
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-[#0F2745]
  "
              >
                Admissions Open
              </NavLink>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
