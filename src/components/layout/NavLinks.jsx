import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

const NavLinks = () => {
  return (
    <ul className="hidden items-center justify-center gap-9 text-white xl:gap-12 lg:flex">
      {navLinks.map((item) => (
        <li key={item.title}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `font-sans text-[16px] font-normal transition-colors duration-300 xl:text-[17px] ${
                isActive
                  ? "!text-[#FF2A2A]"
                  : "!text-white hover:!text-white/80"
              }`
            }
            style={({ isActive }) => ({ color: isActive ? "#FF2A2A" : "#ffffff" })}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
