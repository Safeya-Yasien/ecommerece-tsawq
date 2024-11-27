import { Link } from "react-router-dom";
import { memo, useMemo } from "react";

import { GoArrowUpLeft } from "react-icons/go";

import { CustomTitle } from "@components/ecommerece";

import headphone from "../../assets/images/special_offers/headphone.webp";
import ipad from "../../assets/images/special_offers/ipad.webp";
import smartScreen from "../../assets/images/special_offers/smart_screen.webp";
import iphone from "../../assets/images/special_offers/iphone.webp";

const SpecialOffersCarousel = () => {
  const offers = useMemo(() => [
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
  ]);

  return (
    <section className="flex flex-col gap-8">
      <CustomTitle title={"عروض خاصة"} />
      <div className="w-full relative overflow-x-auto scrollbar-hide flex items-center gap-5 ">
        {offers.map((offer, index) => (
          <Offer product={offer} key={offer.id || index} />
        ))}
      </div>
    </section>
  );
};

const Offer = memo(({ product }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#F6F6F6] rounded-md p-8 w-full sm:w-[50%] md:w-[33.3%] lg:w-[25%]">
      {/* info */}
      <div className="flex flex-col gap-3">
        <Link
          to="/products-list/product"
          className="font-medium text-[28px] text-custom-dark"
        >
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
      <div className="w-[200px] h-[200px] flex items-center justify-center mr-auto">
        <img
          src={product.imgSrc}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
});

export default SpecialOffersCarousel;
