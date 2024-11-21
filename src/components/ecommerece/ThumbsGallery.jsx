import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";

import phoneImage from "../../assets/images/apple-iphone.png";

const ThumbsGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col gap-14 thumbs-gallery">
      <div className="border border-[#F6F6F6] shadow-[0px_4px_19.3px_0px_#0000000D] rounded-2xl p-12">
        <Swiper
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true, }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          className="mySwiper2"
          dir="rtl"
        >
          {/* Using local image for SwiperSlide */}
          <SwiperSlide className="">
            <img src={phoneImage} alt="Phone Image 1" className=" mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={phoneImage} alt="Phone Image 2" className=" mx-auto"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={phoneImage} alt="Phone Image 3" className=" mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={phoneImage} alt="Phone Image 4" className=" mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          dir="rtl"
          className="mySwiper cursor-pointer"
        >
          <SwiperSlide className="border border-[#F6F6F6] rounded-lg p-6  ">
            <img
              src={phoneImage}
              alt="Phone Thumbnail 1"
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="border border-[#F6F6F6] rounded-lg p-6  ">
            <img src={phoneImage} alt="Phone Thumbnail 2" />
          </SwiperSlide>
          <SwiperSlide className="border border-[#F6F6F6] rounded-lg p-6  ">
            <img src={phoneImage} alt="Phone Thumbnail 3" />
          </SwiperSlide>
          <SwiperSlide className="border border-[#F6F6F6] rounded-lg p-6  ">
            <img src={phoneImage} alt="Phone Thumbnail 4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ThumbsGallery;
