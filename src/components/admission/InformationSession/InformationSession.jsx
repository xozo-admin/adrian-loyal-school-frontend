import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import sessionImg from "../../../assets/images/admission/information-sesssion.png";

const InformationSession = () => {
  return (
   <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
    {/* Left Image */}
    <div className="overflow-hidden rounded-2xl shadow-xl lg:rounded-3xl">
      <img
        src={sessionImg}
        alt="Admission Information Session"
        className="h-[250px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[350px] lg:h-[500px]"
      />
    </div>

    {/* Right Content */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.3em]">
        Information Session
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
        Visit Our Campus
      </h2>

      <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
        Parents are invited to meet teachers every Thursday between
        <span className="font-semibold text-[#17375D]">
          {" "}3:45 PM and 5:00 PM
        </span>.
        This is a great opportunity to discuss your child's progress,
        ask questions, and build a strong partnership between home and school.
      </p>
    </div>
  </div>
</section>
  );
};

export default InformationSession;