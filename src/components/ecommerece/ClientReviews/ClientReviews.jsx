import { CustomTitle } from "@components/ecommerece";

import RatingList from "./RatingList";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ClientReviewsSwiper from "./ClientReviewsSwiper";

const ClientReviews = () => {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const handleReviewForm = () => {
    setIsReviewFormOpen(!isReviewFormOpen);
  };

  return (
    <>
      {/* our customer reviews */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mt-24 relative">
        <div className="flex flex-col gap-3 flex-1">
          <CustomTitle title={"تقييمات عملائنا"} />
          <p className="text-[#787878] font-normal text-lg">
            بعض من تقيمات عملائنا عن هذا المنتج. اطلب الان واكتب تقييمك
          </p>
          <button
            onClick={handleReviewForm}
            className="text-white bg-custom-blue font-bold text-lg flex items-center justify-center w-[147px] h-[48px] rounded-[39px]"
          >
            اكتب تقييمك
          </button>
        </div>

        <RatingList />

        {isReviewFormOpen && <ReviewForm handleReviewForm={handleReviewForm} />}
      </div>

      {/* swiper */}
      <div className="mt-6">
        <ClientReviewsSwiper />
      </div>
    </>
  );
};
export default ClientReviews;
