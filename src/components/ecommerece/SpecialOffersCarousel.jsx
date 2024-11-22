import { Link } from "react-router-dom";
import { memo, useMemo } from "react";

import { GoArrowUpLeft } from "react-icons/go";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CustomTitle } from "@components/ecommerece";

import specialOffer from "../../assets/images/special-offer.png";

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

  return (
    <section className="flex flex-col gap-8">
      <CustomTitle title={"عروض خاصة"} />
      <Carousel className="w-full relative">
        <CarouselContent className="-ml-1 gap-[30px]">
          {offers.map((offer, index) => (
            <CarouselItem
              key={offer.id || index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <div className="p-1 ">
                <Offer product={offer} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

const Offer = memo(({ product }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#F6F6F6] rounded-md p-8 col-span-12 lg:col-span-3">
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

export default SpecialOffersCarousel;
