const GoogleMap = () => {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
          <iframe
            title="Google Map"
            className="h-[420px] w-full"
            src="https://www.google.com/maps?q=The+Adrian+Loyal+School+Karur&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
