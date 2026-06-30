import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import sessionImg from "../../../assets/images/admission/information-sesssion.png";

const InformationSession = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Image */}

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={sessionImg}
            alt="Admission Information Session"
            className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Right Content */}

        <div>

          <p className="font-semibold uppercase tracking-[0.35em] text-[#D4A017] py-5">
            Information Session
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#17375D] md:text-5xl">
            Visit Our Campus
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
           Parents are invited to meet teachers every Thursday between 3:45 PM and 5:00 PM. This is a great opportunity to discuss the child’s progress, ask questions, and build a strong partnership between home and school
          </p>

          {/* Details */}

          {/* <div className="mt-10 space-y-6">

            <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

              <div className="rounded-full bg-[#17375D] p-4 text-white">
                <FaCalendarAlt />
              </div>

              <div>
                <h4 className="font-bold text-[#17375D]">
                  Every Thursday 
                </h4>

                <p className="text-gray-600">
                  Admission Information Session
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

              <div className="rounded-full bg-[#17375D] p-4 text-white">
                <FaClock />
              </div>

              <div>
                <h4 className="font-bold text-[#17375D]">
                  Time
                </h4>

                <p className="text-gray-600">
                  3:45 PM –  5:00 PM
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

              <div className="rounded-full bg-[#17375D] p-4 text-white">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-bold text-[#17375D]">
                  Venue
                </h4>

                <p className="text-gray-600">
                  The Adrian Loyal School Campus, Karur
                </p>
              </div>

            </div>

          </div> */}

          {/* <button className="mt-10 rounded-full bg-[#17375D] px-8 py-4 font-semibold text-white transition hover:bg-[#10243A]">
            Book a Campus Visit
          </button> */}

        </div>

      </div>
    </section>
  );
};

export default InformationSession;