import { useState } from "react";

const TestimonialCard = ({ testimonial }) => {
  const [showFull, setShowFull] = useState(false);

  const limit = 800;

  const shortReview =
    testimonial.review.length > limit
      ? testimonial.review.slice(0, limit) + "..."
      : testimonial.review;

  return (
    <>
      <div className="mx-auto max-w-10xl">

        <p className="text-sm leading-7 text-[#4B4B4B] sm:text-base sm:leading-[2]">
          {showFull ? testimonial.review : shortReview}
        </p>

        {testimonial.review.length > limit && (
          <button
            onClick={() => setShowFull(true)}
            className="mt-3 text-[#173A67] hover:underline"
          >
            Read More
          </button>
        )}

        <div className="mt-7 sm:mt-12">
          <h3 className="text-[18px] font-medium text-[#173A67]"  style={{ fontFamily: "Cormorant Garamond" }}>
            {testimonial.name}
          </h3>

          <p className="mt-2 text-[18px] text-[#E11D2E]">
            {testimonial.role}
          </p>
        </div>

      </div>

      {showFull && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6">
          <div className="max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-5 shadow-xl sm:p-10">

            <h3 className="mb-4 text-2xl font-semibold text-[#173A67] sm:mb-6 sm:text-3xl">
              {testimonial.name}
            </h3>

            <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-9">
              {testimonial.review}
            </p>

            <button
              onClick={() => setShowFull(false)}
              className="mt-8 rounded-lg bg-[#173A67] px-6 py-3 text-white"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;
