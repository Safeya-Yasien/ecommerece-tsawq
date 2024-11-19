import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MobileMenu } from "@components/ecommerece";
import { Logo } from ".";

const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between border-b border-[#EBEEFF] px-12">
      <div className="flex items-center gap-4">
        {/* mobile menu */}
        <MobileMenu />
        {/* logo */}
        <div className="h-full flex items-center ">
          <Logo isLogoWhite={false} />
        </div>
      </div>
      {/* links */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-custom-blue  font-medium"
                    : "text-custom-gray  font-normal"
                }`
              }
            >
              الصفحة الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products-list"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-custom-blue  font-medium"
                    : "text-custom-gray  font-normal"
                }`
              }
            >
              منتجاتنا{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-[#2B2B2B]  font-medium"
                    : "text-custom-gray  font-normal"
                }`
              }
            >
              معلومات عنا{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-[#2B2B2B]  font-medium"
                    : "text-custom-gray  font-normal"
                }`
              }
            >
              تواصل معنا{" "}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* icons */}
      <div className="flex items-center gap-4">
        <button className="text-[#5F6377]" aria-label="Search">
          <CiSearch size={24} />
        </button>
        <button className="text-[#5F6377]" aria-label="Cart">
          <CiShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
