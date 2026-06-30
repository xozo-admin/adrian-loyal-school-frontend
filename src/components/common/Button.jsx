import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#16324F] text-white shadow-md hover:bg-[#10243A] hover:shadow-lg hover:-translate-y-1",

    secondary:
      "border-2 border-[#16324F] text-[#16324F] hover:bg-[#16324F] hover:text-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // If "to" is provided, render a Link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {variant === "primary" && (
          <FaArrowRight className="text-sm" />
        )}
      </Link>
    );
  }

  // Otherwise render a normal button
  return (
    <button className={classes} {...props}>
      {children}
      {variant === "primary" && (
        <FaArrowRight className="text-sm" />
      )}
    </button>
  );
};

export default Button;