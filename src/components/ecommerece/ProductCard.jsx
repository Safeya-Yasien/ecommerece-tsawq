import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, showLabel }) => {
  return (
    <Card className="bg-white shadow-[0px_4px_26.8px_0px_#0000000D] rounded-lg flex flex-col border-none">
      {/* Image */}
      <div className="p-8 mx-auto relative">
        {showLabel && (
          <div className="absolute top-2 left-2 text-white font-medium text-sm bg-[#FF2828] w-20 h-6 rounded-2xl flex items-center justify-center">
            خصم 50%
          </div>
        )}
        <img
          src={product.imgSrc}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-48 rounded-t-lg"
        />
        <Button
          aria-label="Add to cart"
          className={`absolute left-0 w-9 h-9 bg-custom-blue rounded-md text-white flex items-center justify-center hover:bg-custom-blue`}
        >
          <CiShoppingCart size={24} />
        </Button>
      </div>

      {/* Product Info */}
      <CardContent className="flex flex-col gap-4 p-4">
        <Link
          to="/products-list/product"
          className="font-normal text-lg text-custom-gray line-clamp-2 h-14"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between gap-4">
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
      </CardContent>
    </Card>
  );
};

export default ProductCard;
