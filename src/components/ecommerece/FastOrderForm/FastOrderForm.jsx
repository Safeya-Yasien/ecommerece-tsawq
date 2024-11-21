import { IoFlash } from "react-icons/io5";

import OfferTitle from "./OfferTitle";
import { UserInfoInputs } from "../UserInfoForm";
import { OfferOptions } from "..";

const FastOrderForm = () => {
  const productOffers = [
    {
      id: 1,
      label: "منتج واحد فقط",
      price: 6500,
      originalPrice: 7000,
      isSelected: true,
    },
    {
      id: 2,
      label: "اشتري 2 و احصل على خصم 10٪",
      price: 13000,
      originalPrice: 14000,
    },
    {
      id: 3,
      label: "اشتري 3 و احصل على خصم 15٪",
      price: 18000,
      originalPrice: 21000,
    },
  ];

  return (
    <form className="flex flex-col gap-6">
      <OfferTitle
        title={"للطلب السريع يرجي إدخال البيانات المطلوبة:"}
        icon={IoFlash}
      />

      <UserInfoInputs />

      <OfferTitle title={"عروض التوفير"} icon={IoFlash} />

      <OfferOptions offers={productOffers} />

      <div className="ring-1 ring-[#E5E9F1] w-full mt-2"></div>
      <div className="flex items-center justify-between">
        <p className="text-[#3A4353] font-bold text-[20px]">إجمالي المبلغ:</p>
        <p className="text-[#3A4353] font-bold text-[22px]">6500ج</p>
      </div>

      <button
        aria-label="اشترى الان"
        className="text-white font-bold text-[16px] sm:text-[22px] shadow-[0px_4px_19.2px_0px_#3074F066] ring-1 ring-[#ECECEC] rounded-[61px] flex items-center justify-center bg-custom-blue h-[69px]"
      >
        اشتري الان - الدفع عند الاستلام
      </button>
    </form>
  );
};
export default FastOrderForm;
