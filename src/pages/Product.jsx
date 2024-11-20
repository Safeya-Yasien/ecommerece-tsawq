import { memo, Suspense, useMemo, useState } from "react";

import {
  Breadcrumb,
  CustomizeProduct,
  CustomTitle,
  ProductsCarousel,
  ThumbsGallery,
} from "@components/ecommerece";
import { FaStar } from "react-icons/fa";
import { CiLocationOn, CiShoppingCart, CiStar } from "react-icons/ci";
import { IoFlash } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { CiHeadphones } from "react-icons/ci";
import { RiArrowGoBackFill } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

import client from "../assets/images/client.svg";
import { phonesList } from "@data/AllProducts";

const Product = () => {
  const memoizedPhonesList = useMemo(() => phonesList, []);

  return (
    <div>
      <Breadcrumb />
      <div className="px-12 py-8 flex flex-col gap-12">
        <div className="flex flex-col justify-between lg:flex-row gap-8">
          {/* right side */}
          <div className="w-full lg:w-[50%]">
            <ThumbsGallery />
          </div>
          {/* left side */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 border border-[#F6F6F6] shadow-[0px_4px_19.3px_0px_#0000000D] rounded-2xl p-12 ">
            {/* rating */}
            <div className="flex items-center gap-2">
              <ul className="flex items-center gap-2">
                <li>
                  <FaStar color="#FFAF13" size={17} />
                </li>
                <li>
                  <FaStar color="#FFAF13" size={17} />
                </li>
                <li>
                  <FaStar color="#FFAF13" size={17} />
                </li>
                <li>
                  <FaStar color="#FFAF13" size={17} />
                </li>
                <li>
                  <FaStar color="#DBDBDB" size={17} />
                </li>
              </ul>
              <span className="text-[#808080] font-normal text-lg">
                (بناء علي 45 تقييم)
              </span>
            </div>

            <CustomizeProduct />

            {/* add to cart */}
            <div className="flex items-center gap-4 ">
              <button
                className="ring-1 ring-[#ECECEC] bg-[#141D2E] w-[358px] h-[49px] rounded-[61px] flex items-center justify-center
            text-white font-bold text-lg gap-1"
              >
                <CiShoppingCart size={22} /> <span>اضف الي السلة </span>
              </button>
              <div className="flex items-center ring-1 ring-[#ECECEC] h-[49px] rounded-[61px] px-4">
                <button className="w-[12px] text-custom-blue flex items-center justify-center">
                  +
                </button>
                <div className="hidden md:block border-l border-[#ECECEC] h-full mx-3"></div>
                <input
                  type="number"
                  defaultValue={1}
                  className="text-[#666666] font-medium text-lg outline-none border-none text-center h-full w-[91px]"
                />
                <div className="hidden md:block border-l border-[#ECECEC] h-full mx-3"></div>
                <button className="text-[#979797] w-[12px] ">-</button>
              </div>
            </div>

            {/* divide line */}
            <div className="flex items-center gap-4">
              <div className="border border-[#CACFE1] w-[266px]"></div>
              <span className="font-normal text-lg border-[#6E768F] ">او</span>
              <div className="border border-[#CACFE1] w-[266px]"></div>
            </div>

            {/* fast order form */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#3074F014] rounded-lg flex items-center gap-2 p-3">
                <IoFlash className="text-custom-blue" size={24} />

                <h4 className="font-medium text-[20px] text-custom-gray">
                  للطلب السريع يرجي إدخال البيانات المطلوبة:
                </h4>
              </div>

              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="full-name"
                    className="text-[#63636E] font-medium text-sm"
                  >
                    الأسم الكامل
                  </label>
                  {/* shadow-[0px_4px_8px_0px_#215BFF14] */}
                  <div className="relative">
                    <input
                      type="text"
                      id="full-name"
                      aria-label="ادخل اسمك بالكامل"
                      placeholder="ادخل اسمك بالكامل"
                      className=" font-normal text-sm  rounded-lg border border-[#DEDEDE] py-4 px-5 pr-10
                   w-full outline-none"
                    />
                    <AiOutlineUser className="absolute top-1/2 -translate-y-1/2 right-4 text-custom-blue w-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone-number"
                    className="text-[#63636E] font-medium text-sm"
                  >
                    رقم الهاتف{" "}
                  </label>
                  {/* shadow-[0px_4px_8px_0px_#215BFF14] */}
                  <div className="relative">
                    <input
                      type="text"
                      id="phone-number"
                      aria-label="ادخل رقم الهاتف الخاص بك"
                      placeholder="ادخل رقم الهاتف الخاص بك"
                      className=" font-normal text-sm  rounded-lg border border-[#DEDEDE] py-4 px-5 pr-10
                   w-full outline-none"
                    />
                    <FiPhone className="absolute top-1/2 -translate-y-1/2 right-4 text-custom-blue w-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address"
                    className="text-[#63636E] font-medium text-sm"
                  >
                    العنوان{" "}
                  </label>
                  {/* shadow-[0px_4px_8px_0px_#215BFF14] */}
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      placeholder="ادخل عنوانك بالتفصيل"
                      aria-label="ادخل عنوانك بالتفصيل"
                      className=" font-normal text-sm  rounded-lg border border-[#DEDEDE] py-4 px-5 pr-10
                   w-full outline-none"
                    />
                    <CiLocationOn className="absolute top-1/2 -translate-y-1/2 right-4 text-custom-blue w-5" />
                  </div>
                </div>

                {/* </div> */}

                {/* save offers */}
                <div className="bg-[#3074F014] rounded-lg flex items-center gap-2 p-3">
                  <IoFlash className="text-custom-blue" size={24} />

                  <h4 className="font-medium text-[20px] text-custom-gray">
                    عروض التوفير{" "}
                  </h4>
                </div>

                <div className="flex flex-col gap-6 ">
                  <div className="rounded-lg border-2 border-custom-blue py-4 px-5 flex items-center justify-between gap-3 leading-7 bg-[#F6F9FFCC] ">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="only one product"
                        className=" font-normal text-sm "
                        name="product-offer"
                        aria-checked="true"
                      />
                      <label
                        htmlFor="only one product "
                        className="font-medium text-[20px] border-[#252534] "
                      >
                        منتج واحد فقط{" "}
                      </label>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-bold text-[20px] text-custom-gray">
                        6500ج
                      </p>
                      <span className="text-[#808080] font-normal text-sm line-through">
                        7000ج
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-[#DEDEDE] py-4 px-5 flex items-center justify-between gap-3 leading-7">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="only one product"
                        className=" font-normal text-sm "
                        name="product-offer"
                      />
                      <label
                        htmlFor="only one product "
                        className="font-medium text-[20px] border-[#252534] "
                      >
                        اشتري 2 و احصل على خصم 10٪{" "}
                      </label>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-bold text-[20px] text-custom-gray">
                        6500ج
                      </p>
                      <span className="text-[#808080] font-normal text-sm line-through">
                        7000ج
                      </span>
                    </div>{" "}
                  </div>
                  <div className="rounded-lg border border-[#DEDEDE] py-4 px-5 flex items-center justify-between gap-3 leading-7">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="only one product"
                        className=" font-normal text-sm "
                        name="product-offer"
                      />
                      <label
                        htmlFor="only one product "
                        className="font-medium text-[20px] border-[#252534] "
                      >
                        اشتري 3 و احصل على خصم 15٪{" "}
                      </label>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-bold text-[20px] text-custom-gray">
                        6500ج
                      </p>
                      <span className="text-[#808080] font-normal text-sm line-through">
                        7000ج
                      </span>
                    </div>{" "}
                  </div>
                </div>

                <div className="ring-1 ring-[#E5E9F1] w-full mt-2"></div>
                <div className="flex items-center justify-between">
                  <p className="text-[#3A4353] font-bold text-[20px]">
                    إجمالي المبلغ:
                  </p>
                  <p className="text-[#3A4353] font-bold text-[22px]">6500ج</p>
                </div>

                <button className="text-white font-bold text-[22px] shadow-[0px_4px_19.2px_0px_#3074F066] ring-1 ring-[#ECECEC] rounded-[61px] flex items-center justify-center bg-custom-blue h-[69px]">
                  اشتري الان - الدفع عند الاستلام
                </button>
              </form>
            </div>

            {/* description */}
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[20px] text-custom-gray">
                تفاصيل عن المنتج:
              </h4>
              <p className="text-[#787878] font-normal text-lg leading-[26px]">
                آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق
                FaceTime - إصدار الشرق آيفون 15 برو ماكس، سعة 256 جيجابايت،
                تيتانيوم طبيعي، 5G مع تطبيق FaceTime - إصدار الشرق آيفون 15 برو
                ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق FaceTime -
                إصدار الشرق الأوسط
              </p>
            </div>

            {/* payment policy */}
            <Accordion />
          </div>
        </div>
        {/* our customer reviews */}
        <div className="flex justify-between items-center gap-8">
          <div className="flex flex-col gap-3 flex-1">
            <CustomTitle title={"تقييمات عملائنا"} />
            <p className="text-[#787878] font-normal text-lg">
              بعض من تقيمات عملائنا عن هذا المنتج. اطلب الان واكتب تقييمك
            </p>
            <button className="text-white bg-custom-blue font-bold text-lg flex items-center justify-center w-[147px] h-[48px] rounded-[39px]">
              اكتب تقييمك
            </button>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-8 ">
              <ul className="flex justify-between flex-col gap-2 flex-1">
                <li className="flex items-center justify-between  gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <span>5</span>
                    <ul className="flex items-center gap-1">
                      <li className="">
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-1 ">
                    <div className="w-full bg-[#AAAAAA59] rounded-lg ">
                      <div
                        className="bg-custom-blue h-2 rounded-lg transition-all duration-300"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <div className="text-center text-[16px] font-medium text-[#6B6B6B] ">
                      60%
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between  gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <span>4</span>
                    <ul className="flex items-center gap-1">
                      <li className="">
                        <CiStar className="" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-1 ">
                    <div className="w-full bg-[#AAAAAA59] rounded-lg ">
                      <div
                        className="bg-custom-blue h-2 rounded-lg transition-all duration-300"
                        style={{ width: "34%" }}
                      ></div>
                    </div>
                    <div className="text-center text-[16px] font-medium text-[#6B6B6B] ">
                      34%
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between  gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <span>3</span>
                    <ul className="flex items-center gap-1">
                      <li className="">
                        <CiStar className="" />
                      </li>
                      <li>
                        <CiStar className="" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-1 ">
                    <div className="w-full bg-[#AAAAAA59] rounded-lg ">
                      <div
                        className="bg-custom-blue h-2 rounded-lg transition-all duration-300"
                        style={{ width: "4%" }}
                      ></div>
                    </div>
                    <div className="text-center text-[16px] font-medium text-[#6B6B6B] ">
                      4%
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between  gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <span>2</span>
                    <ul className="flex items-center gap-1">
                      <li className="">
                        <CiStar className="" />
                      </li>
                      <li>
                        <CiStar className="" />
                      </li>
                      <li>
                        <CiStar className="" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-1 ">
                    <div className="w-full bg-[#AAAAAA59] rounded-lg ">
                      <div
                        className="bg-custom-blue h-2 rounded-lg transition-all duration-300"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <div className="text-center text-[16px] font-medium text-[#6B6B6B] ">
                      2%
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between  gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <span>1</span>
                    <ul className="flex items-center gap-1">
                      <li className="">
                        <CiStar className="" />
                      </li>
                      <li>
                        <CiStar className="" />
                      </li>
                      <li>
                        <CiStar className="" />
                      </li>
                      <li>
                        <CiStar className="" />
                      </li>
                      <li>
                        <FaStar className="text-custom-blue" />
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-1 ">
                    <div className="w-full bg-[#AAAAAA59] rounded-lg ">
                      <div
                        className="bg-custom-blue h-2 rounded-lg transition-all duration-300"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="text-center text-[16px] font-medium text-[#6B6B6B] ">
                      0%
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* swiper */}
        <div className="mt-6">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            dir="rtl"
            className="w-full h-full mx-auto reviews-grid-swiper"
          >
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
              <div className="flex items-center gap-2">
                <div className="w-[53px] h-[53px] ">
                  <img
                    src={client}
                    className="w-full h-full"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-custom-blue font-medium text-sm">
                    Mohamed Ahmed
                  </h5>
                  <p className="text-[#282A2B] font-normal text-[12px]">
                    112/3/24
                  </p>
                </div>
              </div>
              <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
                &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
                التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <Suspense fallback={"Loading..."}>
          <ProductsCarousel
            title="منتجات مشابهه"
            products={memoizedPhonesList}
            showArrows={true}
            showLabel={false}
          />
        </Suspense>{" "}
      </div>
    </div>
  );
};

export default Product;

const Accordion = () => {
  const accordionItems = useMemo(
    () => [
      {
        id: 1,
        title: "سياسة الدفع عند الاستلام",
        icon: <IoBagOutline size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },

      {
        id: 2,
        title: "سياسة الشحن",
        icon: <LiaBusinessTimeSolid size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },
      {
        id: 3,
        title: "سياسة الاسترجاع",
        icon: <RiArrowGoBackFill size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },
      {
        id: 4,
        title: "خدمة العملاء",
        icon: <CiHeadphones size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },
    ],
    []
  );

  return (
    <div
      id="accordion-collapse"
      className="rounded-3xl border border-[#D7D9DB] p-6 flex flex-col gap-4 "
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          description={item.description}
          isLast={index === accordionItems.length - 1}
          isOpen={index === 0}
        />
      ))}
    </div>
  );
};

const AccordionItem = memo(({ title, icon, description, isLast, isOpen }) => {
  const [isItemOpen, setIsItemOpen] = useState(isOpen);

  const handleAccordion = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <div className="flex flex-col relative gap-4">
      <h2
        id="accordion-collapse-heading-1"
        className="flex items-center gap-2 text-[#4A4A4A] font-medium text-[20px]"
      >
        <button
          type="button"
          className="flex items-center justify-between w-full"
          data-accordion-target="#accordion-collapse-body-1"
          aria-controls="accordion-collapse-body-1"
          onClick={handleAccordion}
          aria-expanded={isItemOpen}
        >
          <span className="flex items-center gap-2 leading-[0px]">
            {icon}
            {title}{" "}
          </span>{" "}
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${isItemOpen ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${isItemOpen ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <p className="font-normal text-[16px] text-[#787878] leading-7">
          {description}
        </p>
      </div>
      {!isLast && <div className="w-full h-[1px] bg-[#D7D9DB] my-4"></div>}
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";
AccordionItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
