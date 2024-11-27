import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ isLogoWhite }) => {
  return (
    <Link to="/" className="flex items-center gap-2 w-[130px] h-[50px]">
      <img
        src={isLogoWhite ? "/white-logo.svg" : "/black-logo.svg"}
        alt="شعار موقع تسوق"
        className=" "
      />
    </Link>
  );
};

Logo.propTypes = {
  isLogoWhite: PropTypes.bool,
};

export default Logo;
