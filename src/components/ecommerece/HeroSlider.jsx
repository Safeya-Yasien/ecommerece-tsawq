import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

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

export default HeroSlider;
