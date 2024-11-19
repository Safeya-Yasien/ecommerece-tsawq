import { Suspense, useMemo } from "react";

import {
  CategoriesCarousel,
  Features,
  HeroSlider,
  ProductsCarousel,
  SpecialOffersCarousel,
} from "@components/ecommerece";

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
        <ProductsCarousel
          products={productsList}
          showArrows={true}
          showLabel={true}
        />
      </Suspense>
      <CategoriesCarousel />
      <Suspense fallback={"Loading..."}>
        <ProductsCarousel
          products={productsList}
          showArrows={true}
          showLabel={false}
        />
      </Suspense>
      <SpecialOffersCarousel />
      <Suspense fallback={"Loading..."}>
        <ProductsCarousel
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
