import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center"
    >
      <img
        src={logo}
        alt="The Adrian Loyal School"
        className="
          h-16
          w-auto
          object-contain
          transition-transform duration-300
          hover:scale-105
          lg:h-24
        "
      />
    </Link>
  );
};

export default Logo;
