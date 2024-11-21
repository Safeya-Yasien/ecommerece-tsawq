import { useMemo } from "react";

import { IoBagOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { RiArrowGoBackFill } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import AccordionItem from "./AccordionItem";

const PaymentPolicyAccordion = () => {
  const accordionItems = useMemo(
    () => [
      {
        id: 1,
        title: "سياسة الدفع عند الاستلام",
        icon: <IoBagOutline size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },

      {
        id: 2,
        title: "سياسة الشحن",
        icon: <LiaBusinessTimeSolid size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },
      {
        id: 3,
        title: "سياسة الاسترجاع",
        icon: <RiArrowGoBackFill size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },
      {
        id: 4,
        title: "خدمة العملاء",
        icon: <CiHeadphones size={26} />,
        description:
          "تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل",
      },
    ],
    []
  );

  return (
    <div
      id="accordion-collapse"
      className="rounded-3xl border border-[#D7D9DB] p-6 flex flex-col gap-4 "
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          description={item.description}
          isLast={index === accordionItems.length - 1}
          isOpen={index === 0}
        />
      ))}
    </div>
  );
};
export default PaymentPolicyAccordion;
