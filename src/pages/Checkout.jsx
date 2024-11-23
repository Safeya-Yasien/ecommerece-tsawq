import { CartItem } from "@/components/ecommerece";
import { UserInfoInputs } from "@components/ecommerece/UserInfoForm";
import { useMemo } from "react";

import { RiCoupon3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import delivery from "../assets/images/delivery.svg";
import coupon from "../assets/images/coupon.svg";
import money from "../assets/images/money.svg";
import headphone from "../assets/images/headphone.svg";

import credit from "../assets/images/credit-card.svg";
import paypal from "../assets/images/paypal.svg";
import paymob from "../assets/images/paymob.svg";

const Checkout = () => {
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

  const offers = [
    {
      id: 1,

      label: "بواسطة Paymob",
      icon: money,
      isSelected: true,
    },
    {
      id: 2,
      label: "الدفع عند الاستلام",
      icon: paypal,
      isSelected: false,
    },
    {
      id: 3,

      label: "بواسطة PayTabs",
      icon: paymob,
      isSelected: false,
    },
    {
      id: 4,
      label: "بواسطة بطاقة الإتمئنان",
      icon: credit,
      isSelected: false,
    },
  ];

  return (
    <div className="flex gap-8 flex-col md:flex-row">
      {/* right */}
      <div className="w-full md:w-[50%] flex flex-col gap-8 ">
        <div className="flex flex-col gap-4 border border-[#F0F3F6] shadow-[0px_4px_19px_0px_#0000000F] rounded-3xl p-8 ">
          <h2 className="text-[#252534] font-bold text-[26px]">
            يرجي إدخال بياناتك الشخصية
          </h2>
          <p className="font-medium text-lg text-[#7D7D7D]">
            قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
          </p>

          <UserInfoInputs />
        </div>
        <div className="flex flex-col gap-4 border border-[#F0F3F6] shadow-[0px_4px_19px_0px_#0000000F] rounded-3xl p-8 ">
          <h2 className="text-[#252534] font-bold text-[26px]">
            يرجي إدخال بياناتك الشخصية
          </h2>
          <p className="font-medium text-lg text-[#7D7D7D]">
            قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
          </p>

          <div className="flex flex-col gap-6 ">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className={`rounded-lg  ${
                  offer.isSelected
                    ? "border-2 border-custom-blue"
                    : "border border-[#DEDEDE]"
                }  py-4 px-5 flex items-center justify-between gap-3 leading-7 bg-[#F6F9FFCC]`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id={`offer-${offer.id}`}
                    className=" font-normal text-sm "
                    name="product-offer"
                    defaultChecked={offer.isSelected}
                    aria-checked={offer.isSelected}
                  />
                  <label
                    htmlFor={`offer-${offer.id}`}
                    className="font-medium text-sm md:text-[20px] border-[#252534] "
                  >
                    {offer.label}{" "}
                  </label>
                </div>

                <img src={offer.icon} loading="lazy" alt={offer.label} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* left */}
      <div className="w-full md:w-[50%] flex flex-col gap-4 border border-[#F0F3F6] shadow-[0px_4px_19px_0px_#0000000F] rounded-3xl p-8 ">
        <h2 className="text-[#252534] font-bold text-[26px]">ملخص الطلب </h2>
        <CartItem />

        {/* line */}
        <div className="border border-[#E5E9F1]  mt-4"></div>
        {/* copoun */}
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          <label className="sr-only" htmlFor="coupon-input">
            ادخل كوبون الخصم الخاص بك
          </label>
          <div className="relative flex-1 ">
            <input
              type="number"
              id="coupon-input"
              className="bg-[#F1F2F3] rounded-xl p-4 w-full outline-none relative pr-[30px]"
              placeholder="ادخل كوبون الخصم الخاص بك"
              aria-label="حقل إدخال كوبون الخصم"
            />
            <RiCoupon3Line
              width={24}
              color="#A1A2A5"
              className="absolute right-2 top-1/2 -translate-y-1/2 -mt-1"
            />
          </div>
          <button
            aria-label="تطبيق كوبون الخصم"
            className="flex items-center justify-center rounded-[28px] bg-custom-blue font-bold text-xs md:text-xl text-white py-3 px-12 w-full md:w-fit"
          >
            تطبيق
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">السلع</span>
            <span className="text-[#8B939F] font-medium text-lg">6500ج</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">
              مصاريف الشحن
            </span>
            <span className="text-[#8B939F] font-medium text-lg">00.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">
              كوبون الخصم
            </span>
            <span className="text-[#8B939F] font-medium text-lg">00.00</span>
          </li>
        </ul>

        <div className="border border-[#E5E9F1]  mb-4"></div>

        {/* total */}
        <div className="flex items-center justify-between text-[#3A4353] font-bold text-[22px]">
          <span className="">إجمالي المبلغ</span>
          <span className="">6500ج</span>
        </div>

        <Link
          to="thank-you"
          className="bg-custom-blue text-white flex items-center justify-center flex-nowrap font-bold text-sm md:text-xl rounded-[60px] py-6 px-6 md:px-12 w-fit mx-auto w-full"
        >
          تأكيد الطلب{" "}
        </Link>

        <ul className="flex justify-between items-center gap-4 mt-6 flex-wrap ">
          {featuresData.map((feature) => (
            <li
              key={feature.title}
              className="flex items-center flex-col gap-2"
            >
              {/* icon */}
              <div className="bg-[#3074F01A] rounded-full h-16 w-16 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={`Icon for ${feature.title}`}
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-[16px] text-custom-gray">
                توصيل مجاني
              </h3>
              {/* description */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
