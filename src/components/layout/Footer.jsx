// import { Link } from "react-router-dom";

// import logo from "../../assets/images/logo2.svg";

// import footerData from "./footerData";

// const Footer = () => {
//   return (
//     <footer className="bg-[#16324F] text-white">

//       <div className="mx-auto max-w-7xl px-6 py-10">

//         <div className="grid gap-16 lg:grid-cols-3">

//           {/* Left */}

//           <div>

//             <img
//               src={logo}
//               alt="School Logo"
//               className="w-80"
//             />

//             <div className="mt-10 flex gap-5">

//               {footerData.social.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <a
//                     key={index}
//                     href={item.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex h-12 w-12 items-center justify-center rounded-full border border-white transition duration-300 hover:bg-[#D4A017] hover:border-[#D4A017]"
//                   >
//                     <Icon className="text-xl" />
//                   </a>
//                 );
//               })}

//             </div>

//           </div>

//           {/* Quick Links */}

//           <div>

//             <h3 className="mb-8 text-3xl font-semibold">
//               Quick Links
//             </h3>

//             <div className="grid grid-cols-2 gap-5">

//               <Link to="/">Home</Link>

//               <Link to="/careers">Careers</Link>

//               <Link to="/about">About Us</Link>

//               <Link to="/gallery">Gallery</Link>

//               <Link to="/infrastructure">
//                 Infrastructure
//               </Link>

//               <Link to="/mandatory-disclosure">
//                 Mandatory Disclosure
//               </Link>

//               <Link to="/curriculum">
//                 Curriculum
//               </Link>

//               <Link to="/contact">
//                 Contact Us
//               </Link>

//               <Link to="/admissions">
//                 Admissions
//               </Link>

//               <Link to="/sports-clubs">
//                 Sports & Clubs
//               </Link>

//             </div>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="mb-8 text-3xl font-semibold">
//               Connect With Us
//             </h3>

//             <div className="space-y-6">

//               <div>

//                 {footerData.address.map((line) => (
//                   <p key={line}>{line}</p>
//                 ))}

//               </div>

//               <div>

//                 <h4 className="font-bold">
//                   Call Us
//                 </h4>

//                 <p>{footerData.phone}</p>

//               </div>

//               <div>

//                 <h4 className="font-bold">
//                   Mail Us
//                 </h4>

//                 {footerData.emails.map((mail) => (
//                   <p key={mail}>{mail}</p>
//                 ))}

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-slate-300">

//           © {new Date().getFullYear()} The Adrian Loyal School.

//           All Rights Reserved.

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo2.svg";
import footerData from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-[#16324F] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          {/* Left */}
          <div>
            <img
              src={logo}
              alt="School Logo"
              className="w-52 sm:w-64 lg:w-72"
            />

            <div className="mt-8 flex gap-4">
              {footerData.social.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] lg:h-11 lg:w-11"
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