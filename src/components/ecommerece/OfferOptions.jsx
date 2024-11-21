import PropTypes from "prop-types";

const OfferOptions = ({ offers }) => {
  return (
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
          <div className="flex flex-col items-end leading-[10px]">
            <p className="font-bold text-sm md:text-[20px] text-custom-gray">
              {offer.price}ج
            </p>
            <span className="text-[#808080] font-normal text-[10px] md:text-sm line-through">
              {offer.originalPrice}ج
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OfferOptions;

OfferOptions.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
};
