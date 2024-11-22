import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { FaStar } from "react-icons/fa";

export function Hero() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1 bg-[#F8F9FF]">
            <CardContent className="p-6">
              <div className="!flex items-center justify-between h-full">
                {/* img */}
                <div className="hidden lg:flex flex-1">
                  <img
                    src="src/assets/images/hero.webp"
                    alt="hero"
                    className="object-cover h-full w-full"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-4 items-end flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[16px] font-bold text-custom-blue">
                      من افضل منتجات هذا الشهر
                    </p>
                    <span
                      className="h-[18px] w-[18px] bg-custom-blue rounded-full text-white
            flex items-center justify-center"
                    >
                      <FaStar size={12} />
                    </span>
                  </div>

                  <h1 className="font-bold text-[50px] text-custom-dark">
                    تشكيلة من سماعات الرأس اللاسلكية للالعاب
                  </h1>
                  <p className="text-lg text-[#787878] font-normal">
                    تمتع بافضل تشكيلة جديدة وحصريه من سماعات الرأس اللاسلكية
                    للالعاب. عروض وخصومات في انتظارك
                  </p>
                  <button
                    className="bg-custom-blue text-white rounded-md font-bold text-lg leading-[26px] w-[121px] h-[43px]"
                    aria-label="اطلب الان"
                  >
                    أطلب الان
                  </button>
                </div>
              </div>
            </CardContent>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default Hero;
