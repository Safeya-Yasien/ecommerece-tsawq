import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import hero from "../../assets/images/hero.webp";

export function Hero() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      <SwiperSlide className="relative overflow-hidden ">
        <div className="bg-[#F8F9FF] p-6 relative z-20">
          {/* before & after */}
          <div className="hidden md:block  absolute -left-[150px] -top-[250px] border-[60px] bg-transparent border-[#EAEDFF]  w-[635px] h-[635px] rounded-full -z-10"></div>
          <div className="hidden md:block  absolute -right-[200px] -bottom-[500px] border-[60px] bg-transparent border-[#EAEDFF]  w-[635px] h-[635px] rounded-full -z-10"></div>

          <div className="sm:!flex items-center justify-between h-full">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[10px] md:text-[16px] font-bold text-custom-blue">
                  من افضل منتجات هذا الشهر
                </p>
                <span
                  className="h-[18px] w-[18px] bg-custom-blue rounded-full text-white
            flex items-center justify-center"
                >
                  <FaStar size={12} />
                </span>
              </div>

              <h1 className="font-bold text-lg md:text-[50px] text-custom-dark md:leading-[75px]">
                تشكيلة من سماعات الرأس اللاسلكية للالعاب
              </h1>
              <p className="text-lg text-[#787878] font-normal">
                تمتع بافضل تشكيلة جديدة وحصريه من سماعات الرأس اللاسلكية
                للالعاب. عروض وخصومات في انتظارك
              </p>
              <button
                className="bg-custom-blue text-white rounded-3xl font-bold text-xs md:text-lg leading-[26px] w-[121px] h-[43px]"
                aria-label="اطلب الان"
              >
                أطلب الان
              </button>
            </div>

            {/* img */}
            <div className="flex flex-1">
              <img
                src={hero}
                alt="hero"
                className="hidden sm:block object-cover h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative overflow-hidden ">
        <div className="bg-[#F8F9FF] p-6 relative z-20">
          {/* before & after */}
          <div className="hidden md:block  absolute -left-[150px] -top-[250px] border-[60px] bg-transparent border-[#EAEDFF]  w-[635px] h-[635px] rounded-full -z-10"></div>
          <div className="hidden md:block  absolute -right-[200px] -bottom-[500px] border-[60px] bg-transparent border-[#EAEDFF]  w-[635px] h-[635px] rounded-full -z-10"></div>

          <div className="sm:!flex items-center justify-between h-full">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[10px] md:text-[16px] font-bold text-custom-blue">
                  من افضل منتجات هذا الشهر
                </p>
                <span
                  className="h-[18px] w-[18px] bg-custom-blue rounded-full text-white
            flex items-center justify-center"
                >
                  <FaStar size={12} />
                </span>
              </div>

              <h1 className="font-bold text-lg md:text-[50px] text-custom-dark md:leading-[75px]">
                تشكيلة من سماعات الرأس اللاسلكية للالعاب
              </h1>
              <p className="text-lg text-[#787878] font-normal">
                تمتع بافضل تشكيلة جديدة وحصريه من سماعات الرأس اللاسلكية
                للالعاب. عروض وخصومات في انتظارك
              </p>
              <button
                className="bg-custom-blue text-white rounded-3xl font-bold text-xs md:text-lg leading-[26px] w-[121px] h-[43px]"
                aria-label="اطلب الان"
              >
                أطلب الان
              </button>
            </div>

            {/* img */}
            <div className="flex flex-1">
              <img
                src={hero}
                alt="hero"
                className="hidden sm:block object-cover h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
