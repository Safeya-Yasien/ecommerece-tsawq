import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "@/context/cart";

const CartItem = ({
  showTrashIcon,
  showQuantityControls,
  item,
  showItemsQuantity,
}) => {
  const { cartItems, addItemToCart, removeItemFromCart, decreaseItemQuantity } =
    useCart();

  return (
    <div className="flex justify-between">
      <div className="flex gap-6 flex-wrap lg:flex-nowrap">
        <div
          className="relative shadow-[0px_0.76px_3.65px_0px_#0000000D] border border-[#E1E1E1] bg-[#F4F4F4] rounded-2xl p-8
        w-28 h-28 flex items-center justify-center  "
        >
          <img
            src={item.imgSrc}
            alt={item.name}
            loading="lazy"
            className="w-[100px] h-[100px]"
          />
          {showItemsQuantity && (
            <span className="absolute -top-3 -right-2 text-white bg-[#D9D9D9] font-bold text-[22px] w-[27px] h-[27px] rounded-full flex items-center justify-center">
              {item.quantity}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 justify-between ">
          <h2 className="font-medium text-sm md:text-lg text-[#505255] w-full ">
            {item.name}{" "}
          </h2>

          <div className="flex items-center gap-6">
            {showQuantityControls ? (
              <div className="flex items-center w-[86px] h-[22px]">
                <button
                  aria-label="زيادة الكمية"
                  className="bg-custom-blue text-white w-[22px] h-[22px] rounded-full"
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
                  className="bg-[#A1A1A3] text-[#EDEDED] w-[22px] h-[22px] rounded-full "
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
                className="cursor-pointer"
                onClick={() => removeItemFromCart(item)}
              >
                <FaRegTrashAlt size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* price */}
      <div className="flex items-center justify-center flex-col 3xl:flex-row">
        <span className="text-custom-gray font-bold text-[22px]">
          {item.price}ج
        </span>{" "}
        <span className="text-[#808080] font-normal  text-[16px] line-through">
          {item.originalPrice}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
