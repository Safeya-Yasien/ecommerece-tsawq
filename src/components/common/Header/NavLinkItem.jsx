import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinkItem = ({ to, label, onclick }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-lg ${
            isActive
              ? "text-custom-blue font-bold"
              : "text-custom-gray  font-normal"
          }`
        }
        aria-label={label}
        onClick={onclick}
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
