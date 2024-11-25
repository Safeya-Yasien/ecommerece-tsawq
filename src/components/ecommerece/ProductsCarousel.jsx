import { Link } from "react-router-dom";

import { CustomTitle, ProductCard } from "@components/ecommerece";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoArrowLeft } from "react-icons/go";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const ProductsCarousel = ({
  title,
  products,
  showArrows,
  showLabel,
  showCountdown,
}) => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
        <CustomTitle title={title} />
        {/* countdown */}
        {showCountdown && (
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        )}
      </div>

      <Carousel className="w-full relative">
        <CarouselContent className="-ml-1 gap-[30px]">
          {products.map((product, index) => (
            <CarouselItem
              key={product.id || index}
              className="pl-1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <div className="p-1 ">
                <ProductCard product={product} showLabel={showLabel} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showArrows ? (
          <>
            <CarouselPrevious className="cursor-pointer absolute left-0 -top-[53px] transform -translate-y-1/2 disabled:pointer-events-auto" />
            <CarouselNext className="cursor-pointer absolute left-0 -top-[53px] transform -translate-y-1/2 ml-10 right-auto disabled:pointer-events-auto" />
          </>
        ) : (
          <Link
            to=""
            className="flex items-center text-custom-blue gap-1 underline absolute left-0 -top-[53px] transform -translate-y-1/2"
          >
            عرض المزيد{" "}
            <span>
              <GoArrowLeft />
            </span>
          </Link>
        )}
      </Carousel>
    </section>
  );
};

export default ProductsCarousel;
