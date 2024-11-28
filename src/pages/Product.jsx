import { useParams, useNavigate } from "react-router-dom";
import { Suspense, useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

import {
  Breadcrumb,
  ClientReviews,
  CustomizeProduct,
  ProductsCarousel,
  ThumbsGallery,
} from "@components/ecommerece";
import { FastOrderForm } from "@components/ecommerece/FastOrderForm";
import { PaymentPolicyAccordion } from "@components/ecommerece/PaymentPolicyAccordion";

import { phonesList, productsList } from "@/data/AllProducts";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  const memoizedPhonesList = useMemo(() => phonesList, []);

  useEffect(() => {
    setProduct(productsList.find((p) => p.id === productId));
  }, [productId]);

  const handleCustomizationChange = (key, value) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set(key, value);
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  return (
    <div>
      <Breadcrumb currentPage={`${product.name}`} />
      <div className="px-4 md:px-12 mb-12 py-8 flex flex-col gap-12">
        <div className="flex flex-col justify-between lg:flex-row gap-8">
          {/* right side */}
          <div className="w-full lg:w-[50%]">
            <ThumbsGallery
              productImages={product?.images || []}
              productName={product.name}
            />
          </div>
          {/* left side */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 border border-[#F6F6F6] shadow-[0px_4px_19.3px_0px_#0000000D] rounded-2xl p-4 md:p-8">
            <div className="flex items-center gap-2">
              <ul className="flex items-center gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index}>
                    <FaStar color={index < 4 ? "#FFAF13" : "#DBDBDB"} size={17} />
                  </li>
                ))}
              </ul>
              <span className="text-[#808080] font-normal text-lg">(بناء علي 45 تقييم)</span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-custom-gray text-lg md:text-3xl font-medium">
                {product.name}
              </h2>
              <div className="flex items-center gap-6 leading-[25px]">
                <p className="text-custom-dark font-bold text-[20px] md:text-[32px]">
                  {product.price}ج
                  <span className="pr-1 line-through text-[#808080] font-normal text-xs md:text-[22px]">
                    {product.originalPrice}ج
                  </span>
                </p>
                <div className="w-[99px] h-[31px] flex items-center justify-center bg-[#E0E5FF] rounded-lg text-custom-blue text-[10px] md:text-lg font-bold">
                  وفر {product.originalPrice - product.price}ج
                </div>
              </div>
            </div>
            <CustomizeProduct item={product} onCustomizationChange={handleCustomizationChange} />
            <div className="flex items-center gap-4 justify-center">
              <div className="border border-[#CACFE1] w-[266px]"></div>
              <span className="font-normal text-lg border-[#6E768F] ">او</span>
              <div className="border border-[#CACFE1] w-[266px]"></div>
            </div>
            <FastOrderForm />
            <div className="flex flex-col gap-4">
              <h4 className="font-normal md:font-medium text-sm md:text-[20px] text-custom-gray">
                تفاصيل عن المنتج:
              </h4>
              <p className="text-[#787878] font-normal text-lg leading-[26px]">
                {product.description}
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
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;
