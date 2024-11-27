import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "@/context/cart";

const CartItem = ({
  showTrashIcon,
  showQuantityControls,
  item,
  showItemsQuantity,
}) => {
  const { addItemToCart, removeItemFromCart, decreaseItemQuantity } = useCart();

  return (
    <div className="flex justify-between">
      <div className="flex gap-4  ">
        {/* img */}
        <div
          className="relative overflow-hidden shadow-[0px_0.76px_3.65px_0px_#0000000D] border border-[#E1E1E1] bg-[#F4F4F4] rounded-2xl p-2
        w-[110px] h-[90px] flex items-center justify-center  "
        >
          <img
            src={item.imgSrc}
            alt={item.name}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          {/* show number of products */}
          {showItemsQuantity && (
            <span className="absolute -top-3 -right-2 text-white bg-[#D9D9D9] font-bold text-[22px] w-[27px] h-[27px] rounded-full flex items-center justify-center">
              {item.quantity}
            </span>
          )}
        </div>
        {/* info */}
        <div className="flex flex-col gap-4  ">
          <h2 className="font-medium text-xs md:text-[16px] text-[#505255] leading-[17px] md:leading-[22px]">
            {item.name}{" "}
          </h2>

          {/* add & delete controls */}
          <div className="flex items-center gap-4">
            {showQuantityControls ? (
              <div className="flex items-center w-[86px] h-[22px]">
                <button
                  aria-label="زيادة الكمية"
                  className="bg-custom-blue text-white w-[30px] h-[100%] rounded-full flex items-center justify-center"
                  onClick={() => addItemToCart(item)}
                >
                  +
                </button>
                <input
                  type="number"
                  aria-label="كمية المنتج"
                  min={1}
                  value={item.quantity}
                  className="outline-none text-center w-full"
                />
                <button
                  aria-label="تقليل الكمية"
                  className="bg-[#A1A1A3] text-[#EDEDED] w-[30px] h-[100%] rounded-full flex items-center justify-center"
                  onClick={() => decreaseItemQuantity(item)}
                >
                  -
                </button>
              </div>
            ) : (
              ""
            )}

            {showTrashIcon && (
              <button
                className="cursor-pointer w-[23px] h-[23px]"
                onClick={() => removeItemFromCart(item)}
              >
                <FaRegTrashAlt />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* price */}
      <div className="flex items-center justify-center flex-col 3xl:flex-row leading-[20px]">
        <span className="text-custom-gray font-medium text-[16px] md:text-[20px]">
          {item.price}ج
        </span>{" "}
        <span className="text-[#808080] font-normal text-xs md:text-[14px] line-through">
          {item.originalPrice}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
