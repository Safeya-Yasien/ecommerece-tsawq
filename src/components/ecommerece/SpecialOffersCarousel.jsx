import { memo, useMemo } from "react";
import PropTypes from "prop-types";

import { CustomTitle } from "@components/ecommerece";
import { GoArrowUpLeft } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import specialOffer from '../../assets/images/special-offer.png'

const SpecialOffersCarousel = () => {
  const offers = useMemo(
    () => [
      {
        id: 1,
        name: "سماعات وايرلس",
        imgSrc: specialOffer,
        discount: 50,
      },
      {
        id: 2,
        name: "سماعات وايرلس",
        imgSrc: specialOffer,
        discount: 50,
      },
      {
        id: 3,
        name: "سماعات وايرلس",
        imgSrc: specialOffer,
        discount: 20,
      },
      {
        id: 4,
        name: "سماعات وايرلس",
        imgSrc: specialOffer,
        discount: 70,
      },
      {
        id: 5,
        name: "سماعات وايرلس",
        imgSrc: specialOffer,
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
        <Link to='/products-list/product' className="font-medium text-[28px] text-custom-dark">
          {product.name}{" "}
        </Link>
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
          src={specialOffer}
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

export default SpecialOffersCarousel;
