import { Suspense, useMemo } from "react";

import {
  CategoriesCarousel,
  Features,
  Hero,
  ProductsCarousel,
  SpecialOffersCarousel,
} from "@components/ecommerece";

import { phonesList, productsList } from "@data/AllProducts";

const Home = () => {
  const memoizedProductsList = useMemo(() => productsList, []);

  const memoizedPhonesList = useMemo(() => phonesList, []);

  return (
    <div className="flex flex-col gap-12 px-6 md:px-12 md:py-9 pb-20">
      <Hero />

      <Features />
      <Suspense fallback={"loading..."}>
        <ProductsCarousel
          title="خصم لفترة محدودة"
          products={memoizedProductsList}
          showArrows={true}
          showLabel={true}
          showCountdown={true}
        />
      </Suspense>

      <CategoriesCarousel />
      <Suspense fallback={"loading..."}>
        <ProductsCarousel
          title="أفضل المبيعات"
          products={memoizedProductsList}
          showArrows={true}
          showLabel={false}
        />
      </Suspense>
      <SpecialOffersCarousel />
      <Suspense fallback={"Loading..."}>
        <ProductsCarousel
          title="الهواتف"
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
