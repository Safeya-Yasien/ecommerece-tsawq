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
import { useRef } from "react";

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
    slidesPerView: 1,
    breakpoints: {
      340: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };

  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="flex flex-col gap-8 relative">
      <div className="flex items-center gap-6 flex-wrap lg:flex-nowrap">
        <CustomTitle title={title} />
        {showCountdown && (
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        )}

        {showArrows ? (
          <>
            <div
              className="custom-prev absolute left-6 z-10 cursor-pointer
                   bg-white w-[32px] h-[32px] rounded-full shadow-[0px_4px_16.3px_0px_#0000001a]
                     !flex items-center justify-center "
            >
              <IoIosArrowRoundBack size={20} color="#C6C6C6" />
            </div>
            <div
              className="custom-next absolute left-16 z-10 cursor-pointer
                  bg-custom-blue text-white w-[32px] h-[32px] rounded-full shadow-[0px_4px_16.3px_0px_#0000001a]
                     !flex items-center justify-center "
            >
              <IoIosArrowRoundForward size={20} color="#fff" />
            </div>
          </>
        ) : (
          <Link
            to=""
            className="flex items-center text-custom-blue gap-1 underline absolute left-0 "
          >
            عرض المزيد{" "}
            <span>
              <GoArrowLeft />
            </span>
          </Link>
        )}
      </div>

      <Swiper
        {...swiperSettings}
        ref={swiperRef}
        className="w-full h-full !py-4 !pr-1"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              showLabel={showLabel}
              key={product.id}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsCarousel;
