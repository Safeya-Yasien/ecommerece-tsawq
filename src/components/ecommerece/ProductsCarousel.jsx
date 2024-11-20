import { useRef } from "react";
import PropTypes from "prop-types";
import { CustomTitle, ProductCard } from "@components/ecommerece";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const ProductsCarousel = ({
  title,
  products,
  showArrows,
  showLabel,
  buttonPosition,
}) => {
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

  const swiperSettings = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1280: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4 justify-between">
        <CustomTitle title={title} />
        {/* <Countdown /> */}
        {/* swiper arrows control */}
        {showArrows ? (
          <div className="flex items-center gap-2">
            <button
              aria-label="Next"
              className=" w-8 h-8 rounded-full text-white  bg-custom-blue flex items-center justify-center"
              onClick={goToNextSlide}
            >
              <FaArrowRightLong />
            </button>
            <button
              aria-label="Previous"
              className=" w-8 h-8 rounded-full text-custom-blue  bg-white shadow-[0px_4px_16.3px_0px_#0000001A] flex items-center justify-center"
              onClick={goToPrevSlide}
            >
              <FaArrowLeftLong />
            </button>
          </div>
        ) : (
          <Link
            to=""
            className="flex items-center text-custom-blue gap-1 underline"
          >
            عرض المزيد{" "}
            <span>
              <GoArrowLeft />
            </span>
          </Link>
        )}
      </div>

      {/* products */}
      <div className="">
        <Swiper ref={swiperRef} {...swiperSettings}>
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id} className="">
                <ProductCard
                  product={product}
                  showLabel={showLabel}
                  buttonPosition={buttonPosition}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

ProductsCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  showArrows: PropTypes.bool,
  showLabel: PropTypes.bool,
  buttonPosition: PropTypes.string,
};
export default ProductsCarousel;
