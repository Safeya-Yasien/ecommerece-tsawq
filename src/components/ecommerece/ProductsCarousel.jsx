import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import { CustomTitle, ProductCard } from "@components/ecommerece";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

const ProductsCarousel = ({
  title,
  products,
  showArrows,
  showLabel,
  showCountdown,
}) => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const swiperSettings = {
    modules: [FreeMode, Navigation],
    navigation: {
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    },
    spaceBetween: 20,
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <section className="flex flex-col gap-8 relative">
      <div className="flex items-center gap-6 flex-wrap lg:flex-nowrap">
        <CustomTitle title={title} />
        {showCountdown && (
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        )}
      </div>

      <Swiper {...swiperSettings} className="w-full h-full !py-4 !pr-1">
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              showLabel={showLabel}
              key={product.id}
            />{" "}
          </SwiperSlide>
        ))}
        {showArrows ? (
          <>
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
          </>
        ) : (
          <Link
            to=""
            className="flex items-center text-custom-blue gap-1 underline absolute left-0 -top-[53px] transform -translate-y-1/2"
          >
            عرض المزيد{" "}
            <span>
              <GoArrowLeft />
            </span>
          </Link>
        )}
      </Swiper>
    </section>
  );
};

export default ProductsCarousel;
