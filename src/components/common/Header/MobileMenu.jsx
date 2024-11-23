import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import NavLinkItem from "./NavLinkItem";

const MobileMenu = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    return setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      {/* mobile menu icon*/}
      <button
        className="lg:hidden transition-all p-2 rounded-md hover:ring-1 hover:ring-[#2B2B2B]"
        aria-label="mobile menu"
        onClick={handleToggleMenu}
      >
        <CiMenuBurger size={24} />
      </button>
      {isMenuOpen ? (
        <nav
          className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] z-10 flex flex-col items-center justify-center
      bg-gray-200"
        >
          <ul className="flex flex-col items-center gap-10 ">
            {navLinks.map(({ to, label }) => (
              <NavLinkItem key={to} to={to} label={label} onclick={closeMenu} />
            ))}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};
export default MobileMenu;
