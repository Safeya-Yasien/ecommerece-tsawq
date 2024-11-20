import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { CustomTitle } from "@components/ecommerece";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

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
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 2,
        name: "لابتوب",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 3,
        name: "تابليت",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 4,
        name: "سماعات",
        imgSrc: "src/assets/images/category.png",
      },
      {
        id: 5,
        name: "ايباد",
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
    <div className="bg-[#F6F6F6] rounded-lg p-6 gap-2 flex flex-col items-center justify-center">
      <img
        src={category.imgSrc}
        alt={category.name}
        loading="lazy"
        className="object-cover"
      />
      <Link
        to={`/products-list/${category.name}`}
        className="text-custom-dark font-bold text-[20px]"
      >
        {category.name}
      </Link>
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
export default CategoriesCarousel;
