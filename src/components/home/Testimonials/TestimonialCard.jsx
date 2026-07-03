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
      <div className="mx-auto max-w-5xl">
  <p className="text-sm leading-7 text-[#4B4B4B] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
    {showFull ? testimonial.review : shortReview}
  </p>

  {testimonial.review.length > limit && (
    <button
      onClick={() => setShowFull(true)}
      className="mt-4 text-sm font-medium text-[#173A67] transition hover:text-[#D3131A] hover:underline sm:text-base"
    >
      Read More
    </button>
  )}

  <div className="mt-8 sm:mt-10 lg:mt-12">
    <h3
      className="text-xl font-semibold text-[#173A67] sm:text-2xl lg:text-3xl"
      style={{ fontFamily: "Cormorant Garamond" }}
    >
      {testimonial.name}
    </h3>

    <p className="mt-2 text-base font-medium text-[#E11D2E] sm:text-lg lg:text-xl">
      {testimonial.role}
    </p>
  </div>
</div>

{/* Popup */}
{showFull && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
    <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:rounded-[2rem] lg:p-10">
      <h3
        className="mb-4 text-2xl font-bold text-[#173A67] sm:text-3xl lg:text-4xl"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        {testimonial.name}
      </h3>

      <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
        {testimonial.review}
      </p>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => setShowFull(false)}
          className="rounded-full bg-[#173A67] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0F2745] sm:px-8 sm:text-base"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default TestimonialCard;
