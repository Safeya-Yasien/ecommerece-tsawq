import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";

const ThumbsGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col gap-14">
      <div className="border border-[#F6F6F6] shadow-[0px_4px_19.3px_0px_#0000000D] rounded-2xl p-12">
        <Swiper
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          className="mySwiper2"
          dir="rtl"
        >
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
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
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/assets/images/phone.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ThumbsGallery;
