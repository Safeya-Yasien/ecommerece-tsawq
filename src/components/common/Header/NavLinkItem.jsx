import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinkItem = ({ to, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-lg ${
            isActive
              ? "text-custom-blue  font-medium"
              : "text-custom-gray  font-normal"
          }`
        }
        aria-label={label}
      >
        {label}
      </NavLink>
    </li>
  );
};

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLinkItem;
