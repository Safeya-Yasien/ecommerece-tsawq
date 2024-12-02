import { Link } from "react-router-dom";
import { memo, useMemo } from "react";

import { GoArrowUpLeft } from "react-icons/go";

import { CustomTitle } from "@components/ecommerece";

import headphone from "../../assets/images/special_offers/headphone.webp";
import ipad from "../../assets/images/special_offers/ipad.webp";
import smartScreen from "../../assets/images/special_offers/smart_screen.webp";
import iphone from "../../assets/images/special_offers/iphone.webp";

const SpecialOffersCarousel = () => {
  const offers = useMemo(
    () => [
      {
        id: 1,
        name: "سماعات وايرلس",
        imgSrc: headphone,
        discount: 50,
      },
      {
        id: 2,
        name: "سماعات وايرلس",
        imgSrc: ipad,
        discount: 50,
      },
      {
        id: 3,
        name: "سماعات وايرلس",
        imgSrc: smartScreen,
        discount: 20,
      },
      {
        id: 4,
        name: "سماعات وايرلس",
        imgSrc: iphone,
        discount: 70,
      },
    ],
    []
  );

  return (
    <section className="flex flex-col gap-8">
      <CustomTitle title={"عروض خاصة"} />
      <div className="w-full relative overflow-x-auto scrollbar-hide flex items-center gap-5">
        {offers.map((offer, index) => (
          <Offer product={offer} key={offer.id || index} />
        ))}
      </div>
    </section>
  );
};

const Offer = memo(({ product }) => {
  return (
    <Link
      to={`/`}
      className="flex-shrink-0 w-full sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex flex-col gap-2 bg-[#F6F6F6] rounded-[6px] p-8 h-[388px] relative"
    >
      {/* info */}
      <div className="flex flex-col gap-3">
        <h2 className="font-medium text-[28px] text-custom-dark">
          {product.name}{" "}
        </h2>
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
      <div className="flex justify-center items-center mt-auto">
        <img
          src={product.imgSrc}
          alt={product.name}
          loading="lazy"
          className="object-cover w-[80%] h-auto max-w-[200px] max-h-[200px]"
        />
      </div>
    </Link>
  );
});

export default SpecialOffersCarousel;
