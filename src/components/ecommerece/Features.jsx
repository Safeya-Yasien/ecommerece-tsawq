import React, { useMemo } from "react";
import PropTypes from "prop-types";

const Features = () => {
  const featuresData = useMemo(
    () => [
      {
        icon: "src/assets/images/delivery.svg",
        title: "توصيل مجاني",
        description: "طلبات حتي 1500ج",
      },
      {
        icon: "src/assets/images/coupon.svg",
        title: "عروض وخصومات",
        description: "عروض وخصومات دائمة",
      },
      {
        icon: "src/assets/images/money.svg",
        title: "الدفع عند الاستلام",
        description: "ميزة الدفع عند الاستلام",
      },
      {
        icon: "src/assets/images/headphone.svg",
        title: "خدمة العملاء",
        description: "متوفرة 24/7",
      },
    ],
    []
  );

  return (
    <section className="sm:w-[90%] mx-auto">
      <div className="flex flex-wrap items-center justify-around gap-8 p-8 bg-white shadow-[0px_4px_29px_0px_#2123280F]">
        {featuresData.map((feature, index) => (
          <React.Fragment key={index}>
            <Feature
              iconSrc={feature.icon}
              title={feature.title}
              description={feature.description}
            />
            {index < featuresData.length - 1 && (
              <div className="hidden md:block border-l border-[#ECECEC] h-16"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const Feature = React.memo(({ iconSrc, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="w-12">
        <img
          src={iconSrc}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-lg text-custom-gray">{title}</h2>
        <p className="text-sm text-[#787878] font-normal">{description}</p>
      </div>
    </div>
  );
});

Feature.displayName = "Feature";

Feature.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Features;
