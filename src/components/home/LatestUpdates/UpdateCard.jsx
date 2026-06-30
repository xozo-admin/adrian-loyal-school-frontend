import { Link } from "react-router-dom";

const UpdateCard = ({ update }) => {
    return (
        <Link
            to="/news-events"
            className="group block h-full overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={update.image}
                    alt={update.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-52"
                />
            </div>

            {/* Content */}
            <div className="flex h-20 items-center justify-center px-4 text-center sm:h-24 sm:px-5">
                <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-[#16324F] transition-colors group-hover:text-[#D4A017] sm:text-xl sm:leading-7">
                    {update.title}
                </h3>
            </div>
        </Link>
    );
};

export default UpdateCard;
