import { Link } from "react-router-dom";
import { CiMenuBurger, CiSearch, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between border-b border-[#EBEEFF] px-12">
      <div className="flex items-center gap-4">
        {/* mobile menu */}
        <button className="md:hidden">
          <CiMenuBurger size={24} />
        </button>
        {/* logo */}
        <div className="h-full flex items-center ">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="تسوق" className="w-[41px] h-[41px] " />
            <span className="font-bold text-[30px] text-[#212328]">تسوق</span>
          </Link>
        </div>
      </div>
      {/* links */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/" className="text-[#2B2B2B] text-lg font-medium">
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/" className="text-[#454545] text-lg font-normal">
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
      {/* icons */}
      <div className="flex items-center gap-4">
        <button className="text-[#5F6377]">
          <CiSearch size={24} />
        </button>
        <button className="text-[#5F6377]">
          <CiShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
