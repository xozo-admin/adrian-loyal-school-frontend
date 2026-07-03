import schoolImg from "../../../assets/images/about/school-intro.jpg";

const SchoolIntroduction = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-[90%] max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">    
        {/* Left Image */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:rounded-[2rem]">
          <img
            src={schoolImg}
            alt="The Adrian Loyal School"
            className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 md:h-[450px] lg:h-full lg:min-h-[700px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex h-full flex-col justify-center">
          <h2
            className="text-3xl leading-tight text-[#17375D] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Building Brighter Futures, One Student at a Time
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:mt-8 sm:text-base sm:leading-8 lg:space-y-6 lg:text-lg lg:leading-9">
            <p>
              We thoughtfully design our curriculum to address local needs while
              adhering to global educational standards. We believe that fostering
              happiness in children enhances both their productivity and overall
              well-being. Our goal is to create a balanced educational experience
              that emphasizes academics, co-curricular activities, and
              extracurricular engagement equally.
            </p>

            <p>
              Our educational framework is the result of extensive research,
              thoughtful discussions, and careful evaluations, incorporating
              significant input from parents who seek a values-driven approach.
              They aspire to cultivate a sense of purpose and inspire greatness in
              their children, aiming for a legacy of excellence. Every student is
              nurtured to realize their potential, becoming an integral part of a
              community dedicated to outstanding achievements.
            </p>

            <p>
              Recognizing the vital role schools play in shaping well-rounded
              individuals, Adrian Schools in Karur are committed to providing
              world-class education accessible to students from all social and
              economic backgrounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolIntroduction;
