import { CONTAINER } from "../../constants/theme";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`${CONTAINER} ${className}`}>
      {children}
    </div>
  );
};

export default Container;