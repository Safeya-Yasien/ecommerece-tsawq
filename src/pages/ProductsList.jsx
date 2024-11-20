import { useEffect, useMemo, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { TbArrowsDownUp } from "react-icons/tb";
import { productsList } from "@data/AllProducts";
import { Breadcrumb, ProductCard } from "@components/ecommerece";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useParams } from "react-router-dom";

const ProductsList = () => {
  const { categoryName } = useParams();

  const [checkCategories, setCheckCategories] = useState([]);

  const categories = useMemo(
    () => [
      {
        id: 1,
        name: "هواتف",
      },
      {
        id: 2,
        name: "لابتوب",
      },
      {
        id: 3,
        name: "ساعات ذكية",
      },
      {
        id: 4,
        name: "سماعات وايرلس",
      },
      {
        id: 5,
        name: "ايباد",
      },
      {
        id: 6,
        name: "تابليت",
      },
      {
        id: 7,
        name: "شاشات ذكية",
      },
      {
        id: 8,
        name: "ايربودز",
      },
    ],
    []
  );

  const memoizedProducts = useMemo(() => productsList, []);

  const filteredProducts = useMemo(() => {
    if (checkCategories.length === 0) return memoizedProducts;

    return memoizedProducts.filter((product) =>
      checkCategories.some((category) => product.category === category)
    );
  }, [memoizedProducts, checkCategories]);

  useEffect(() => {
    if (categoryName) setCheckCategories([categoryName]);
    else setCheckCategories([]);
  }, [categoryName]);

  const handleOnChange = (selectedCategory) => {
    if (checkCategories.includes(selectedCategory)) {
      setCheckCategories(
        checkCategories.filter((name) => name !== selectedCategory)
      );
    } else {
      setCheckCategories([...checkCategories, selectedCategory]);
    }
  };

  return (
    <div className="">
      {/* breadcrumb  */}
      <Breadcrumb />
      {/* content */}
      <div className="px-12 py-8 flex justify-between gap-8">
        {/* right: filter */}
        <div className="hidden lg:flex flex-col gap-6 w-[20%] shadow-[0px_4px_23.3px_0px_#0000000D] border border-[#EDEDED] p-8 rounded-2xl  ">
          <h2 className="text-custom-dark font-bold text-[20px] ">الاقسام</h2>
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <div
                className="flex items-center gap-2 relative"
                key={category.id}
              >
                <input
                  type="checkbox"
                  id={category.name}
                  checked={checkCategories.includes(category.name)}
                  name={category.name}
                  onChange={() => handleOnChange(category.name)}
                  className="w-[21px] h-[21px] border border-[#6D6D6D] rounded-lg!  cursor-pointer"
                />
                <label
                  htmlFor={category.name}
                  className="font-normal text-[16px] text-[#5C5C5C] relative  cursor-pointer"
                >
                  {category.name}
                </label>
                {/* custom checkbox */}
                {/* <label
                  htmlFor={category.name}
                  className="font-normal text-[16px] text-[#5C5C5C] ps-8 relative
                  before:content-[''] before:absolute before:right-0 before:top-0 before:w-[21px] before:h-[21px] before:border before:border-[#6D6D6D] before:rounded-md 
                  after:content['\f00c'] after:absolute after:right-0 after:top-1/2 after:w-[12px] after:h-[12px]  after:font-black after:bg-custom-blue after:text-white"
                >
                  {category.name}
                </label> */}
              </div>
            ))}
          </div>
          <div className="border border-[#EEEEEE] w-full" />
          {/* price */}
          <div className="flex flex-col gap-6">
            <h2 className="text-custom-dark font-bold text-[20px] ">السعر</h2>
            <div className="flex items-center justify-between gap-8">
              <div className="flex flex-col p-2 flex-1 rounded-lg border border-[#EAEAEA]">
                <span className="font-normal text-[12px] text-[#454545] ">
                  من
                </span>
                <p className="font-medium text-[16px] text-[#454545] ">600ج</p>
              </div>
              <div className="flex flex-col p-2 flex-1 rounded-lg border border-[#EAEAEA]">
                <span className="font-normal text-[12px] text-[#454545] ">
                  حتي
                </span>
                <p className="font-medium text-[16px] text-[#454545] ">6500ج</p>
              </div>
            </div>

            {/* seekBar */}
          </div>
        </div>
        {/* left: products */}
        <div className="w-full lg:w-[80%] flex flex-col gap-8">
          {/* title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h2 className="text-custom-dark text-2xl font-medium">
                قائمة المنتجات
              </h2>
              <span className="text-[#767676] font-medium text-lg"> (230)</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="font-normal text-[16px] text-[#5C5C5C]">
                ترتيب حسب
              </span>
              <select
                aria-label="Sort by rating"
                className="text-[#5C5C5C] font-normal text-[16px] border border-[#EDEDED] outline-none rounded-lg w-[150px] h-10 px-2"
              >
                <option className="">الاعلي تقييماً</option>
              </select>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <button className="border-[1.08px] border-[#F4F4F4] w-[35px] h-[35px] rounded-lg bg-white shadow-[0px_4.33px_13px_0px_#0000000D] flex items-center justify-center">
                <CiFilter size={20} color="#54585E" />
              </button>
              <button className="border-[1.08px] border-[#F4F4F4] w-[35px] h-[35px] rounded-lg bg-white shadow-[0px_4.33px_13px_0px_#0000000D] flex items-center justify-center">
                <TbArrowsDownUp size={20} color="#54585E" />
              </button>
            </div>
          </div>

          {/* products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-span-1 sm:col-span-1 lg:col-span-6 xl:col-span-4"
              >
                <ProductCard
                  product={product}
                  buttonPosition={"-left-[25px]"}
                />
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="flex items-center justify-center gap-2 ">
            <button
              aria-label="Next page"
              className=" bg-white rounded-lg text-[#CACACA] hover:text-custom-blue border border-[#EDEDED] shadow-[0px_4px_13.8px_0px_#00000014] flex items-center justify-center w-[29px] h-[29px]"
            >
              <MdKeyboardArrowRight />
            </button>
            <button
              aria-label="Next page (double)"
              className=" bg-white rounded-lg text-[#CACACA] hover:text-custom-blue border border-[#EDEDED] shadow-[0px_4px_13.8px_0px_#00000014] flex items-center justify-center w-[29px] h-[29px]"
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
            <button
              aria-label="Page 1"
              className=" bg-custom-blue rounded-lg text-white text-[16px] font-medium  hover:text-white  shadow-[0px_4px_13.8px_0px_#00000014] flex items-center justify-center w-[29px] h-[29px]"
            >
              1
            </button>
            <button
              aria-label="Page 2"
              className="transition-all duration-300 rounded-lg text-[#6D6D6D] text-[16px] font-medium hover:bg-custom-blue hover:text-white  hover:shadow-[0px_4px_13.8px_0px_#00000014]  flex items-center justify-center w-[29px] h-[29px]"
            >
              2
            </button>
            <button
              aria-label="Page 3"
              className="transition-all duration-300 rounded-lg text-[#6D6D6D] text-[16px] font-medium hover:bg-custom-blue hover:text-white  hover:shadow-[0px_4px_13.8px_0px_#00000014]  flex items-center justify-center w-[29px] h-[29px]"
            >
              3
            </button>
            ...
            <button
              aria-label="Page 14"
              className="transition-all duration-300 rounded-lg text-[#6D6D6D] text-[16px] font-medium hover:bg-custom-blue hover:text-white  hover:shadow-[0px_4px_13.8px_0px_#00000014]  flex items-center justify-center w-[29px] h-[29px]"
            >
              14
            </button>
            <button
              aria-label="Previous page"
              className=" bg-white rounded-lg text-[#CACACA] hover:text-custom-blue border border-[#EDEDED] shadow-[0px_4px_13.8px_0px_#00000014] flex items-center justify-center w-[29px] h-[29px]"
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              aria-label="Previous page (double)"
              className=" bg-white rounded-lg text-[#CACACA] hover:text-custom-blue border border-[#EDEDED] shadow-[0px_4px_13.8px_0px_#00000014] flex items-center justify-center w-[29px] h-[29px]"
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
