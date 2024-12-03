import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { CiFilter } from "react-icons/ci";
import { TbArrowsDownUp } from "react-icons/tb";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { productsList } from "@data/AllProducts";
import { categories } from "@/data/categories";

import { Breadcrumb, ProductCard } from "@components/ecommerece";
import { PriceRange } from "@/components/ecommerece";

const ProductsList = () => {
  const { categoryName } = useParams();
  const [checkCategories, setCheckCategories] = useState([]);

  const memoizedCategories = useMemo(() => categories, []);
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

  const filterOptions = [
    { label: "الاعلى تقيما", value: "الاعلى تقيما" },
    { label: "المضاف حديثا", value: "المضاف حديثا" },
    { label: "الاعلى سعرا", value: "الاعلى سعرا" },
    { label: "من (أ) الي (ي)", value: "من (أ) الي (ي)" },
    { label: "من (ي) الي (أ)", value: "من (ي) الي (أ)" },
  ];

  return (
    <>
      {/* breadcrumb  */}
      <Breadcrumb currentPage="منتجاتنا" />
      {/* content */}
      <div className="px-4 md:px-12 py-8 mb-24 flex flex-col md:flex-row justify-between gap-8">
        {/* right: filter */}
        <div className="hidden lg:block  w-[20%] sticky top-0 right-0">
          <div className="flex flex-col gap-6 shadow-[0px_4px_23.3px_0px_#0000000D] border border-[#EDEDED] p-8 rounded-2xl  ">
            <h2 className="text-custom-dark font-bold text-[20px] ">الاقسام</h2>
            <div className="flex flex-col gap-4">
              {memoizedCategories.map((category) => (
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
                </div>
              ))}
            </div>
            <div className="border border-[#EEEEEE] w-full" />

            {/* price range or seekbar*/}
            <PriceRange />
          </div>
        </div>

        {/* left: products */}
        <div className="w-full lg:w-[80%] flex flex-col gap-8">
          {/* title & filter */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h2 className="text-custom-dark text-2xl font-medium text-[20px] md:text-[24px]">
                قائمة المنتجات
              </h2>
              <span className="text-[#767676] font-medium text-[14px] md:text-lg">
                {" "}
                (230)
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="font-normal text-[16px] text-[#5C5C5C]">
                ترتيب حسب
              </span>
              <select
                aria-label="Sort by rating"
                className="text-[#5C5C5C] font-normal text-[16px] border border-[#EDEDED] outline-none rounded-lg w-[150px] h-10 px-2"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} className="">
                    {option.value}{" "}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter as Sheet for small screens */}
            <div className="lg:hidden flex items-center gap-2">
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="border-[1.08px] border-[#F4F4F4] w-[35px] h-[35px] rounded-lg bg-white shadow-md flex items-center justify-center">
                    <CiFilter size={24} color="#54585E" />
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="p-6">
                    <DrawerHeader>
                      <DrawerTitle className="text-center text-[#252534] font-bold text-xl">
                        تصنيفات
                      </DrawerTitle>
                    </DrawerHeader>

                    <h3 className="text-custom-dark font-bold text-lg lg:text-2xl mb-4">
                      الاقسام
                    </h3>

                    {/* Categories List */}
                    <div className="flex flex-col gap-4">
                      {categories.map((category) => (
                        <div
                          className="flex items-center gap-2"
                          key={category.id}
                        >
                          <input
                            type="checkbox"
                            id={category.name}
                            checked={checkCategories.includes(category.name)}
                            onChange={() => handleOnChange(category.name)}
                            className="w-5 h-5"
                          />
                          <label
                            htmlFor={category.name}
                            className="text-gray-700"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="border border-[#F0F3F8] mt-8"></div>

                    {/* Price Range Component */}
                    <div className="mt-6">
                      <PriceRange />
                    </div>

                    {/* Footer Action Buttons */}
                    <DrawerFooter>
                      <Button className="w-full bg-custom-blue text-white rounded-3xl mt-8">
                        تطبيق
                      </Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              {/* Radio Button List for Sorting Options */}
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="border-[1.08px] border-[#F4F4F4] w-[35px] h-[35px] rounded-lg bg-white shadow-[0px_4.33px_13px_0px_#0000000D] flex items-center justify-center">
                    <TbArrowsDownUp size={20} color="#54585E" />
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="p-6">
                    <DrawerHeader>
                      <DrawerTitle className="text-center text-[#252534] font-bold text-xl">
                        ترتيب حسب
                      </DrawerTitle>
                    </DrawerHeader>

                    <div className="flex flex-col gap-4">
                      {filterOptions.map((option) => (
                        <div
                          className="flex items-center gap-2"
                          key={option.value}
                        >
                          <input
                            type="radio"
                            id={option.value}
                            name="filterOption"
                            className="w-5 h-5"
                          />
                          <label
                            htmlFor={option.value}
                            className="text-gray-700"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Footer Action Buttons */}
                    <DrawerFooter className="mt-8">
                      <Button className="w-full bg-custom-blue text-white rounded-3xl">
                        تطبيق
                      </Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
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
    </>
  );
};

export default ProductsList;
