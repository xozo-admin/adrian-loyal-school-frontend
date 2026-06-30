const categories = [
  "Sports",
  "Our Campus",
  "Academics",
  "Gedulla",
  "Vruksha",
];

const GalleryFilter = () => {
  return (
    <section className="bg-white py-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#17375D]">
            School Moments
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-serif text-[#17375D]">
            Gallery
          </h1>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {categories.map((item) => (
            <span
              key={item}
              className="text-lg font-medium text-slate-500 transition hover:text-[#17375D]"
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
