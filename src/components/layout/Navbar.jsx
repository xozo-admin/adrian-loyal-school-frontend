import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import logo from "../../assets/images/logo.svg";
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
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className="relative z-50 bg-white">
        <div className="mx-auto max-w-[1920px] px-5 py-3 lg:px-8 xl:px-9">
          <div className="flex items-center justify-between lg:hidden">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="The Adrian Loyal School" className="h-16 w-auto object-contain" />
           
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="rounded-xl p-3 transition hover:bg-slate-100"
              aria-label="Open menu"
            >
              <FaBars size={24} className="text-[#17375D]" />
            </button>
          </div>

          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_310px] lg:items-center lg:gap-36 xl:grid-cols-[1fr_auto_320px]">

            <div />

            <Link to="/" className="flex items-center justify-center gap-5 justify-self-center xl:gap-6">
              <img
                src={logo}
                alt="The Adrian Loyal School"
                className="h-[104px] w-auto object-contain xl:h-[116px]"
              />

             
            </Link>

            <div className="justify-self-end self-start pt-1">
              <div className="flex flex-col items-end gap-5">
                <div className="flex items-center gap-3">
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

                <div className="flex items-center gap-4 pr-8">
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
        </div>

        <div className="hidden bg-[#17375D] lg:block">
          <div className="mx-auto flex min-h-[82px] max-w-[1920px] items-center justify-center px-8">
            <NavLinks />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
