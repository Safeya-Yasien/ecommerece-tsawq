import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    return setIsMenuOpen(!isMenuOpen);
  };

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
            <li>
              <Link to="/" className="text-[#2B2B2B] text-lg font-medium">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="products-list"
                className="text-[#454545] text-lg font-normal"
              >
                منتجاتنا{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#454545] text-lg font-normal">
                معلومات عنا{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#454545] text-lg font-normal">
                تواصل معنا{" "}
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};
export default MobileMenu;
