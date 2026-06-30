import { Link } from "react-router-dom";

import logo from "../../assets/images/logo2.svg";

import footerData from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-[#16324F] text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Left */}

          <div>

            <img
              src={logo}
              alt="School Logo"
              className="w-80"
            />

            <div className="mt-10 flex gap-5">

              {footerData.social.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white transition duration-300 hover:bg-[#D4A017] hover:border-[#D4A017]"
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-8 text-3xl font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <Link to="/">Home</Link>

              <Link to="/careers">Careers</Link>

              <Link to="/about">About Us</Link>

              <Link to="/gallery">Gallery</Link>

              <Link to="/infrastructure">
                Infrastructure
              </Link>

              <Link to="/mandatory-disclosure">
                Mandatory Disclosure
              </Link>

              <Link to="/curriculum">
                Curriculum
              </Link>

              <Link to="/contact">
                Contact Us
              </Link>

              <Link to="/admissions">
                Admissions
              </Link>

              <Link to="/sports-clubs">
                Sports & Clubs
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-3xl font-semibold">
              Connect With Us
            </h3>

            <div className="space-y-6">

              <div>

                {footerData.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}

              </div>

              <div>

                <h4 className="font-bold">
                  Call Us
                </h4>

                <p>{footerData.phone}</p>

              </div>

              <div>

                <h4 className="font-bold">
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

        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-slate-300">

          © {new Date().getFullYear()} The Adrian Loyal School.

          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;