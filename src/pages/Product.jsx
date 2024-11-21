import { Suspense, useMemo } from "react";

import {
  Breadcrumb,
  ClientReviews,
  CustomizeProduct,
  ProductsCarousel,
  ThumbsGallery,
} from "@components/ecommerece";
import { FastOrderForm } from "@components/ecommerece/FastOrderForm";
import { PaymentPolicyAccordion } from "@components/ecommerece/PaymentPolicyAccordion";

import { phonesList } from "@data/AllProducts";

import { FaStar } from "react-icons/fa";

const ProductPage = () => {
  const memoizedPhonesList = useMemo(() => phonesList, []);

  return (
    <div>
      <Breadcrumb />
      <div className="px-12 py-8 flex flex-col gap-12">
        <div className="flex flex-col justify-between lg:flex-row gap-8">
          {/* right side */}
          <div className="w-full lg:w-[50%]">
            <ThumbsGallery />
          </div>
          {/* left side */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 border border-[#F6F6F6] shadow-[0px_4px_19.3px_0px_#0000000D] rounded-2xl p-4 md:p-8">
            {/* rating */}
            <div className="flex items-center gap-2">
              <ul className="flex items-center gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index}>
                    {index < 5 - 1 ? (
                      <FaStar color="#FFAF13" size={17} />
                    ) : (
                      <FaStar color="#DBDBDB" size={17} />
                    )}
                  </li>
                ))}
              </ul>
              <span className="text-[#808080] font-normal text-lg">
                (بناء علي 45 تقييم)
              </span>
            </div>

            {/* title + price */}
            <div className="flex flex-col gap-4">
              <h2 className="text-custom-gray text-lg md:text-3xl font-medium">
                آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق
                FaceTime{" "}
              </h2>
              <div className="flex items-center gap-6 leading-[25px]">
                <p className="text-custom-dark font-bold text-[20px] md:text-[32px]">
                  6500ج
                  {""}{" "}
                  <span className="line-through text-[#808080] font-normal text-xs md:text-[22px]">
                    7000
                  </span>
                </p>
                <div className="w-[99px] h-[31px] flex items-center justify-center bg-[#E0E5FF] rounded-lg text-custom-blue text-[10px] md:text-lg font-bold">
                  وفر 1000ج
                </div>
              </div>
            </div>
            <CustomizeProduct />

            {/* divide line */}
            <div className="flex items-center gap-4 justify-center">
              <div className="border border-[#CACFE1] w-[266px]"></div>
              <span className="font-normal text-lg border-[#6E768F] ">او</span>
              <div className="border border-[#CACFE1] w-[266px]"></div>
            </div>

            <div className="flex flex-col gap-6">
              <FastOrderForm />
            </div>

            {/* description */}
            <div className="flex flex-col gap-2">
              <h4 className="font-normal md:font-medium text-sm md:text-[20px] text-custom-gray">
                تفاصيل عن المنتج:
              </h4>
              <p className="text-[#787878] font-normal text-lg leading-[26px]">
                آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق
                FaceTime - إصدار الشرق آيفون 15 برو ماكس، سعة 256 جيجابايت،
                تيتانيوم طبيعي، 5G مع تطبيق FaceTime - إصدار الشرق آيفون 15 برو
                ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق FaceTime -
                إصدار الشرق الأوسط
              </p>
            </div>

            <PaymentPolicyAccordion />
          </div>
        </div>
        <ClientReviews />
        <Suspense fallback={"Loading..."}>
          <ProductsCarousel
            title="منتجات مشابهه"
            products={memoizedPhonesList}
            showArrows={true}
            showLabel={false}
          />
        </Suspense>{" "}
      </div>
    </div>
  );
};

export default ProductPage;
