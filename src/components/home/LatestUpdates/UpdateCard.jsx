import { Link } from "react-router-dom";

const UpdateCard = ({ update }) => {
    return (
        <Link
  to="/news-events"
  className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-[2rem]"
>
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
</Link>
    );
};

export default UpdateCard;
