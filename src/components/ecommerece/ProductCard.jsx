import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

import PropTypes from "prop-types";

const ProductCard = ({
  product,
  showLabel,
  buttonPosition = "left-[15px]",
}) => {
  return (
    <div className="bg-white shadow-[0px_4px_26.8px_0px_#0000000D] border border-[#F0F3F6] rounded-[14px]  flex flex-col">
      {/* img */}
      <div className="p-8 mx-auto relative">
        {showLabel ? (
          <div className="flex items-center justify-center text-white font-medium text-sm bg-[#FF2828] w-20 h-6 rounded-2xl">
            خصم 50%
          </div>
        ) : (
          ""
        )}
        <img
          src={product.imgSrc}
          alt={product.name}
          aria-label="shopping cart"
          loading="lazy"
          className="object-cover"
        />
        <button
          className={`w-9 h-[34px] bg-custom-blue rounded-md text-white flex items-center justify-center absolute ${buttonPosition}`}
          aria-label="shopping cart"
        >
          <CiShoppingCart size={24} />
        </button>
      </div>
      {/* info */}
      <div className="flex flex-col gap-4 p-4">
        <Link
          to="/products-list/product"
          className="font-normal text-lg text-custom-gray line-clamp-2 h-14"
        >
          {product.name}{" "}
        </Link>
        <div className="flex items-center justify-between gap-4 whitespace-nowrap">
          <p>
            <span className="text-[#E02954] font-bold text-[20px]">
              {product.price}ج{" "}
            </span>
            <span className="text-[#808080] font-normal text-[16px] line-through">
              {product.originalPrice}
            </span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-normal text-[16px] text-[#808080]">
              {product.rating}/5
            </span>
            <FaStar color="#FFAF13" />
          </p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  showLabel: PropTypes.bool,
  buttonPosition: PropTypes.string,
};

export default ProductCard;
