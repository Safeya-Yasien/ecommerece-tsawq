import { useMemo, useRef } from "react";

import { CustomTitle, ProductCard } from "@components/ecommerece";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import PropTypes from "prop-types";

const ProductsListSwiper = ({ showCountdown }) => {
  const products = useMemo(
    () => [
      {
        id: 1,
        imgSrc: "src/assets/images/phone.png",
        name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.",
        price: 6500,
        originalPrice: 7000,
        rating: 4.2,
      },
      {
        id: 2,
        imgSrc: "src/assets/images/phone.png",
        name: "آيفون 13 برو ماكس 256 جيجا",
        price: 12000,
        originalPrice: 13000,
        rating: 4.8,
      },
      {
        id: 3,
        imgSrc: "src/assets/images/phone.png",
        name: "هواوي P40 برو 128 جيجا",
        price: 9800,
        originalPrice: 10500,
        rating: 4.5,
      },
      {
        id: 4,
        imgSrc: "src/assets/images/phone.png",
        name: "شاومي مي 11 128 جيجا",
        price: 7400,
        originalPrice: 7800,
        rating: 4.3,
      },
      {
        id: 5,
        imgSrc: "src/assets/images/phone.png",
        name: "أوبو رينو 5 128 جيجا",
        price: 5500,
        originalPrice: 6000,
        rating: 4.1,
      },
      {
        id: 6,
        imgSrc: "src/assets/images/phone.png",
        name: "ريلمي 8 برو 128 جيجا",
        price: 6200,
        originalPrice: 6600,
        rating: 4.4,
      },
    ],
    []
  );

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
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4 justify-between">
        <CustomTitle title={"خصم لفترة محدودة"} />
        {showCountdown ? "countdown" : ""}
        {/* swiper arrows control */}
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
      </div>

      {/* products */}
      <div className="">
        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          spaceBetween={30}
          className=""
          loop={true}
          breakpoints={{
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
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id} className="">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

ProductsListSwiper.propTypes = {
  showCountdown: PropTypes.bool,
};

export default ProductsListSwiper;
