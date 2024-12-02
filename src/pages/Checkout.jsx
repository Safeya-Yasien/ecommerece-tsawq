import { useState, useMemo } from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "@/context/cart";
import { CartItem } from "@/components/ecommerece";
import { UserInfoInputs } from "@components/ecommerece/UserInfoForm";

// Importing images
import delivery from "../assets/images/delivery.svg";
import coupon from "../assets/images/coupon.svg";
import money from "../assets/images/money.svg";
import headphone from "../assets/images/headphone.svg";
import credit from "../assets/images/credit-card.svg";
import paypal from "../assets/images/paypal.svg";
import paymob from "../assets/images/paymob.svg";

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();

  // State to manage the selected offer
  const [selectedOfferId, setSelectedOfferId] = useState(1);

  // Feature data
  const featuresData = useMemo(
    () => [
      {
        icon: delivery,
        title: "توصيل مجاني",
        description: "طلبات حتي 1500ج",
      },
      {
        icon: coupon,
        title: "عروض وخصومات",
        description: "عروض وخصومات دائمة",
      },
      {
        icon: money,
        title: "الدفع عند الاستلام",
        description: "ميزة الدفع عند الاستلام",
      },
      {
        icon: headphone,
        title: "خدمة العملاء",
        description: "متوفرة 24/7",
      },
    ],
    []
  );

  // Payment offers data
  const offers = [
    {
      id: 1,
      label: "بواسطة Paymob",
      icon: paymob,
    },
    {
      id: 2,
      label: "الدفع عند الاستلام",
      icon: money,
    },
    {
      id: 3,
      label: "بواسطة PayTabs",
      icon: paypal,
    },
    {
      id: 4,
      label: "بواسطة بطاقة الإتمئنان",
      icon: credit,
    },
  ];

  // Click handler to update the selected offer
  const handleOfferClick = (id) => {
    setSelectedOfferId(id);
  };

  return (
    <div className="flex gap-8 flex-col md:flex-row">
      {/* Right Section */}
      <div className="w-full md:w-[50%] flex flex-col gap-8">
        {/* User Info */}
        <div className="flex flex-col gap-4 border border-[#F0F3F6] shadow-lg rounded-3xl p-8">
          <h2 className="text-[#252534] font-bold text-[26px]">
            يرجي إدخال بياناتك الشخصية
          </h2>
          <p className="font-medium text-lg text-[#7D7D7D]">
            قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
          </p>
          <UserInfoInputs />
        </div>

        {/* Payment Options */}
        <div className="flex flex-col gap-4 border border-[#F0F3F6] shadow-lg rounded-3xl p-8">
          <h2 className="text-[#252534] font-bold text-[26px]">اختر طريقة الدفع</h2>
          <div className="flex flex-col gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                onClick={() => handleOfferClick(offer.id)} // Click event to select offer
                className={`rounded-lg cursor-pointer ${
                  offer.id === selectedOfferId
                    ? "border-2 border-custom-blue"
                    : "border border-[#DEDEDE]"
                } py-4 px-5 flex items-center justify-between gap-3 leading-7 bg-[#F6F9FFCC]`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id={`offer-${offer.id}`}
                    name="payment-offer"
                    checked={offer.id === selectedOfferId}
                    readOnly
                  />
                  <label
                    htmlFor={`offer-${offer.id}`}
                    className="font-medium text-sm md:text-[20px]"
                  >
                    {offer.label}
                  </label>
                </div>
                <img src={offer.icon} alt={offer.label} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="h-fit w-full md:w-[50%] flex flex-col gap-4 border border-[#F0F3F6] shadow-lg rounded-3xl p-8">
        <h2 className="text-[#252534] font-bold text-[26px]">ملخص الطلب </h2>

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            showTrashIcon={false}
            showQuantityControls={true}
            showItemsQuantity={false}
            item={item}
          />
        ))}

        {/* Line */}
        <div className="border border-[#E5E9F1] mt-4"></div>

        {/* Coupon Section */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <label className="sr-only" htmlFor="coupon-input">
            ادخل كوبون الخصم الخاص بك
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="coupon-input"
              className="bg-[#F1F2F3] rounded-xl p-4 w-full outline-none pr-[50px]"
              placeholder="ادخل كوبون الخصم الخاص بك"
              aria-label="حقل إدخال كوبون الخصم"
            />
            <RiCoupon3Line
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A1A2A5]"
              size={24}
            />
          </div>
          <button
            aria-label="تطبيق كوبون الخصم"
            className="flex items-center justify-center rounded-[28px] bg-custom-blue font-bold text-xs md:text-xl text-white py-3 px-12 w-full lg:w-fit"
          >
            تطبيق
          </button>
        </div>

        {/* Price Details */}
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">السلع</span>
            <span className="text-[#8B939F] font-medium text-lg">6500ج</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">مصاريف الشحن</span>
            <span className="text-[#8B939F] font-medium text-lg">00.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">كوبون الخصم</span>
            <span className="text-[#8B939F] font-medium text-lg">00.00</span>
          </li>
        </ul>

        {/* Line */}
        <div className="border border-[#E5E9F1] mb-4"></div>

        {/* Total */}
        <div className="flex items-center justify-between text-[#3A4353] font-bold text-[22px]">
          <span>إجمالي المبلغ</span>
          <span>{getCartTotal()}ج</span>
        </div>

        <Link
          to="thank-you"
          className="bg-custom-blue text-white flex items-center justify-center font-bold text-sm md:text-xl rounded-[60px] py-6 px-6 md:px-12 w-full"
        >
          تأكيد الطلب
        </Link>

        {/* Features */}
        <ul className="flex justify-between items-center gap-4 mt-6 flex-wrap">
          {featuresData.map((feature) => (
            <li key={feature.title} className="flex items-center flex-col gap-2">
              <div className="bg-[#3074F01A] rounded-full h-16 w-16 flex items-center justify-center">
                <img src={feature.icon} alt={feature.title} loading="lazy" />
              </div>
              <h3 className="font-bold text-[16px] text-custom-gray">{feature.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
