import { IoFlash } from "react-icons/io5";
import OfferTitle from "./OfferTitle";
import { UserInfoInputs } from "../UserInfoForm";
import { OfferOptions } from "..";
import { useState } from "react";

const FastOrderForm = () => {
  const [selectedOfferId, setSelectedOfferId] = useState(1);

  const productOffers = [
    {
      id: 1,
      label: "منتج واحد فقط",
      price: 6500,
      originalPrice: 7000,
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

  const handleOfferSelect = (offerId) => {
    setSelectedOfferId(offerId);
  };

  return (
    <form className="flex flex-col gap-6">
      <OfferTitle
        title={"للطلب السريع يرجي إدخال البيانات المطلوبة:"}
        icon={IoFlash}
      />

      <UserInfoInputs />

      <OfferTitle title={"عروض التوفير"} icon={IoFlash} />

      <OfferOptions
        offers={productOffers}
        selectedOfferId={selectedOfferId}
        onOfferSelect={handleOfferSelect}
      />
    </form>
  );
};

export default FastOrderForm;
