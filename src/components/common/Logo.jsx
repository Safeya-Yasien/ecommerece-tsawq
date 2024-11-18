import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ isLogoWhite }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/logo.svg"
        alt="شعار موقع تسوق"
        className="w-[41px] h-[41px] "
      />
      <span
        className={`font-bold text-[30px] ${
          isLogoWhite ? "text-white" : "text-custom-dark"
        }`}
      >
        تسوق
      </span>
    </Link>
  );
};

Logo.propTypes = {
  isLogoWhite: PropTypes.bool,
};

export default Logo;
