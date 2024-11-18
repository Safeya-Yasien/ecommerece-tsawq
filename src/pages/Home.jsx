import React, { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { CustomTitle, ProductCard } from "@components/ecommerece";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <HeroSlider />
      <Features />
      <LimitedTimeProducts />
    </div>
  );
};
export default Home;

const HeroSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
  };
  return (
    <section className="bg-[#F8F9FF] h-full rounded-md p-8 text-right overflow-hidden">
      <Slider {...settings} className="">
        <div className="!flex items-center justify-between h-full">
          {/* left side */}
          <div className="hidden lg:flex flex-1">
            <img
              src="src/assets/images/hero.webp"
              alt="hero"
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          {/* right side */}
          <div className="flex flex-col gap-4 items-end flex-1">
            <div className="flex items-center gap-2 justify-end">
              <p className="text-[16px] font-bold text-custom-blue">
                من افضل منتجات هذا الشهر
              </p>
              <span
                className="h-[18px] w-[18px] bg-custom-blue rounded-full text-white
          flex items-center justify-center"
              >
                <FaStar size={12} />
              </span>
            </div>

            <h1 className="font-bold text-[50px] text-custom-dark">
              تشكيلة من سماعات الرأس اللاسلكية للالعاب
            </h1>
            <p className="text-lg text-[#787878] font-normal">
              تمتع بافضل تشكيلة جديدة وحصريه من سماعات الرأس اللاسلكية للالعاب.
              عروض وخصومات في انتظارك
            </p>
            <button
              className="bg-custom-blue text-white rounded-md font-bold text-lg leading-[26px] w-[121px] h-[43px]"
              aria-label="اطلب الان"
            >
              أطلب الان
            </button>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </Slider>
    </section>
  );
};

const Feature = React.memo(({ iconSrc, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="w-12">
        <img
          src={iconSrc}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-lg text-custom-gray">{title}</h2>
        <p className="text-sm text-[#787878] font-normal">{description}</p>
      </div>
    </div>
  );
});

Feature.displayName = "Feature";

Feature.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Features = () => {
  const featuresData = useMemo(
    () => [
      {
        icon: "src/assets/images/delivery.svg",
        title: "توصيل مجاني",
        description: "طلبات حتي 1500ج",
      },
      {
        icon: "src/assets/images/coupon.svg",
        title: "عروض وخصومات",
        description: "عروض وخصومات دائمة",
      },
      {
        icon: "src/assets/images/money.svg",
        title: "الدفع عند الاستلام",
        description: "ميزة الدفع عند الاستلام",
      },
      {
        icon: "src/assets/images/headphone.svg",
        title: "خدمة العملاء",
        description: "متوفرة 24/7",
      },
    ],
    []
  );

  return (
    <section className="w-[90%] mx-auto">
      <div className="flex flex-wrap items-center justify-around gap-8 p-8 bg-white shadow-[0px_4px_29px_0px_#2123280F]">
        {featuresData.map((feature, index) => (
          <React.Fragment key={index}>
            <Feature
              iconSrc={feature.icon}
              title={feature.title}
              description={feature.description}
            />
            {index < featuresData.length - 1 && (
              <div className="hidden md:block border-l border-[#ECECEC] h-16"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const LimitedTimeProducts = () => {
  const productsList = useMemo(
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
        {/* <Countdown /> */}
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
          {productsList.map((product) => {
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
