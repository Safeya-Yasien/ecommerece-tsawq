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

const ProductsCarousel = ({ title, products, showArrows, showLabel }) => {
  return (
    <section className="flex flex-col gap-8">
      <CustomTitle title={title} />
      {/* countdown */}

      <Carousel className="w-full relative">
        <CarouselContent className="-ml-1 gap-[30px]">
          {products.map((product, index) => (
            <CarouselItem
              key={product.id || index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
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
