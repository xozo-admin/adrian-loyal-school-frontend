import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="relative z-50 bg-white">
        <div className="mx-auto max-w-[1920px] px-6 py-5 lg:px-10">
          {/* ================= MOBILE ================= */}

          <div className="flex items-center justify-between lg:hidden">
            <Link to="/" className="flex items-center gap-3">
              {/* <img
                src={logo}
                alt="The Adrian Loyal School"
                className="h-16 w-auto object-contain"
              /> */}
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white p-2">
                <img
                  src={logo}
                  alt="School Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="leading-tight">
                <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-[#17375D]">
                  THE ADRIAN LOYAL SCHOOL
                </h2>

                <p className="font-serif text-[12px] text-[#17375D]">
                  Greatness - Sustainability - Legacy
                </p>

                <p className="text-[8px] font-semibold uppercase text-[#17375D]">
                  CBSE Affiliation No. 1931515
                </p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
              className="rounded-xl p-2 transition hover:bg-slate-100"
            >
              <FaBars
                size={28}
                className="text-[#17375D]"
              />
            </button>
          </div>

          {/* ================= DESKTOP ================= */}

          <div className="hidden min-h-[60px] lg:grid lg:grid-cols-[1fr_auto_360px] lg:items-center lg:gap-12">
            {/* Left Spacer */}
            <div />

            {/* Logo + Title */}
            <Link
              to="/"
              className="flex items-center justify-self-center gap-8"
            >
              {/* Logo */}
              <div className="flex h-[120px] w-[120px] flex-shrink-0 items-center justify-center">
                <img
                  src={logo}
                  alt="School Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* School Details */}
              <div className="flex flex-col">
                <h1
                  className="
        font-['Oswald']
        text-[30px]
        font-bold
        uppercase
        leading-none
        tracking-wide
        text-[#17375D]
      "
                >
                  THE ADRIAN LOYAL SCHOOL
                </h1>

                <h2
                  className="
        mt-4
        text-center
        font-serif
        text-[20px]
        font-semibold
        leading-none
        text-[#17375D]
      "
                >
                  Greatness - Sustainability - Legacy
                </h2>

                <p
                  className="
        mt-2
        text-center
        text-[10px]
        font-semibold
        uppercase
        tracking-wide
        text-[#17375D]
      "
                >
                  AFFILIATED TO CBSE NEW DELHI, AFFILIATION NO. 1931515
                </p>
              </div>
            </Link>

            {/* Right Side */}

            <div className="flex flex-col items-end justify-start gap-7 self-start pt-1">
              {/* Buttons */}

              <div className="flex items-center gap-5">
                <Link
                  to="/admission"
                  className="rounded-[0.3rem] bg-[#17375D] px-5 py-3 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.02em] !text-white transition hover:!text-white hover:bg-[#ED1C24]"
                >
                  Admission
                </Link>

                <Link
                  to="/careers"
                  className="rounded-[0.3rem] bg-[#ED1C24] px-5 py-3 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.02em] !text-white transition hover:!text-white hover:bg-[#17375D]"
                >
                  Careers
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-5 pr-2">
                <a
                  href="https://www.instagram.com/the_adrian_schools/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#17375D] !text-white transition hover:!text-white hover:bg-[#102B4A]"
                >
                  <FaInstagram className="text-[1.35rem]" />
                </a>

                <a
                  href="https://www.facebook.com/TheAdrianloyalschool"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#17375D] !text-white transition hover:!text-white hover:bg-[#102B4A]"
                >
                  <FaFacebookF className="text-[1.25rem]" />
                </a>

                <a
                  href="https://www.youtube.com/@theadrianloyalschoolkarur"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#17375D] !text-white transition hover:!text-white hover:bg-[#102B4A]"
                >
                  <FaYoutube className="text-[1.25rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden bg-[#17375D] lg:block">
          <div className="mx-auto flex min-h-[82px] max-w-[1920px] items-center justify-center px-8">
            <NavLinks />
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;