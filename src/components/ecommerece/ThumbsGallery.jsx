import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

const ThumbsGallery = ({ productImages, productName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="">
      <div className="border border-[#F6F6F6] shadow-[0px_4px_19.3px_0px_#0000000D] rounded-2xl p-12 relative">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper2 h-[80%] w-full !pb-[50px]"
          dir="ltr"
        >
          {productImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="!flex items-center justify-center !h-[400px]"
            >
              <img
                src={image}
                className="w-full h-full object-contain"
                alt={productName}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="custom-prev absolute left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
            bg-white w-[32px] h-[32px] rounded-full shadow-[0px_4px_16.3px_0px_#0000001a]
              flex items-center justify-center "
        >
          <IoIosArrowRoundBack size={20} color="#C6C6C6" />
        </div>
        <div
          className="custom-next absolute right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
            bg-white w-[32px] h-[32px] rounded-full shadow-[0px_4px_16.3px_0px_#0000001a]
              flex items-center justify-center "
        >
          <IoIosArrowRoundForward size={20} color="#C6C6C6" />
        </div>
      </div>

      {/* thumbs swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[20%] py-[10px] mt-14"
        dir="rtl"
      >
        {productImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!items-center !justify-center cursor-pointer border border-[#F6F6F6] rounded-lg p-6 !hidden sm:!flex sm:w-[25%]
            !h-[200px]"
          >
            <img
              src={image}
              className="w-full h-full object-cover block"
              alt={productName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
