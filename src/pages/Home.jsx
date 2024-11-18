import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <HeroSlider />
      <Features />
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
        <h2 className="font-bold text-lg text-[#454545]">{title}</h2>
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
    <section>
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
