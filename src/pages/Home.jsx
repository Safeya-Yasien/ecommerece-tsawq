import React, { memo, Suspense, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { CustomTitle, ProductCard } from "@components/ecommerece";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { GoArrowLeft, GoArrowUpLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { phonesList } from "@data/AllProducts";

const Home = () => {
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

  const memoizedPhonesList = useMemo(() => phonesList, []);

  return (
    <div className="flex flex-col gap-12 px-12 py-4 pb-12">
      <HeroSlider />
      <Features />
      <Suspense fallback={"Loading..."}>
        <LimitedTimeProducts
          products={productsList}
          showArrows={true}
          showLabel={true}
        />
      </Suspense>
      <Categories />
      <Suspense fallback={"Loading..."}>
        <LimitedTimeProducts
          products={productsList}
          showArrows={true}
          showLabel={false}
        />
      </Suspense>
      <SpecialOffers />
      <Suspense fallback={"Loading..."}>
        <LimitedTimeProducts
          products={memoizedPhonesList}
          showArrows={false}
          showLabel={false}
          buttonPosition={"-left-[15px]"}
        />
      </Suspense>
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
    <section className="sm:w-[90%] mx-auto">
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

const LimitedTimeProducts = ({
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
        <CustomTitle title={"خصم لفترة محدودة"} />
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

LimitedTimeProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  showArrows: PropTypes.bool,
  showLabel: PropTypes.bool,
  buttonPosition: PropTypes.string,
};

const Categories = () => {
  const swiperSettings = {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
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

  const categories = useMemo(
    () => [
      {
        id: 1,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 2,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 3,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 4,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 5,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 6,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 7,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
    ],
    []
  );

  return (
    <section className="flex flex-col gap-8">
      <CustomTitle title="الاقسام" />
      <div>
        <Swiper {...swiperSettings} modules={[FreeMode]} className="mySwiper">
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Category category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const Category = memo(({ category }) => {
  return (
    <div className="bg-[#F6F6F6] rounded-lg p-6 gap-2 flex flex-col items-center justify-center">
      <img
        src={category.imgSrc}
        alt={category.name}
        loading="lazy"
        className="object-cover"
      />
      <h2 className="text-custom-dark font-bold text-[20px]">
        {category.name}
      </h2>
    </div>
  );
});

Category.displayName = "Category";

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
};

const SpecialOffers = () => {
  const offers = useMemo(
    () => [
      {
        id: 1,
        name: "سماعات وايرلس",
        imgSrc: "src/assets/images/special-offer.png",
        discount: 50,
      },
      {
        id: 2,
        name: "سماعات وايرلس",
        imgSrc: "src/assets/images/special-offer.png",
        discount: 50,
      },
      {
        id: 3,
        name: "سماعات وايرلس",
        imgSrc: "src/assets/images/special-offer.png",
        discount: 20,
      },
      {
        id: 4,
        name: "سماعات وايرلس",
        imgSrc: "src/assets/images/special-offer.png",
        discount: 70,
      },
      {
        id: 5,
        name: "سماعات وايرلس",
        imgSrc: "src/assets/images/special-offer.png",
        discount: 70,
      },
    ],
    []
  );

  const swiperSettings = {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
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
      <CustomTitle title={"عروض خاصة"} />
      <div className="">
        <Swiper {...swiperSettings}>
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <Offer product={offer} />
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </section>
  );
};

const Offer = memo(({ product }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#F6F6F6] rounded-md p-8 col-span-12 lg:col-span-3">
      {/* info */}
      <div className="flex flex-col gap-3">
        <h3 className="font-medium text-[28px] text-custom-dark">
          {product.name}{" "}
        </h3>
        <p className="font-normal text-lg">خصم يصل حتي %{product.discount}</p>
        <a
          href="#"
          className="underline text-custom-blue font-medium text-lg flex items-center gap-1"
        >
          أطلب الأن
          <span>
            <GoArrowUpLeft />
          </span>
        </a>
      </div>
      {/* img */}
      <div className="">
        <img
          src="src/assets/images/special-offer.png"
          alt="special offers"
          loading="lazy"
          className="object-cover"
        />
      </div>
    </div>
  );
});

Offer.displayName = "Offer";

Offer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
  }),
};
