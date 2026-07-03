const UpdateCard = ({ update }) => {
  return (
    <div className="group h-full overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={update.image}
          alt={update.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 md:h-64 lg:h-72"
        />
      </div>

      {/* Content */}

      <div className="flex min-h-[90px] items-center justify-center p-5 sm:min-h-[100px] sm:p-6">
        <h3 className="line-clamp-2 text-center text-lg font-semibold leading-6 text-[#16324F] transition-colors duration-300 group-hover:text-[#D4A017] sm:text-xl sm:leading-7">
          {update.title}
        </h3>
      </div>
    </div>
  );
};

export default UpdateCard;