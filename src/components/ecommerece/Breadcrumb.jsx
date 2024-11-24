import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="bg-[#F5F5F5]  h-[54px] w-full px-12 ">
      <div className="flex items-center justify-between h-full">
        <div className="flex gap-4">
          <Link to="/" className="text-[#767676] font-normal text-[16px]">
            الصفحة الرئيسية
          </Link>
          <span className="text-[#767676]">/</span>
          <span className="text-custom-blue font-bold text-[16px]">
            {currentPage}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
