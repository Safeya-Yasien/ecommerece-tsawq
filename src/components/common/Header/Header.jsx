import { CiSearch } from "react-icons/ci";
import { MobileMenu } from "@components/ecommerece";
import { Logo } from "..";

import { useMemo } from "react";
import NavLinkItem from "./NavLinkItem";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const navLinks = useMemo(
    () => [
      { to: "/", label: "الصفحة الرئيسية" },
      { to: "products-list", label: "منتجاتنا" },
      { to: "/about", label: "معلومات عنا" },
      { to: "/contact", label: "تواصل معنا" },
    ],
    []
  );

  return (
    <header className="h-24 flex items-center justify-between md:border-b border-[#EBEEFF] px-4 md:px-12">
      <div className="flex items-center gap-4">
        {/* mobile menu */}
        <MobileMenu navLinks={navLinks}/>
        {/* logo */}
        <div className="h-full flex items-center ">
          <Logo isLogoWhite={false} />
        </div>
      </div>

      {/* links */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLinkItem key={to} to={to} label={label} />
          ))}
        </ul>
      </nav>

      {/* icons */}
      <div className="flex items-center gap-4">
        <button
          className="text-[#5F6377] hover:text-custom-blue"
          aria-label="Search"
        >
          <CiSearch size={24} />
        </button>

        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
