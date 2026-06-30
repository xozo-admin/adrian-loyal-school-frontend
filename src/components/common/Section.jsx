import { SECTION } from "../../constants/theme";

const Section = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`${SECTION} ${className}`}>
      {children}
    </section>
  );
};

export default Section;