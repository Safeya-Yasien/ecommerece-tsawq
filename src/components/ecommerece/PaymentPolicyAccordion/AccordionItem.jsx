import { memo, useState } from "react";

import PropTypes from "prop-types";

const AccordionItem = memo(({ title, icon, description, isLast, isOpen }) => {
  const [isItemOpen, setIsItemOpen] = useState(isOpen);

  const handleAccordion = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <div className="flex flex-col relative gap-4">
      <h2
        id="accordion-collapse-heading-1"
        className="flex items-center gap-2 text-[#4A4A4A] font-medium text-[20px]"
      >
        <button
          type="button"
          className="flex items-center justify-between w-full"
          data-accordion-target="#accordion-collapse-body-1"
          aria-controls="accordion-collapse-body-1"
          onClick={handleAccordion}
          aria-expanded={isItemOpen}
        >
          <span className="flex items-center gap-2 leading-[0px] font-medium text-sm md:text-[20px] ">
            {icon}
            {title}{" "}
          </span>{" "}
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${isItemOpen ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${isItemOpen ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <p className="font-normal text-xs md:text-[16px] text-[#787878] leading-7">
          {description}
        </p>
      </div>
      {!isLast && <div className="w-full h-[1px] bg-[#D7D9DB] my-4"></div>}
    </div>
  );
});
export default AccordionItem

AccordionItem.displayName = "AccordionItem";
AccordionItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
