import React, { useState, useEffect } from "react";
import OfferTitle from "./OfferTitle";
import OfferOptions from "../OfferOptions";
import { UserInfoInputs } from "../UserInfoForm";
import { IoFlash } from "react-icons/io5";

const FastOrderForm = ({
  onFormValidityChange,
  initialOfferId,
  onOfferChange,
}) => {
  const [selectedOfferId, setSelectedOfferId] = useState(initialOfferId || 1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const productOffers = [
    { id: 1, label: "منتج واحد فقط", price: 6500, originalPrice: 7000 },
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

  // Update offer selection and notify parent
  const handleOfferSelect = (offerId) => {
    setSelectedOfferId(offerId);
    onOfferChange(offerId); // Synchronize with URL
  };

  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    validateForm(updatedData);
  };

  const validateForm = (data) => {
    const isValid = data.name && data.phone && data.address && selectedOfferId;
    onFormValidityChange(isValid);
  };

  useEffect(() => {
    validateForm(formData);
  }, [selectedOfferId]);

  return (
    <form className="flex flex-col gap-6">
      <OfferTitle
        title={"للطلب السريع يرجي إدخال البيانات المطلوبة:"}
        icon={IoFlash}
      />
      <UserInfoInputs onInputChange={handleInputChange} />
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
