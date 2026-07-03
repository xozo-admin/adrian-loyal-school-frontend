const categories = [
  "Sports",
  "Our Campus",
  "Academics",
  "Gedulla",
  "Vruksha",
];

const GalleryFilter = () => {
  return (
   <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    {/* Heading */}
    <div className="mb-8 sm:mb-10 lg:mb-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.22em]">
        School Moments
      </p>

      <h1 className="mt-3 text-3xl font-serif text-[#17375D] sm:mt-4 sm:text-4xl lg:text-6xl">
        Gallery
      </h1>
    </div>

    {/* Categories */}
    <div className="flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-6 lg:gap-x-8">
      {categories.map((item) => (
        <span
          key={item}
          className="cursor-pointer text-sm font-medium text-slate-500 transition hover:text-[#17375D] sm:text-base lg:text-lg"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</section>
  );
};

export default GalleryFilter;
