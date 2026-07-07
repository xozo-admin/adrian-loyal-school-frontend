import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import footerData from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-[#16324F] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
         {/* Left */}
<div>
  <div className="flex items-start gap-4">
    {/* Logo */}
    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white p-2">
      <img
        src={logo}
        alt="School Logo"
        className="h-full w-full object-contain"
      />
    </div>

    {/* School Details */}
    <div>
      <h2 className="text-[22px] font-bold uppercase leading-tight tracking-wide">
        THE ADRIAN LOYAL SCHOOL
      </h2>

      <p className="mt-3 text-[18px] italic text-white/90">
        Greatness - Sustainability - Legacy
      </p>

      <p className="mt-5 text-[12px] font-semibold uppercase leading-6">
        AFFILIATED TO CBSE NEW DELHI,
        <br />
        AFFILIATION NO. 1931515
      </p>

      <p className="mt-3 text-[11px] uppercase leading-6 text-white/75">
        THE ADD AVENUE, S.F.NO.106/1,
        <br />
        KAKAVADI VILLAGE,
        <br />
        MADURAI BY PASS ROAD,
        <br />
        KARUR - 639003
      </p>
    </div>
  </div>

  {/* Social Icons */}
  <div className="mt-10 flex gap-6">
    {footerData.social.map((item, index) => {
      const Icon = item.icon;

      return (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition hover:bg-[#D4A017] hover:border-[#D4A017]"
        >
          <Icon className="text-lg" />
        </a>
      );
    })}
  </div>
</div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold sm:text-2xl lg:text-2xl">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm sm:text-base lg:gap-4 lg:text-[15px]">
              <Link to="/" className="transition-colors hover:text-[#D4A017]">
                Home
              </Link>

              <Link
                to="/careers"
                className="transition-colors hover:text-[#D4A017]"
              >
                Careers
              </Link>

              <Link
                to="/about"
                className="transition-colors hover:text-[#D4A017]"
              >
                About Us
              </Link>

              <Link
                to="/gallery"
                className="transition-colors hover:text-[#D4A017]"
              >
                Gallery
              </Link>

              <Link
                to="/infrastructure"
                className="transition-colors hover:text-[#D4A017]"
              >
                Infrastructure
              </Link>

              <Link
                to="/mandatory-disclosure"
                className="transition-colors hover:text-[#D4A017]"
              >
                Mandatory Disclosure
              </Link>

              <Link
                to="/curriculum"
                className="transition-colors hover:text-[#D4A017]"
              >
                Curriculum
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-[#D4A017]"
              >
                Contact Us
              </Link>

              <Link
                to="/admissions"
                className="transition-colors hover:text-[#D4A017]"
              >
                Admissions
              </Link>

              <Link
                to="/sports-clubs"
                className="transition-colors hover:text-[#D4A017]"
              >
                Sports & Clubs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold sm:text-2xl lg:text-2xl">
              Connect With Us
            </h3>

            <div className="space-y-5 text-sm leading-6 sm:text-base lg:text-[15px] lg:leading-7">
              <div>
                {footerData.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div>
                <h4 className="mb-1 text-base font-semibold lg:text-[16px]">
                  Call Us
                </h4>

                <p>{footerData.phone}</p>
              </div>

              <div>
                <h4 className="mb-1 text-base font-semibold lg:text-[16px]">
                  Mail Us
                </h4>

                {footerData.emails.map((mail) => (
                  <p key={mail}>{mail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-slate-300 sm:text-sm lg:text-sm">
          © {new Date().getFullYear()} The Adrian Loyal School. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

