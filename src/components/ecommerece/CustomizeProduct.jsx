import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "@/context/cart";

const CustomizeProduct = ({ item, onCustomizationChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { cartItems, addItemToCart, decreaseItemQuantity, openCartDrawer } =
    useCart();
  const currentItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const quantity = currentItem ? currentItem.quantity : 1;

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    onCustomizationChange("size", size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onCustomizationChange("color", color);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Size */}
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-lg text-custom-gray">المساحة:</h3>
        <ul className="flex items-center gap-3 flex-wrap">
          {["20x30", "30x40", "40x50"].map((size) => (
            <li
              key={size}
              onClick={() => handleSizeClick(size)}
              className={` w-[100px] h-[45px] flex items-center justify-center cursor-pointer rounded-lg font-medium text-xs md:text-lg ${
                selectedSize === size
                  ? "ring-2 ring-custom-blue text-custom-blue"
                  : "ring-1 ring-[#CFD7E5] text-[#6E768F]"
              }`}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>

      {/* Color */}
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-lg text-custom-gray">اللون:</h3>
        <ul className="flex items-center gap-3 flex-wrap">
          {["سيلفر", "رمادي", "ازرق", "احمر", "بنفسجي"].map((color) => (
            <li
              key={color}
              onClick={() => handleColorClick(color)}
              className={`w-[100px] h-[45px] flex items-center justify-center cursor-pointer rounded-lg font-medium text-xs md:text-lg ${
                selectedColor === color
                  ? "ring-2 ring-custom-blue text-custom-blue"
                  : "ring-1 ring-[#CFD7E5] text-[#6E768F]"
              }`}
            >
              {color}
            </li>
          ))}
        </ul>
      </div>

      {/* Add to Cart */}
      <div className="flex flex-col-reverse sm:flex-row items-center gap-4 mt-8">
        <button
          className="ring-1 ring-[#ECECEC] bg-[#141D2E] px-6 w-full h-[49px] rounded-[61px] flex items-center justify-center text-white font-bold text-lg gap-1 flex-nowrap"
          onClick={() => {
            addItemToCart(item);
            openCartDrawer();
          }}
        >
          <CiShoppingCart size={22} />
          <span>اضف الي السلة</span>
        </button>

        <div className="flex items-center gap-4 ring-1 ring-[#ECECEC] h-[49px] rounded-[61px] px-4 w-full sm:w-auto justify-between">
          <button
            className="w-[12px] text-custom-blue flex items-center justify-center"
            onClick={() => addItemToCart(item)}
          >
            +
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            className="text-[#666666] font-medium text-lg outline-none text-center h-full w-[91px]
            border-r border-l border-r-[#ECECEC] border-l-[#ECECEC]"
          />
          <button
            className="text-[#979797] w-[12px]"
            onClick={() => decreaseItemQuantity(item)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProduct;
