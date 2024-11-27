import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { CustomTitle } from "@components/ecommerece";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import category_1 from "../../assets/images/category_1.webp";
import category_2 from "../../assets/images/category_2.webp";
import category_3 from "../../assets/images/apple-iphone.webp";
import category_4 from "../../assets/images/category_4.webp";
import category_5 from "../../assets/images/category_5.webp";

const CategoriesCarousel = () => {
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
        name: "هواتف",
        imgSrc: category_1,
      },
      {
        id: 2,
        name: "لابتوب",
        imgSrc: category_2,
      },
      {
        id: 3,
        name: "تابليت",
        imgSrc: category_3,
      },
      {
        id: 4,
        name: "سماعات",
        imgSrc: category_4,
      },

      {
        id: 5,
        name: "لابتوب",
        imgSrc: category_5,
      },
    ],
    []
  );

  return (
    <section className="flex flex-col gap-8">
      <CustomTitle title="الاقسام" />
      <div>
        <Swiper {...swiperSettings} className="mySwiper">
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
    <Link
      to={`/products-list/${category.name}`}
      className="bg-[#F6F6F6] rounded-lg p-6 gap-2 flex flex-col items-center justify-around
      h-[250px] "
    >
      <div className="w-[150px] h-[150px] overflow-hidden">
        <img
          src={category.imgSrc}
          alt={category.name}
          loading="lazy"
          className="object-cover w-full h-auto"
        />
      </div>
      <h2 className="text-custom-dark font-bold text-[20px]">
        {category.name}
      </h2>
    </Link>
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
export default CategoriesCarousel;
